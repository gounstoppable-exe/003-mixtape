let crossBtn = document.querySelector(".cross");
let navbar = document.querySelector(".navigation");
let hamBtn = document.querySelector("#ham-btn");

hamBtn.addEventListener("click", function openNav(){
    navbar.setAttribute("style", "top: 0")
})

crossBtn.addEventListener("click", function closeNav(){
    navbar.setAttribute("style", "top: -20rem")
});