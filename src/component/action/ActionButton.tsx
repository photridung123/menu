import { sendNotification } from "@/services/telegramService";
import { useToast } from "@/store";
import { Action } from "./ActionMenu";
import { CldImage } from "next-cloudinary";
import { PREFIX_CLOUDINARY } from "@/constant";

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
      <p className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 w-64 text-sm text-center capitalize">
        {action.title}
      </p>
      <CldImage
        width={200}
        height={300}
        src={`${PREFIX_CLOUDINARY}/${action.image}`}
        alt="action-image"
        className="w-64 h-56 object-cover"
      />
    </div>
  );
};
