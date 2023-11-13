"use client";

import { ACTION_MENU, Action, PASS_CODE } from "@/constant";
import { sendNotification } from "@/services/telegramService";
import { useEffect, useState } from "react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Toast = ({ msg }: { msg: string }) => {
  return (
    <div className="font-bold fixed z-50 left-0 bottom-10 w-2/3 h-fit bg-amber-200/90 rounded-tl-md rounded-tr-md grid place-items-center p-4">
      {msg}
    </div>
  );
};

const ActionButton = (action: Action) => {
  const [show, setShow] = useState(false);
  const onClick = async () => {
    await sendNotification(action.text);
    setShow(true);
    setTimeout(() => {
      setShow(false);
    }, 2000);
  };

  return (
    <>
      <button className="w-fit m-4" onClick={onClick}>
        <p className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-[300px]">
          {action.title}
        </p>
        <img src={action.image} className="w-[300px] h-auto" />
      </button>
      {show && <Toast msg="Anh nhận được rồi nheeee, anh qua liền nè 😍" />}
    </>
  );
};

const ActionMenu = () => {
  return (
    <>
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="font-bold fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Anh ơi em...
        </p>
      </div>
      {ACTION_MENU.map((item: Action, index: number) => (
        <ActionButton key={index} {...item} />
      ))}
    </>
  );
};

const VerificationCodeInput = ({
  code,
  onClick,
}: {
  code: string;
  onClick: () => void;
}) => {
  return (
    <button
      className={`rounded-full h-16 w-16 flex items-center justify-center border-2 border-gray-300 justify-self-center ${
        code === "." ? "opacity-0" : ""
      }`}
      onClick={onClick}
    >
      {code}
    </button>
  );
};
const Verification = ({
  setIsVerified,
}: {
  setIsVerified: (value: boolean) => void;
}) => {
  const [value, setValue] = useState("");

  useEffect(() => {
    if (value.length === PASS_CODE.length) {
      if (value === PASS_CODE) {
        setIsVerified(true);
      }
      setValue("");
    }
  }, [value]);
  return (
    <>
      <p>Nhập mật khẩu</p>
      <div className="flex">
        {PASS_CODE.split("").map((_, index: number) => {
          const displayValue = value.charAt(index);
          return (
            <p
              className="w-10 h-10 border-2 border-gray-300 p-2 m-2 text-center"
              key={`code-${index}`}
            >
              {displayValue}
            </p>
          );
        })}
      </div>

      <div className="grid grid-cols-3 gap-12 gap-y-8 mt-6">
        {"123456789.0".split("").map((item: string) => (
          <VerificationCodeInput
            key={`code-index-${item}`}
            code={item}
            onClick={() => setValue(`${value}${item}`)}
          />
        ))}
        {value !== "" && (
          <VerificationCodeInput
            key={"x"}
            code={"Xóa"}
            onClick={() => setValue(value.slice(0, value.length - 1))}
          />
        )}
      </div>
    </>
  );
};
export default function Home() {
  const [isVerified, setIsVerified] = useState(false);
  return (
    <main className="w-screen flex min-h-screen flex-col items-center justify-evenly p-20">
      {isVerified ? (
        <ActionMenu />
      ) : (
        <Verification setIsVerified={setIsVerified} />
      )}
    </main>
  );
}
