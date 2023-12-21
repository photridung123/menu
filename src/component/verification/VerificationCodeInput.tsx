export const VerificationCodeInput = ({
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