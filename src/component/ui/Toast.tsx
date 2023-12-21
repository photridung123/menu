export const Toast = ({ msg }: { msg: string }) => {
    return (
      <div className="font-bold fixed z-50 left-0 bottom-10 w-2/3 h-1/5 bg-amber-200/90 rounded-tl-md rounded-tr-md grid place-items-center p-4">
        {msg}
      </div>
    );
  };