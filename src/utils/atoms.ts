import { atom, createStore } from "jotai";

interface MessageType {
  type: "success" | "error" | "warning";
  title: string | null;
  content: string | null;
}

export const messageContent = atom<MessageType>({
  type: "success",
  title: null,
  content: null,
});
export const setMessageContent = createStore();

export const photoAtom = atom<string | null>(null);
