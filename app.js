const DOMSelectors = {
  title: document.querySelector("#title"),
  artist: document.querySelector("#artist"),
  url: document.querySelector("#url"),
  button: document.querySelector(".btn"),
  display: document.querySelector("#display"),
};

let title = null;
let artist = null;
let url = null;

DOMSelectors.button.addEventListener("click", function (e) {
  e.preventDefault();

  title = DOMSelectors.title.value;
  artist = DOMSelectors.artist.value;
  img = DOMSelectors.url.value;

  console.log(title);
  console.log(artist);
  console.log(img);

  clearinput();
  addcard();

  document.querySelectorAll(".remove").forEach((element) =>
    element.addEventListener("click", function (e) {
      e.target.parentElement.remove();
    })
  );
});
console.log(DOMSelectors);

function clearinput() {
  DOMSelectors.title.value = "";
  DOMSelectors.artist.value = "";
  DOMSelectors.url.value = "";
}

function addcard() {
  DOMSelectors.display.insertAdjacentHTML(
    "beforeend",

    `<div class="display-card">
  <p class="display-album">${title}</p>
  <p class ="display-artist">${artist}</p>
  <p><img class="display-img" src="${img}"></p>
  <button class="remove btn">Remove Album</button>
   </div>`
  );
}
