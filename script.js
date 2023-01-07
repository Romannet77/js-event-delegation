const button = document.querySelector(".button-add-framework");

const input = document.querySelector("#input-value");

const ul = document.querySelector("ul");

const h2 = document.querySelector("h2");

const h4 = document.querySelector("h4");

const deleteButtons = document.querySelectorAll(".btn-delete");

/*Add an element at the beginning of the list by clicking "Add Framework" button*/

button.addEventListener("click", function () {
  if (input.value !== "") {
    const li = `<li class = "element-list">${input.value}<span>framework</span>
    <button class="btn-delete">delete</button></li>`;

    ul.insertAdjacentHTML("afterBegin", li);

    input.value = "";
  }
});

/*Add an element at the beginning of the list by pressing key "Enter"*/

input.addEventListener("keypress", function (e) {
  if (e.key === "Enter" && input.value !== "") {
    const li = `<li class = "element-list">${input.value}<span>framework</span>
    <button class="btn-delete">delete</button></li>`;

    ul.insertAdjacentHTML("afterBegin", li);

    input.value = "";
  }
});

/* Adding handling of the event not directly to the button "delete" element but to the "ul" element standing above it in DOM structure. So, We are catching an event triggered in our parent ("ul") element that matches our selected child (button "delete") element */

ul.addEventListener("click", (e) => {
  if (e.target.classList.contains("btn-delete")) {
    e.target.parentElement.remove();
    h2.style.color = "red";
    h4.classList.toggle("h4-toogle-style");
  }
});

/*the ordinary code will affect only already existing elements but the Dynamically Created Elements will not be affected:

deleteButtons.forEach((delBtn) => {
  delBtn.addEventListener("click", () => {
    delBtn.parentElement.remove();
  });
});*/

/*Toggles the .done class by clicking on the name of programming language or framework */

ul.addEventListener("click", (e) => {
  if (e.target.classList.contains("element-list")) {
    e.target.classList.toggle("done");
  }
});
