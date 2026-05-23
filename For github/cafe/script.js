let name ="Anish";
const age = 20;

console.log(name);

function greet(){
    alert("Welcome to Bunny Cafe!");

}
greet();

const title = document.querySelector("h1");
 title.style.color="orange";

 const btn = document.querySelector("button");
  
 btn.addEventListener("click", () => {
    alert("Menu Opened");
 });

 const drinks = ["Latte", "Coffee", "Smoothie"];

 drinks.forEach(drink => {
    console.log(drink);
 });

const cafe = {
    name : "Bunny Cafe",
    location: "Osaka"
};

const body = document.body;
body.classList.toggle("dark");
 
const images = ["1.jpg", "2.jpg", "3.jpg"];

window.addEventListener("scroll", () => {
    console.log("Scrolling");
});