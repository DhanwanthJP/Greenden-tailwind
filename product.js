var sideNavbar = document.getElementById("sideNavbar");
var menuIcon = document.getElementById("menuIcon");
var closeNav = document.getElementById("closeNav");

menuIcon.addEventListener("click", function () {
  sideNavbar.style.right = "0%";
});

closeNav.addEventListener("click", function () {
  sideNavbar.style.right = "-50%";
});

// Search Functionality
var search = document.getElementById("search");
var productContainer = document.getElementById("productContainer");
var productList = productContainer.querySelectorAll("div");

console.log(productList);

search.addEventListener("keyup", function () {
  var enteredValue = event.target.value.toUpperCase();

  for (var count = 0; count < productList.length; count++) {
    var productName = productList[count].querySelector("h1").textContent.toUpperCase();
    if (productName.indexOf(enteredValue) < 0) {
      productList[count].style.display = "none";
    } else {
      productList[count].style.display = "block";
    }
  }
});
