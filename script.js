// Main page elements
const categoryNloginImg = document.querySelector("#categoryNlogin img");
const interiorNtechProdLeftImg = document.querySelectorAll(".left-asideimg");
const inputBar = document.querySelector("#nav-bar #searchbarNBtn input");
const searchBtn = document.querySelector("#searchBtn");
const products = document.querySelectorAll(".p");
const days = document.querySelector("#days h4");
const hours = document.querySelector("#hours h4");
const min = document.querySelector("#ninutes h4");
const seconds = document.querySelector("#seconds h4");
let time = 360244;

searchBtn.addEventListener("click", function (e) {
  if (inputBar.value != "") {
    inputBar.value = "Search";
  }
});
categoryNloginImg.addEventListener("click", function (e) {
  window.location.href = "./web-listview.html";
});
interiorNtechProdLeftImg.forEach((img) => {
  img.addEventListener("click", function (e) {
    window.location.href = "./web-listview.html";
  });
});
let html;
products.forEach((product) => {
  product.addEventListener("click", function (e) {
    html = product;
    let childImg = html.getElementsByTagName("img");
    let name = html.getElementsByTagName("p");
    const obj = {
      nameProd: name[0].textContent,
      imgProd: childImg[0].src,
    };
    localStorage.setItem("selectedProd", JSON.stringify(obj));
    window.location.href = "./web-detail.html";
  });
});

setInterval(function (e) {
  let count = time;
  let daysCount = Math.floor(count / 86400);
  count %= 86400;
  let hoursCount = Math.floor(count / 3600);
  count %= 3600;
  let minCount = Math.floor(count / 60);
  let secCount = count % 60;
  days.textContent = daysCount.toString().padStart(2, "0");
  hours.textContent = hoursCount.toString().padStart(2, "0");
  min.textContent = minCount.toString().padStart(2, "0");
  seconds.textContent = secCount.toString().padStart(2, "0");
  time--;
}, 1000);
