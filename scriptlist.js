const inputBar = document.querySelector("#nav-bar #searchbarNBtn input");
const searchBtn = document.querySelector("#searchBtn");
const products = document.querySelectorAll(".product");
searchBtn.addEventListener("click", function (e) {
  if (inputBar.value != "") {
    inputBar.value = "Search";
  }
});
let html;
products.forEach((product) => {
  product.addEventListener("click", function (e) {
    html = product;
    console.log(html);
    let childImg = html.getElementsByTagName("img");
    let name = html.getElementsByTagName("h3");
    const obj = {
      nameProd: name[0].textContent,
      imgProd: childImg[0].src,
    };
    localStorage.setItem("selectedProd", JSON.stringify(obj));
    window.location.href = "./web-detail.html";
  });
});
