$(document).foundation();

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.padding = "0.2rem 2rem";
    document.getElementById("logo").style.width = "75px";
  } else {
    document.getElementById("navbar").style.padding = "0.5rem 3rem";
    document.getElementById("logo").style.width = "85px";
  }
}