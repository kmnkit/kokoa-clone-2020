const loginForm = document.querySelector("#login-form"),
  input = loginForm.querySelectorAll("input");
console.log(input[0].value);

function handleSubmit() {
  const nickName = input[0].value;
  const telNum = input[1].value;
  localStorage.setItem("nickname", nickName);
  localStorage.setItem("telNum", telNum);
}

function init() {
  loginForm.addEventListener("submit", handleSubmit);
}

init();
