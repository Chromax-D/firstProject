let toggleOpen = document.getElementById("toggler");
let toggleClose = document.getElementById("toggler-close");
let navList = document.getElementById("nav-block");

toggleOpen.addEventListener("click", () =>{
    navList.style.transform = "translateX(0)";
})

toggleClose.addEventListener("click", () =>{
    navList.style.transform = "translateX(-150%)";
})