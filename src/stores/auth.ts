import { defineStore } from "pinia";
import { deleteCookie, getCookie, setCookie } from "../utils/supports";

export interface authState {
  isLoggedIn?: boolean | null;
}

export const useAuthStore = defineStore("auth", {
  state: (): authState => ({
    isLoggedIn: false,
  }),

  actions: {
    login() {
      setCookie("isLoggedIn", true);
      this.isLoggedIn = true;
    },
    logout() {
      deleteCookie("isLoggedIn");
      this.isLoggedIn = false;
      alert("session Ended");
    },
  },
  getters: {
    cookieLoggedIn: (state) => (state.isLoggedIn = getCookie("isLoggedIn")),
  },
});
