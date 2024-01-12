import { toRefs, reactive } from "@vue/reactivity";

interface ConfigOption {
  message?: string | null;
  title?: string | null;
  onAccept?: Function;
  onDismiss?: Function;
}

const questionModal = reactive({
  closeOnAccept: true,
  message: "aksi tidak bisa dibatalkan",
  title: "Apa kamu yakin ?",
  loading: false,
  onAccept: () => null,
  onDismiss: () => null,
  ref: null,
});

export function useConfirm() {
  const dismiss = () => questionModal.ref?.close();
  const open = () => questionModal.ref?.show();

  const declareRef = (ref: any) => (questionModal.ref = ref);

  const config = (options: ConfigOption) => {
    if (options?.message) questionModal.message = options.message;
    if (options?.title) questionModal.title = options.title;
    if (options?.onAccept) questionModal.onAccept = options.onAccept;
    if (options?.onDismiss) questionModal.onDismiss = options.onDismiss;
  };

  const require = (options?: ConfigOption) => {
    config(options);
    open();
  };

  const accept = () => {
    if (questionModal.closeOnAccept) dismiss();
    questionModal.onAccept();
  };
  return {
    confirmDialog: toRefs(questionModal),
    dismiss,
    config,
    accept,
    require,
    open,
    close,
    declareRef,
  };
}
