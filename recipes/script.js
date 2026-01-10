const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);

const item1 = document.createElement("p");
item1.classList.add("item");
item1.textContent = "Hey I'm red!";
item1.style.color = "red";
container.appendChild(item1);

const item2 = document.createElement("h3");
item2.classList.add("item");
item2.textContent = "I'm a blue h3!";
item2.style.color = "blue";
container.appendChild(item2);

container.style.border = "solid black 2px";

const content2 = document.createElement("div");
content2.style.backgroundColor = "pink";
content2.style.border = "solid black 2px";
const content2h1 = document.createElement("h1");
content2h1.textContent = "I'm in a div";
const content2p = document.createElement("p");
content2p.textContent = "ME TOO!";
content2.appendChild(content2h1);
content2.appendChild(content2p);
container.appendChild(content2);

container.style.padding = "10px";

// // the JavaScript file
// const btn1 = document.querySelector("#btn1");
// btn1.onclick = () => alert("Hello World");
// // the JavaScript file
// const btn2 = document.querySelector("#btn2");
// btn2.addEventListener("click", (e) => {
//   alert("Hello World");
//   console.log(e.target);
//   e.target.style.background = "blue";
// });
// btn2.addEventListener("mouseover", (e) => {
//     e.target.style.background = "red";
// });

// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll("button");

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {
  // and for each one we add a 'click' listener
  button.addEventListener("click", () => {
    alert(button.id);
  });
});

const link = document.querySelector("a");
link.textContent = "Mozilla Developer Network";

