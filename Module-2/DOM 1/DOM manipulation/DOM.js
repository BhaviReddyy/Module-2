let ul = document.querySelector("#item-list");
let btn = document.querySelector("#add-btn");

btn.addEventListener("click", function() {
    let count = ul.children.length + 1;
    let newLi = document.createElement("li");
    newLi.textContent = "New Item " + count;
    if (count % 2 !== 0) {
        newLi.style.fontWeight = "bold";
        newLi.style.color = "blue";
    } else {
        newLi.style.fontStyle = "italic";
        newLi.style.color = "red";
    }
    ul.appendChild(newLi);
});