import { atom, createStore } from "jotai";

interface MessageType {
  type: "success" | "error";
  content: string | null;
}

export const messageContent = atom<MessageType>({
  type: "success",
  content: null,
});
export const setMessageContent = createStore();
