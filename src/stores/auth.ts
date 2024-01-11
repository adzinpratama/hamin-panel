import { defineStore } from "pinia";
import { getCookie, setCookie } from "../utils/supports";

export interface authState {
  isLoggedIn?: boolean | null;
}

export const useAuthStore = defineStore("auth", {
  state: (): authState => ({
    isLoggedIn: false,
  }),

  actions: {
    login: () => {
      console.log("oke");
      setCookie("isLoggedIn", true);
    },
  },
  getters: {
    cookieLoggedIn: (state) => (state.isLoggedIn = getCookie("isLoggedIn")),
  },
});
