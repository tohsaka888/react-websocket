import { createContext } from "react";

type Props = {
  ws?: WebSocket;
};

export const Context = createContext<Props>({ ws: undefined });
