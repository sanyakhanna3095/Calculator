let inpt = document.getElementById("inptBox");
let buttons = document.querySelectorAll("button");

let string = "";

// create an array of buttons
let arr = Array.from(buttons);
arr.forEach((button) => {
  button.addEventListener("click", (event) => {
    if (event.target.innerHTML == "=") {
      // eval is an inbuilt function in js that evaluates the string Mathematically
      string = eval(string);
      inpt.value = string;
    } else if (event.target.innerHTML == "AC") {
      string = "";
      inpt.value = string;
    } else if (event.target.innerHTML == "DEL") {
      string = string.substring(0, string.length - 1);
      inpt.value = string;
    } else {
      string += event.target.innerHTML;
      inpt.value = string;
    }
  });
});
