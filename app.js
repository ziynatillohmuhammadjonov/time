/* 
Ushubu amaliyot youtubedagi akhror web kanlidan olingan.
Telegram: @akhror_web
Bog'lanish: @front_teacher
Telefon: +998 97 206 29 22

Ushbu topshiriq yechimi @akhror_web telegram kanalida bor.
*/
const kun = document.querySelector("#full-day");
const soat = document.querySelector("#hour");
const daqiqa = document.querySelector("#minute");
const soniya = document.querySelector("#second");
const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let now = new Date();
console.log(now.getDate());
let moth = now.getMonth;
kun.textContent = `${now.getDay()} ${
  monthNames[now.getMonth()]
} ${now.getFullYear()}`;

setInterval(() => {}, 1000);
function getDate() {
  soat.textContent =
    now.getHours() < 10 ? "0" + now.getHours() : now.getHours();
  daqiqa.textContent =
    now.getMinutes() < 10 ? "0" + now.getMinutes() : now.getMinutes();
  soniya.textContent =
    now.getSeconds() < 10 ? "0" + now.getSeconds() : now.getSeconds();
}
setInterval(() => {
  now = new Date();
  soat.textContent =
    now.getHours() < 10 ? "0" + now.getHours() : now.getHours();
  daqiqa.textContent =
    now.getMinutes() < 10 ? "0" + now.getMinutes() : now.getMinutes();
  soniya.textContent =
    now.getSeconds() < 10 ? "0" + now.getSeconds() : now.getSeconds();
}, 1000);
