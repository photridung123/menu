import { useEffect } from "react";
import { create } from "zustand";

export interface ToastState {
  message: string;
  setMessage: (msg: string) => void;
  clearMessage: () => void;
}

const useToastStore = create<ToastState>((set, get) => ({
  message: "",
  setMessage: (msg: string) => set(() => ({ message: msg })),
  clearMessage: () => set(() => ({ message: "" })),
}));

export const useToast = () => {
  const { message, setMessage, clearMessage } = useToastStore((state) => {
    return {
      message: state.message,
      setMessage: state.setMessage,
      clearMessage: state.clearMessage,
    };
  });

  const openToast = (msg: string) => {
    setMessage(msg);
    setTimeout(() => {
      clearMessage();
    }, 2000);
  };

  return {
    message,
    openToast,
  };
};
