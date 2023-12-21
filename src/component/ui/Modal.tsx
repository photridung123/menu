import { ReactNode } from "react";
import { Loading } from "./loading";

export interface ModalProps {
  title: string;
  closeModal: () => void;
  submitModal: () => void;
  titleSubmit?: string;
  children: ReactNode;
}

export const Modal = ({
  title = "",
  closeModal,
  submitModal = () => {},
  children,
  titleSubmit = "Duyệt",
}: ModalProps) => {
  return (
    <div className="bg-zinc-200/80 justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-100 outline-none focus:outline-none backdrop-blur-sm">
      <div className="relative w-[calc(100vw-2rem)] my-6 mx-auto max-w-3xl rounded-md bg-gray-100 ">
        {/*content*/}
        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full outline-none focus:outline-none">
          {/*header*/}
          <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t bg-gray-300">
            <h3 className="text-xl font-semibold">{title}</h3>
          </div>
          {/*body*/}
          <div className="p-4 mt-2">{children}</div>
          {/*footer*/}
          <div className="flex items-center justify-between p-6 border-t border-solid border-blueGray-200 rounded-b">
            <button
              className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button"
              onClick={closeModal}
            >
              Hủy
            </button>
            <button
              className="bg-sky-500 text-white active:bg-sky-700/60 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button"
              onClick={submitModal}
            >
              {titleSubmit}
            </button>
            <button>
              <Loading />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
