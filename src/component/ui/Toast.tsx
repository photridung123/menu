export const Toast = ({ msg }: { msg: string }) => {
  return (
    <div className="font-bold fixed z-50 left-0 bottom-10 w-2/3 h-fit bg-sky-400 rounded-br-md rounded-tr-md grid place-items-center p-4">
      {msg}
    </div>
  );
};
