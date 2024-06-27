const buttons = document.querySelectorAll(".btn");
const output = document.querySelector(".output");
let count = "";
let flag = 0;
buttons.forEach((buttons) => {
  buttons.addEventListener("click", handleNumber);
});

function handleNumber() {
  let num = this.getAttribute("mydata");

  count += num;


    if(count.includes("ac")){
        clear();
    }
    if(count.includes("x")){
        backSpace();
    }
  if (count.includes("++") || count.includes("--") || count.includes("//")) {
    count = count.slice(0, -1);
    console.log("plus plus " + count);
    result(count);
  }
  if (flag > 0) {
    count = count.replace("=", "");
    flag = 0;
  }
  console.log(count);
  result(count);
}

function result(number) {

  if (number.includes("=")) {
    let newNum = number.replace("=", "");
    if (newNum.lastIndexOf(/[\+\-/]/.test(newNum))) {
      output.innerHTML = `${eval(newNum)}`;
      console.log("woo" + newNum);
      flag += 1;
      count = "";
    } else {
      output.textContent = number;
    }
  }else{
    output.textContent = number;
  }
}

function clear(){
    output.textContent = "empty";
   count = "";
}

function backSpace(){
     count = count.slice(0,-1);
     count = count.slice(0,-1);

    console.log(count);
}