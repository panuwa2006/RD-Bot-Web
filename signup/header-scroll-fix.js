// * on scroll fixed header

window.onscroll = function() {myFunction()};

var header = document.getElementsByClassName("headers")[0]
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky + 60) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}