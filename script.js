const buttons = document.querySelectorAll(".list_item")
const submit = document.querySelector(".btn")
const rate = document.querySelector(".selection_value")
const firstpage = document.querySelector(".first-page")
const secondpage = document.querySelector(".second-page")

let value;

buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        buttons.forEach((button) => button.classList.remove("list__change"));
        e.target.classList.add("list__change");
        value = e.target.textContent;
    });
});

submit.addEventListener("click", () => {
    rate.textContent = value;
    // firstpage.style.display = "none";
    // secondpage.style.display = "block";
firstpage.classList.add("activeFirstpage");
secondpage.classList.add("activeSecondpage");
});


// const firstpage = document.querySelector(".first-page")
// const numbers = firstpage.querySelectorAll(".nums")
// const buttons = document.getElementById("btns")


// buttons.onclick = () => {

//     alert("Hello World")

//     // first-page.classList.add("inactive")
//     // second-page.classList.add("active")
// }