let click = document.querySelector(".mun");
let mun_don = document.querySelector(".mun_don");
click.onclick = function () {
  mun_don.style.display = "block";
};
window.addEventListener("mouseup", function (event) {
  var box = document.querySelector(".mun_don");
  if (event.target != box) {
    box.style.display = "none";
  }
});
// ---------scroll------
let UpDon = document.querySelector("#up");
window.onscroll = function () {
  if (scrollY >= 505) {
    UpDon.style.right = "41px";
  } else {
    UpDon.style.right = "-99px";
  }
};

UpDon.onclick = function () {
  scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
