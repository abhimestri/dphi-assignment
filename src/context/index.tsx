import { createContext } from "react";

export const DefaultDataContext: any = createContext({
  hackthonList: [],
  setHackthonList: (data: any) => {
    return data;
  },
});
