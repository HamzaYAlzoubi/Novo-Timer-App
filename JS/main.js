
let sidebar = document.querySelector(".sidebar");
let sidebarbtn = document.querySelector(".fa-bars");
let X_icon = document.querySelector(".X_icon");

sidebarbtn.addEventListener("click" ,() => sidebar.style.right = "0");

X_icon.addEventListener("click" ,() => sidebar.style.right = "-280px");


let Dashboard_page = document.querySelector(".Dashboard_page");
let Projects_page = document.querySelector(".Projects_page");

Dashboard_page.onclick = function () {
    window.location.href = "index.html"
}
Projects_page.onclick = function () {
    window.location.href = "Project.html"
}
