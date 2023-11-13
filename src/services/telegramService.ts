import { setting } from "./config";

export const sendNotification = async (text: string) => {
  const url = `https://api.telegram.org/bot${setting.TELEGRAM.token}/sendMessage?chat_id=${setting.TELEGRAM.userId}&text=${text}`;
  return fetch(url,
    {
      mode: 'no-cors',
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        'Access-Control-Allow-Origin': '*'
      },
    })
};