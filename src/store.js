import { object } from "zod";
import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

const myStore = (set) => {
  return {
    total: 0,
    products: [],
    ADD_TO_CART: (payload) =>
      set((state) => {
        const newTab = [...state.products, payload];
        state.products = newTab;
        state.total += payload.price;
      }),
    REMOVE_FROM_CART: (payload) =>
      set((state) => {
        state.total -= payload.price;
        state.products = state.products.filter(
          (elem) => elem.title !== payload.title,
        );
      }),
    theme: "light",
    SWITCH_THEME: () =>
      set((state) => {
        if (state.theme === "dark") {
          state.theme = "light";
        } else {
          state.theme = "dark";
        }
      }),
  };
};

export const useStore = create(devtools(immer(myStore)));
