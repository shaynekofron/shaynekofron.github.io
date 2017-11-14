//Javascript Assignment 

function validateForm(){
    var a = document.forms["contactSheet"]["firstname"].value; 
    var b = document.forms["contactSheet"]["lastname"].value;
    var c = document.forms["contactSheet"]["emailaddress"].value;
  
    
  
    
    //validation for each, return false when they dont enter anything
    
    
    if (!isNaN(a) || a == "")
        {
            alert("Please enter first name.");
            return false;
        }
    if (!isNaN(b) || b == "")
        {
            alert("Please enter last name");
            return false;
        }
    if (!isNaN(c) || c == "")
        {
            alert("Please provide your email");
            return false; 
        }
     
        
}
 
//Clear information provided            
            
function clearForm()
{
    document.getElementById(contactSheet).reset();
}       

//Dropdown 

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

//Slideshow JavaScript

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
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