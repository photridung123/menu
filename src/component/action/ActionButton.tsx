/* eslint-disable @next/next/no-img-element */
import { sendNotification } from "@/services/telegramService";
import { useToast } from "@/store";
import { Action } from "./ActionMenu";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const ActionButton = (action: Action) => {
  const { openToast } = useToast();

  const onClick = async () => {
    await sendNotification(action.text);
    openToast("Anh nhận được tin nhắn rồi nha bé heo 😍");
  };

  return (
    <div
      className="w-full flex flex-col items-center mt-8"
      role="button"
      onClick={onClick}
    >
      <p className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 w-52 text-sm text-center capitalize">
        {action.title}
      </p>
      <img
        src={action.image}
        className="w-52 object-cover h-auto"
        alt="action-image"
      />
    </div>
  );
};
