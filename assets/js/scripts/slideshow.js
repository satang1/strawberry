// var slideIndex = 0;
var slideIndex; //declare first


// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
let btn1 = document.getElementById("pic1");
let btn2 = document.getElementById("pic2");
let btn3 = document.getElementById("pic3");
let btn4 = document.getElementById("pic4");
let btn5 = document.getElementById("pic5");
let btn6 = document.getElementById("pic6");
let btn7 = document.getElementById("pic7");
let btn8 = document.getElementById("pic8");
let btn9 = document.getElementById("pic9");
let btn10 = document.getElementById("pic10");
let btn11 = document.getElementById("pic11");
let btn12 = document.getElementById("pic12");
let btn13 = document.getElementById("pic13");
let btn14 = document.getElementById("pic14");
let btn15 = document.getElementById("pic15");
let btn16 = document.getElementById("pic16");

// When the user clicks on the button, open the modal 
function open() {
	modal.style.display = "block";
  console.log(event.target.id)

  if (event.target.id == 'pic1') {
    slideIndex = 1;
  } else if (event.target.id == 'pic2') {
    slideIndex = 2;
  } else if (event.target.id == 'pic3') {
    slideIndex = 3;
  } else if (event.target.id == 'pic4') {
    slideIndex = 4;
  } else if (event.target.id == 'pic5') {
    slideIndex = 5;
  } else if (event.target.id == 'pic6') {
    slideIndex = 6;
  } else if (event.target.id == 'pic7') {
    slideIndex = 7;
  } else if (event.target.id == 'pic8') {
    slideIndex = 8;
  } else if (event.target.id == 'pic9') {
    slideIndex = 9;
  } else if (event.target.id == 'pic10') {
    slideIndex = 10;
  } else if (event.target.id == 'pic11') {
    slideIndex = 11;
  } else if (event.target.id == 'pic12') {
    slideIndex = 12;
  } else if (event.target.id == 'pic13') {
    slideIndex = 13;
  } else if (event.target.id == 'pic14') {
    slideIndex = 14;
  } else if (event.target.id == 'pic15') {
    slideIndex = 15;
  } else if (event.target.id == 'pic16'){
    slideIndex = 16;
  }

  showSlides(slideIndex);
};


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
	if (event.target == modal) {
		modal.style.display = "none";
	}
  else { 
    // seems like i'm clicking the image and not the modal
    console.log(event.target);
  }
}


function showSlides(n) {
  // console.log("showslides index: " + slideIndex)
  var i;
  var slides = document.getElementsByClassName("mySlides");
  // console.log("slideshow length: ", slides.length)

// edge cases: 
  if (n > slides.length) {
    slideIndex = 1
  }

  // if (n < 1) {
  //   slideIndex = slides.length
  // }

  // remove all the displays
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // show image (add displays)
  slides[slideIndex-1].style.display = "block";

  // increment
  slideIndex++;
  // repeat index
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  // repeat
  setTimeout(showSlides, 2000); // Change image every 2 seconds

}



btn1.onclick = open;
btn2.onclick = open;
btn3.onclick = open;
btn4.onclick = open;
btn5.onclick = open;
btn6.onclick = open;
btn7.onclick = open;
btn8.onclick = open;
btn9.onclick = open;
btn10.onclick = open;
btn11.onclick = open;
btn12.onclick = open;
btn13.onclick = open;
btn14.onclick = open;
btn15.onclick = open;
btn16.onclick = open;




