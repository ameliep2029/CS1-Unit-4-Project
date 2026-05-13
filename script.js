// Create a boolean variable to track current mode 
let darkMode = false; 

/* NEW FUNCTION: document.querrySelector()
let's us SELECT an HTML ELEMENT from the page to store a REFERENCE (pointer) to that element
*/


const body = document.querySelector("body"); 

//heading is a JS VARIABLE that points to the element with the id="main-heading" (like selecting in CSS)
const heading = document.querySelector("#main-heading");
const description = document.querySelector("#description"); 
const toggleBtn = document.querySelector("#toggle");


// Can change attributes & properties using JS 
heading.textContent = "Light & Dark Website"; // JS wrote HTML code!
heading.style.color = "olive"; 
heading.style.background ="plum";

// Define what happens when button is clicked 
function toggleMode() {
  console.log("triggered function"); 
  //1. Flip the boolean variable to track mode
  darkMode = !darkMode; 
  console.log(darkMode);
// 2. Conditionally apply styles depedning on mode
if ( darkMode == true) { 
    console.log("apply dark styles");
    body.style.background = "black";
    heading.style.color = "lightgrey";
    description.style.color = "white";
    description.textContent = "Welcome to the dark side";
    toggleBtn.textContent = "Switch to light";
 }
 else {
    console.log("apply light styles"); 
    body.style.background = "white";
    heading.style.color = "darkgrey";
    description.style.color = "black";
    description.textContent = "Welcome to the bright side";
    toggleBtn.textContent = "Switch to Dark" ;
 }

}

// Attach function to the actual button
toggleBtn.addEventListener("click", toggleMode);


// REVIEW: Making a button interactive 
// 1. Select HTML elements for JS to target 
const image = document.querySelector("#image");
const hackerBtn = document.querySelector("#hacker");
//Attach a function to the button that triggers when clicked
hackerBtn.addEventListener("click",setHacker);
//3. Define the function 
function setHacker() {
body.style.background = "black";
body.style.fontFamily = "monospace";
description.style.color = "green";
description.textContent = "YOU HAVE BEEN HACKED teheheheh ";
image.src ="hacker.gif";
}

