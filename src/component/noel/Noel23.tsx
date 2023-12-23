import { sendNotification } from "@/services/telegramService";

export const Noel23 = () => {
  return (
    <div className="bg-cover bg-[url('https://img.freepik.com/premium-photo/christmas-flat-lay-with-fir-twigs-decorated-with-red-baubles-candy-canes-paper-star-confetti_87646-11239.jpg')] h-screen ">
      <div className="p-12">
        <h2 className="drop-shadow-lg text-center py-6 text-4xl font-bold text-white leading-tight">
          Mery Christmas my darling
        </h2>
        <video
          className="mt-6 "
          onPlay={async () => {
            await sendNotification("Em đang xem video noel nè");
          }}
          style={{ width: "800px", height: "500px" }}
          controls
        >
          <source src="https://res.cloudinary.com/dungpho/video/upload/v1703322534/menu4linh/noel23.mp4" />
        </video>
      </div>
    </div>
  );
};
