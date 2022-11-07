//The Document Object Model, or DOM, is essentially the elements you write into your HTML. DOMSelectors allow you to easily access your HTML in JS.

// DOMSelectors are objects that hold access to the DOM that you can call upon easily at any point in your code.

const DOMSelectors = {
  button: document.getElementById("btn"), // getElementById looks for the id that is passed through it, in this case being "btn"
  text: document.querySelector("#text"), // queryselectors look for elements based on parameters, being '.' or '#'
  box: document.getElementById("big-black-box"),
  points: document.querySelectorAll(".point"), // querySelectorAll will access multiple elements with the same class, in this case being "point"
  null: document.getElementById("point"), // if you try to access a class with getElementById, it will result in "null"
  empty: document.querySelector(".nothing"),
};

console.log(DOMSelectors.box);
console.log(DOMSelectors.button);
console.log(DOMSelectors.text);
console.log(DOMSelectors.points);
console.log(DOMSelectors.points[0]); // this returns the first ever element in the document with class 'point'
console.log(DOMSelectors.null);
console.log(DOMSelectors.nothing);
// when you look in the console after logging DOMSelectors, you will be able to see the elements that the DOMSelector accesses.
// if you have a DOMSelector for an element that doesn't exist, it will show up as undefined.

/*Create a function that creates an object and calls the following functions

function backgroundAndText(background, text) {
  document.body.style.backgroundColor = "pink";
}

backgroundAndText(DOMSelectors);

/* Declare the function 'myFunc' */
function myFunc(theObject) {
  theObject.brand = "Toyota";
}

/*
 * Declare variable 'mycar';
 * create and initialize a new Object;
 * assign reference to it to 'mycar'
 */
const mycar = {
  brand: "Honda",
  model: "Accord",
  year: 1998,
};

/* Logs 'Honda' */
console.log(mycar.brand);

/* Pass object reference to the function */
myFunc(mycar);

/*
 * Logs 'Toyota' as the value of the 'brand' property
 * of the object, as changed to by the function.
 */
console.log(mycar.brand);

function {
  create card
  querySelector
  foreach
}
