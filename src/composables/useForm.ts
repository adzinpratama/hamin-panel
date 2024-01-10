// useForm.ts
import {
  AxiosError,
  AxiosRequestConfig,
  AxiosResponse,
  CancelTokenSource,
} from "axios";
import isEqual from "lodash/isEqual";
import { useAxios } from "./useAxios";
import { ref, Ref, reactive, onMounted, watch, toRefs } from "vue";

type FormDataType = Record<string, any>;
type Method = "get" | "post" | "put" | "patch" | "delete";

interface Progress {
  [key: string]: any;
}

interface FormOptions extends AxiosRequestConfig {
  onCancelToken?: (token: CancelTokenSource) => void;
  onBefore?: (visit: any) => any;
  onStart?: (visit: any) => any;
  onProgress?: (event: any) => any;
  onSuccess?: (response: AxiosResponse) => any;
  onError?: (errors: any) => any;
  onCancel?: () => any;
  onFinish?: () => any;
}

interface FormProps<TForm extends FormDataType> {
  isDirty: Ref<boolean>;
  errors: Ref<Partial<Record<keyof TForm, string>>>;
  hasErrors: Ref<boolean>;
  processing: Ref<boolean>;
  progress: Ref<Progress | null>;
  wasSuccessful: Ref<boolean>;
  recentlySuccessful: Ref<boolean>;
  data: Ref<TForm>;
  transform(callback: (data: TForm) => object): void;
  defaults(): void;
  defaults(field: keyof TForm, value: FormDataConvertible): void;
  defaults(fields: Partial<TForm>): void;
  reset(...fields: (keyof TForm)[]): void;
  clearErrors(...fields: (keyof TForm)[]): void;
  setError(field: keyof TForm, value: string): void;
  setError(errors: Record<keyof TForm, string>): void;
  submit(method: Method, url: string, options?: FormOptions): Promise<void>;
  get(url: string, options?: FormOptions): void;
  post(url: string, options?: FormOptions): void;
  put(url: string, options?: FormOptions): void;
  patch(url: string, options?: FormOptions): void;
  delete(url: string, options?: FormOptions): void;
  cancel(): void;
  emitUpdate(): void;
}

type FormDataConvertible = any;

export type InertiaForm<TForm extends FormDataType> = TForm & FormProps<TForm>;

function useForm<TForm extends FormDataType>(
  initialData: TForm | (() => TForm),
  rememberKey?: string
): InertiaForm<TForm> {
  const axiosClient = useAxios();
  const { value: data, ...dataRefs } = toRefs(
    reactive<TForm>(
      typeof initialData === "function" ? initialData() : initialData
    )
  );
  const errors = ref<Partial<Record<keyof TForm, string>>>({});
  const isDirty = ref<boolean>(false);
  const hasErrors = ref<boolean>(false);
  const processing = ref<boolean>(false);
  const progress = ref<Progress | null>(null);
  const wasSuccessful = ref<boolean>(false);
  const recentlySuccessful = ref<boolean>(false);

  let defaults = Object.assign({}, data.value);
  let cancelToken: CancelTokenSource | null = null;
  let recentlySuccessfulTimeoutId: any = null;
  let transform: (data: TForm) => object = (data) => data;

  const emitUpdate = () => {};

  const submit = async (
    method: Method,
    url: string,
    options: FormOptions = {}
  ): Promise<void> => {
    try {
      processing.value = true;
      console.log(data.value);

      const response: AxiosResponse = await axiosClient[method](
        url,
        transform(data.value),
        options
      );
      onSuccess(response);
    } catch (error) {
      onError(error);
    } finally {
      processing.value = false;
      progress.value = null;
      cancelToken = null;
      options?.onFinish?.();
      emitUpdate();
    }
  };

  const onSuccess = (response: AxiosResponse): void => {
    wasSuccessful.value = true;
    recentlySuccessful.value = true;
    recentlySuccessfulTimeoutId = setTimeout(
      () => (recentlySuccessful.value = false),
      2000
    );
    defaults = Object.assign({}, data.value);
    isDirty.value = false;
    options?.onSuccess?.(response);
  };

  const onError = (error: AxiosError): void => {
    errors.value = error.response?.data?.errors || {};
    hasErrors.value = Object.keys(errors.value).length > 0;
    options?.onError?.(errors.value);
  };

  onMounted(() => {
    watch(
      dataRefs,
      () => {
        isDirty.value = !isEqual(data.value, defaults);
      },
      { deep: true }
    );
  });

  return {
    ...dataRefs,
    isDirty,
    errors,
    hasErrors,
    processing,
    progress,
    wasSuccessful,
    recentlySuccessful,
    transform,
    defaults(field, value) {
      if (field && value) {
        defaults[field] = value;
      } else {
        defaults = Object.assign({}, data.value);
      }
    },
    reset(...fields) {
      if (fields.length === 0) {
        Object.assign(data.value, Object.assign({}, defaults));
      } else {
        fields.forEach((field) => {
          data.value[field] = defaults[field];
        });
      }
    },
    clearErrors(...fields) {
      Object.keys(errors.value).forEach((field) => {
        if (fields.length === 0 || fields.includes(field as keyof TForm)) {
          delete errors.value[field as keyof TForm];
        }
      });
      hasErrors.value = Object.keys(errors.value).length > 0;
    },
    setError(field, value) {
      errors.value[field] = value;
      hasErrors.value = true;
    },
    submit,
    get(url, options) {
      submit("get", url, options);
    },
    post(url, options) {
      submit("post", url, options);
    },
    put(url, options) {
      submit("put", url, options);
    },
    patch(url, options) {
      submit("patch", url, options);
    },
    delete(url, options) {
      submit("delete", url, options);
    },
    cancel() {
      if (cancelToken) {
        cancelToken.cancel();
      }
    },
    emitUpdate,
  };
}

export default useForm;
