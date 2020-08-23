const name = document.querySelector(".user-component__title");
const subTitle = document.querySelector(".user-component__subtitle");

function init() {
  try {
    name.innerHTML = localStorage.getItem("nickname");
    subTitle.innerHTML = localStorage.getItem("telNum");
  } catch (err) {
    console.log(err.message);
  }
}

init();
