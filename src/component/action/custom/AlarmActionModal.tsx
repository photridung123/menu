import { Modal, SelectVirtualize } from "@/component";
import { PREFIX_CLOUDINARY, TIME } from "@/constant";
import { sendNotification } from "@/services/telegramService";
import { useToast } from "@/store";
import { CldImage } from "next-cloudinary";
import { useState } from "react";

export const AlarmActionModal = () => {
  const [isOpened, setOpened] = useState(false);
  const { openToast } = useToast();
  const onSubmitModal = async () => {
    const time = `${currentTime.hour}:${currentTime.minute}`;

    await sendNotification(`Gọi em dậy lúc ${time}`);

    openToast(`Anh sẽ gọi em dậy lúc ${time}`);
    setOpened(false);
  };

  const [currentTime, setCurrentTime] = useState<{
    hour: string;
    minute: string;
  }>({
    hour: "0",
    minute: "0",
  });

  return (
    <>
      <div
        className="w-full flex flex-col items-center mt-8"
        onClick={() => setOpened(true)}
      >
        <p className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 w-64 text-sm text-center capitalize">
          {"gọi em dậy nhaaaa"}
        </p>

        <CldImage
          width={200}
          height={300}
          src={`${PREFIX_CLOUDINARY}/linh3.jpg`}
          alt="action-image"
          className="w-64 h-56 object-cover"
        />
      </div>

      {isOpened && (
        <div>
          <Modal
            title={"Báo thức chạy bằng cơm"}
            closeModal={() => {
              setOpened(false);
            }}
            submitModal={onSubmitModal}
          >
            <div className="flex items-center justify-center space-x-6 h-56">
              <SelectVirtualize
                key={"hours-select"}
                data={TIME.HOURS.map((h) => `${h < 10 ? "0" : ""}${h}`)}
                estimateSize={86}
                overscan={23}
                onChange={(hour: string) => {
                  setCurrentTime({
                    ...currentTime,
                    hour,
                  });
                }}
              />
              <h2 className="text-4xl ">:</h2>
              <SelectVirtualize
                key={"minutes-select"}
                data={TIME.MINUTES.map((m) => `${m < 10 ? "0" : ""}${m}`)}
                estimateSize={86}
                overscan={59}
                onChange={(minute: string) => {
                  setCurrentTime({
                    ...currentTime,
                    minute,
                  });
                }}
              />
            </div>
          </Modal>
        </div>
      )}
    </>
  );
};
