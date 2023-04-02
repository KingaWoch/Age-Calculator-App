const dayRegEx = /\b(0?[1-9]|[12][0-9]|3[0-1])\b/gm;
const FabruaryDaysRegEx = /\b(0?[1-9]|[12][0-8])\b/gm;
const monthRegEx = /\b(0?[1-9]|1[0-2])\b/gm;

const inputs = document.querySelectorAll("input");
const labels = document.querySelectorAll("label");
const errorMsgs = document.querySelectorAll(".error-msg");
const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (!inputs[0].value.match(dayRegEx)) {
    inputs[0].classList.add("invalid");
    labels[0].classList.add("invalid");
    errorMsgs[0].innerHTML = "Must be a valid day";
  } else {
    inputs[0].classList.remove("invalid");
    labels[0].classList.remove("invalid");
    errorMsgs[0].innerHTML = "";
  }

  if (!inputs[1].value.match(monthRegEx)) {
    inputs[1].classList.add("invalid");
    labels[1].classList.add("invalid");
    errorMsgs[1].innerHTML = "Must be a valid month";
  } else {
    inputs[1].classList.remove("invalid");
    labels[1].classList.remove("invalid");
    errorMsgs[1].innerHTML = "";
  }

  if (inputs[1].value === "2" && !inputs[0].value.match(FabruaryDaysRegEx)) {
    inputs[0].classList.add("invalid");
    labels[0].classList.add("invalid");
    errorMsgs[0].innerHTML = "Must be a valid day";
  } else if (
    inputs[1].value === "02" &&
    !inputs[0].value.match(FabruaryDaysRegEx)
  ) {
    inputs[0].classList.add("invalid");
    labels[0].classList.add("invalid");
    errorMsgs[0].innerHTML = "Must be a valid day";
  } else {
    inputs[0].classList.remove("invalid");
    labels[0].classList.remove("invalid");
    errorMsgs[0].innerHTML = "";
  }
});
