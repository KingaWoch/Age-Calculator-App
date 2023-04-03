const dayRegEx = /\b(0?[1-9]|[12][0-9]|3[0-1])\b/gm;
const FabruaryDaysRegEx = /\b(0?[1-9]|[12][0-8])\b/gm;
const monthRegEx = /\b(0?[1-9]|1[0-2])\b/gm;

const inputs = document.querySelectorAll("input");
const labels = document.querySelectorAll("label");
const errorMsgs = document.querySelectorAll(".error-msg");
const form = document.querySelector("form");
let result = document.querySelectorAll(".result");
let now = new Date();
let year = now.getFullYear();
let month = now.getMonth() + 1; // 0 - January,  11- December
let day = now.getDate();

let months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // day validation

  if (!inputs[0].value) {
    inputs[0].classList.add("invalid");
    labels[0].classList.add("invalid");
    errorMsgs[0].innerHTML = "This field is required";
  } else if (!inputs[0].value.match(dayRegEx)) {
    inputs[0].classList.add("invalid");
    labels[0].classList.add("invalid");
    errorMsgs[0].innerHTML = "Must be a valid day";
  } else {
    inputs[0].classList.remove("invalid");
    labels[0].classList.remove("invalid");
    errorMsgs[0].innerHTML = "";
  }

  // month validation

  if (!inputs[1].value) {
    inputs[1].classList.add("invalid");
    labels[1].classList.add("invalid");
    errorMsgs[1].innerHTML = "This field is required";
  } else if (!inputs[1].value.match(monthRegEx)) {
    inputs[1].classList.add("invalid");
    labels[1].classList.add("invalid");
    errorMsgs[1].innerHTML = "Must be a valid month";
  } else if (
    inputs[1].value === "2" &&
    !inputs[0].value.match(FabruaryDaysRegEx)
  ) {
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
    inputs[1].classList.remove("invalid");
    labels[1].classList.remove("invalid");
    errorMsgs[1].innerHTML = "";
  }

  // year validation

  if (!inputs[2].value) {
    inputs[2].classList.add("invalid");
    labels[2].classList.add("invalid");
    errorMsgs[2].innerHTML = "This field is required";
  } else if (inputs[2].value < 1000) {
    inputs[2].classList.add("invalid");
    labels[2].classList.add("invalid");
    errorMsgs[2].innerHTML = "Must be a valid year";
  } else if (inputs[2].value > year) {
    inputs[2].classList.add("invalid");
    labels[2].classList.add("invalid");
    errorMsgs[2].innerHTML = "Must be in the past";
  } else if (
    inputs[2].value == year &&
    inputs[1].value >= month &&
    inputs[0].value > day
  ) {
    inputs[2].classList.add("invalid");
    labels[2].classList.add("invalid");
    errorMsgs[2].innerHTML = "Must be in the past";
  } else {
    inputs[2].classList.remove("invalid");
    labels[2].classList.remove("invalid");
    errorMsgs[2].innerHTML = "";
  }

  if (
    (inputs[0].value &&
      inputs[1].value &&
      inputs[2].value &&
      inputs[0].value.match(dayRegEx) &&
      inputs[1].value.match(monthRegEx) &&
      inputs[2].value > 1000 &&
      inputs[2].value < year) ||
    (inputs[2].value == year &&
      inputs[1].value <= month &&
      inputs[0].value > day)
  ) {
    showResult();
  }
});

function showResult() {
  if (inputs[0].value > day) {
    day = day + months[month - 1];
    month = month - 1;
  }

  if (inputs[1].value > month) {
    month = month + 12;
    year = year - 1;
  }

  let d = day - inputs[0].value;
  let m = month - inputs[1].value;
  let y = year - inputs[2].value;

  if (y === 1) {
    result[0].innerHTML = `${y} <span>year</span>`;
  } else {
    result[0].innerHTML = `${y} <span>years</span>`;
  }

  if (m === 1) {
    result[1].innerHTML = `${m} <span>month</span>`;
  } else {
    result[1].innerHTML = `${m} <span>months</span>`;
  }

  if (d === 1) {
    result[2].innerHTML = `${d} <span>day</span>`;
  } else {
    result[2].innerHTML = `${d} <span>days</span>`;
  }
}
