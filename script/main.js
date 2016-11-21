/**
 * Created by bzby on 2016/11/21.
 */
var myHeading = document.querySelector("h1");
myHeading.innerHTML = "hello world";

var myVariable = [1,"BOb",2];

console.log(myVariable[1]);

console.log("-----------------------_");
var iceCream = "chocolate";
function multiply(num1,num2) {
    return num1 * num2;

}
console.log(multiply(4, 7));
console.log(multiply(20, 20));
console.log("-----------------------_");
document.querySelector("img").onclick = function () {
  if (document.querySelector("img").getAttribute("src")==="image/bd_logo1_31bdc765.png"){
      document.querySelector("img").setAttribute("src","image/nav_logo242.png");
  } else{
      document.querySelector("img").setAttribute("src","image/bd_logo1_31bdc765.png")
  }
};
var button = document.querySelector("button");
button.onclick = function () {
    setUsername();
};
var header = document.querySelector("h1");
console.log(localStorage.getItem("name"));
if (!localStorage.getItem("name")){
    setUsername();
}else{
    myHeading.innerHTML = "Mozilla is cool, "+localStorage.getItem("name");
}

function setUsername() {
    var myName = prompt("please enter your name");
    localStorage.setItem("name",myName);
    myHeading.innerHTML = "Mozilla is cool, "+myName;
}