import fetch from "node-fetch";
import schedule from "node-schedule";

let today = new Date();
let offworktime = new Date();
offworktime.setHours(offworktime.getHours() + 8);
const webhook = (text) => {
  const url =
    "https://chat.googleapis.com/v1/spaces/AAAAlSAvIA0/messages?key=AIzaSyDdI0hCZtE6vySjMm-WEfRq3CPzqKqqsHI&token=U7Qc-B0n-W-Tal8rJXijApaMQc2pKuHfH1Fwgtt6aps%3D";
  let result;
  const data = JSON.stringify({ text: text });
  fetch(url, {
    method: "POST",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
    body: data,
  }).then((err, res) => {
    if (err) {
      result = err;
    } else {
      result = res;
    }
  });
  return result;
};

schedule.scheduleJob("* 12 * * 1-5", () => {
  webhook("점심 시간이여");
});

schedule.scheduleJob("* 19 * * 1-5", () => {
  webhook("저녁 시간이여");
});

const msg = `오늘은 ${today.getFullYear()}년 ${
  today.getMonth() + 1
}월 ${today.getDate()}일 입니다. \n현재 시간은 ${today.toLocaleTimeString()} \n`;

webhook(msg);
