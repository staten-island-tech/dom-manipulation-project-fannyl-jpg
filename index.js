/* const DOMSelectors = {
  button: document.getElementById("btn"),
  text: document.querySelector("#text"),
  box: document.getElementById("big-black-box"),
  points: document.querySelectorAll(".point"),
}; */

/* function backgroundAndText(back, text) {
  back.style.backgroundColor = "brown"; // element.style is used to make adjustments to the style of an element in js
  text.innerHTML = "this is a big red box, now go look at console"; // .innerHTMl lets you edit an element, defined before the '.'. in this case it was "#text" being edited, defined by text.innerHTML. The desired element is selected through its assigned DOMSelector object.
}
 */
//   Event Listeners wait for a specified event to happen to an element, and then execute code when their conditions are met

/* element.addEventListener("form", myFunction);

function myFunction() {
  document.getElementById("demo").innerHTML = "Hello World";
}
console.log(form); */
// When you click the button element, the function 'changeBackground()' will run

// eventlisteners can be applied to any element, and any amount of elements
/* 
function changeLi() {
  let i = 0;
  DOMSelectors.points.forEach((el) => {
    el.addEventListener("click", function () {
      el.innerHTML = `${i}`; // you can use template literals in DOMSelectors as well!
      i++;

      console.log(i);
    });
  });
}

changeLi(); //  */
/* will set the <li> value to 0 on first click, and the value will increase by 1 every time an <li> is clicked.
 */
//since all the list elements share the same class, they also share the same value when defined in js, which will cause a sudden jump if you're clicking on one <li> element and then switch to clicking another.
/* function {
  create card
  querySelector
  foreach
}

/* step 1) get data from a user - input data*/

/* 2) get an object from them
3. push that data into the HTML */

// Variables

const addTask = document.getElementById("add-task");
const taskContainer = document.getElementById("task-container");
const inputTask = document.getElementById("input-task");

// Event Listener for Add Button

addTask.addEventListener("click", function () {
  let task = document.createElement("div");
  task.classList.add("task");

  let li = document.createElement("li");
  li.innerText = `${inputTask.value}`;
  task.appendChild(li);

  let checkButton = document.createElement("button");
  checkButton.innerHTML = '<i class="fa-solid fa-check"></i>';
  checkButton.classList.add("checkTask");
  task.appendChild(checkButton);

  let deleteButton = document.createElement("button");
  deleteButton.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
  deleteButton.classList.add("deleteTask");
  task.appendChild(deleteButton);

  if (inputTask.value === "") {
    alert("Please Enter a Task");
  } else {
    taskContainer.appendChild(task);
  }

  inputTask.value = "";

  checkButton.addEventListener("click", function () {
    checkButton.parentElement.style.textDecoration = "line-through";
  });

  deleteButton.addEventListener("click", function (e) {
    let target = e.target;

    target.parentElement.parentElement.remove();
  });
});
