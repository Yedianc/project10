var tablinks = document.getElementsByClassName("tab-links")
var tabcontents = document.getElementsByClassName("tab-contents")

function opentab(tabname) {
  for(tablink of tablinks) {
    tablink.classList.remove("active-link")
  }
  for(tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab")
  }
  event.currentTarget.classList.add("active-link")
  document.getElementById(tabname).classList.add("active-tab")
}



var sidemenu = document.getElementById("sidemenu");
function openmenu(){
  sidemenu.style.right = "0";
}
function closemenu(){
  sidemenu.style.right = "-200px";
}


var sidemenu = document.getElementById("sidemenu");
        function openmenu(){
          sidemenu.style.right = "0";
        }
        function closemenu(){
          sidemenu.style.right = "-200px";
        }
//-------------------------------------------------------

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}


//---------------------------------------------------------------------------

