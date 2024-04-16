import type { StateCreator } from "zustand";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

import type { MenuType } from "@/types/menu";

interface StoreContent {
  readonly username: string;
  readonly token: string;
  readonly menus: MenuType[];
  fetchUserInfo: () => void;
}

const stateCreator: StateCreator<StoreContent, [["zustand/immer", never]]> = (set) => ({
  username: "",
  token: "",
  menus: [],

  fetchUserInfo: async () => {
    const menus: MenuType[] = [
      {
        name: "home",
        path: "/",
      },
      {
        name: "admin",
        path: "/admin",
        children: [
          { name: "admin-index", path: "index" },
          {
            name: "admin-child",
            path: "child",
          },
        ],
      },
      {
        name: "dashboard",
        path: "/dashboard",
      },
    ];
    set({
      username: "123",
      token: "token",
      menus,
    });
    return;
  },
});

export const useStore = create<StoreContent>()(immer(stateCreator));
