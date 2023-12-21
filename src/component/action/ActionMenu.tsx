import { ReactNode } from "react";
import { ActionButton } from ".";
import { AlarmActionModal } from "./custom";

export interface Action {
  title: string;
  image: string;
  text: string;
  customRenderer?: ReactNode;
}

export const ACTION_MENU: Action[] = [
  {
    title: "muốn nói chuyện với anh",
    image: "/menu/het_gian.jpg",
    text: "Anh ơi, em muốn nói chuyện với anh",
    customRenderer: <AlarmActionModal />,
  },
  {
    title: "muốn nói chuyện với anh",
    image: "/menu/het_gian.jpg",
    text: "Anh ơi, em muốn nói chuyện với anh",
  },
  {
    title: "muốn đi chơi với anh",
    image: "/menu/chan_qua.jpg",
    text: "Anh ơi, em chán quá, dẫn em đi chơi đi",
  },
  {
    title: "muống đi ăn với anh",
    image: "/menu/di_an.jpg",
    text: "Anh ơi, em đói rồi, dẫn em đi ăn đi",
  },
  {
    title: "muốn đi tà tữa với anh",
    image: "/menu/tra_sua.jpg",
    text: "Anh ơi, em muốn uống tà tữa, mình đi mua đi",
  },
  {
    title: "cần anh phụ việc em",
    image: "/menu/phu_viec.jpg",
    text: "Anh ơi, em cần anh phụ việc em",
  },
];

export const ActionMenu = () => {
  return (
    <div>
      <div className="mt-20 z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="text-2xl font-bold fixed left-0 top-0 flex w-full  justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Anh ơi em...
        </p>
      </div>
      <div className="mt-28">
        {ACTION_MENU.map((item: Action, index: number) => (
          <span key={`${item.title}-${index}`}>
            {item.customRenderer ? (
              item.customRenderer
            ) : (
              <ActionButton {...item} />
            )}
          </span>
        ))}
      </div>
    </div>
  );
};
