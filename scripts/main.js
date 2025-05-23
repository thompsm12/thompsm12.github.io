const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/milo.jpg") {
    myImage.setAttribute("src", "images/molly.jpg");
  } 
  else if (mySrc === "images/molly.jpg") {
    myImage.setAttribute("src", "images/loon.jpg");
  } 
  else {
    myImage.setAttribute("src", "images/milo.jpg");
  }
});

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name.");
    localStorage.setItem("name", myName);
    myHeading.textContent = `Milo is cool, ${myName}`;
  }

  if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Milo is cool, ${storedName}`;
  }
  myButton.addEventListener("click", () => {
    setUserName();
  });
  
  