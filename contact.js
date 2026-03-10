var sideNavbar = document.getElementById("sideNavbar");
var menuIcon = document.getElementById("menuIcon");
var closeNav = document.getElementById("closeNav");

menuIcon.addEventListener("click", function(){
    sideNavbar.style.right = "0%";
})

closeNav.addEventListener("click", function(){
    sideNavbar.style.right = "-50%";
})
