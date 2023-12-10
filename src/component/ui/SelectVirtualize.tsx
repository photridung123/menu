import { useVirtualizer } from "@tanstack/react-virtual";
import { useRef, useState } from "react";

interface SelectVirtualizeProps {
  data: string[];
  overscan: number;
  estimateSize: number;
  className?: {
    wrapper?: string;
    container?: string;
    item?: string;
  };
  onChange?: (currentData: string) => void;
  key?: string;
}

export const SelectVirtualize = ({
  data,
  className = {
    wrapper: "",
    container: "",
    item: "",
  },
  estimateSize,
  overscan,
  onChange,
  key,
}: SelectVirtualizeProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const [currentData, setCurrentData] = useState<string>(data[0]);

  const rowVirtualizer = useVirtualizer({
    count: data.length,
    initialOffset: 0,
    getScrollElement: () => ref.current,
    estimateSize: () => estimateSize - 20,
    overscan: overscan,
    onChange(instance) {
      if (instance.range) {
        setCurrentData(data[instance.range.startIndex]);
        onChange?.(data[instance.range.startIndex]);
      }
    },
  });

  return (
    <div
      ref={ref}
      className={`${className.wrapper} w-24 overflow-y-scrol overflow-x-hidden no-scrollbar`}
      style={{
        height: `${estimateSize}px`,
        marginTop: "12px",
        marginBottom: "12px",
      }}
    >
      <div
        className={`${className.container} relative max-w-full`}
        style={{
          height: `${rowVirtualizer.getTotalSize()}px`,
          marginBottom: "5px",
        }}
      >
        {rowVirtualizer.getVirtualItems().map((row, index) => {
          const option = data[row.index];

          return (
            <h2
              key={`${option}-${index}-${key}`}
              className={`${
                className.item
              } text-3xl font-mono font-semibold text-center py-4  border-solid border-gray-400 last:border-b-0 ${
                currentData === option
                  ? "bg-blue-200 border-2 border-solid rounded-md"
                  : ""
              }`}
            >
              {option}
            </h2>
          );
        })}
      </div>
    </div>
  );
};
