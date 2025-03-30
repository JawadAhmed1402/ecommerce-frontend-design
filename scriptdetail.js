const inputBar = document.querySelector("#nav-bar #searchbarNBtn input");
const searchBtn = document.querySelector("#searchBtn");
const prodImg = document.querySelector("#product-img img");
const prodName = document.querySelector("#productAbout #name");
const relatedProds = document.querySelectorAll(
  "#content-area-third-section div article"
);
const suggestion = document.querySelectorAll(
  "#content-area-second-section article"
);
let chosenproduct = JSON.parse(localStorage.getItem("selectedProd"));
prodImg.src = chosenproduct.imgProd;
prodName.textContent = chosenproduct.nameProd;
searchBtn.addEventListener("click", function (e) {
  if (inputBar.value != "") {
    inputBar.value = "Search";
  }
});
relatedProds.forEach((prod) => {
  prod.addEventListener("click", function (e) {
    html = prod;
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
suggestion.forEach((prod) => {
  prod.addEventListener("click", function (e) {
    html = prod;
    let childImg = html.getElementsByTagName("img");
    let name = html.getElementsByTagName("h4");
    const obj = {
      nameProd: name[0].textContent,
      imgProd: childImg[0].src,
    };
    localStorage.setItem("selectedProd", JSON.stringify(obj));
    window.location.href = "./web-detail.html";
  });
});
