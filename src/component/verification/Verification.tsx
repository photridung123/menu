import { PASS_CODE } from "@/constant";
import { useEffect, useState } from "react";
import { VerificationCodeInput } from ".";

export const Verification = ({
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
    <div className="h-screen flex flex-col items-center justify-center gap-y-16">
      <div className="flex flex-col items-center space-y-12">
        <div className="font-bold text-xl">Nhập mật khẩu</div>
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
    </div>
  );
};
