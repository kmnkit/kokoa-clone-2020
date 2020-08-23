const name = document.querySelector(".user-component__title");
const subTitle = document.querySelector(".user-component__subtitle");

function init() {
  name.innerHTML = localStorage.getItem("nickname");
  subTitle.innerHTML = localStorage.getItem("telNum");
}

init();
