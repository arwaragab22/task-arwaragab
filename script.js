// Function to check if an element is in viewport
function isElementAtTop(el) {
  var rect = el.getBoundingClientRect();
  return rect.top <= 200;
}
        var isAnimating = false;
            var lastScrollTop = 0;
// Function to handle scroll event
  var statusscroll = "top";

function handleScroll() {
  if (isMobileWidth()) {
    var targetElement = document.getElementById('maincard');
    var targetElement2 = document.getElementById('bottom-sec');

    var scrollY = window.scrollY || window.pageYOffset;
    // Check if the user has scrolled 300px
    if (scrollY >= 30) {
  
      console.log("top");
      if (statusscroll !== "bottom") {
        statusscroll = "bottom"
          ;
        document.getElementById("info-sec").classList.add('animatedtwo');
        targetElement.classList.remove("reverseanimation");

        setTimeout(() => {
            targetElement.classList.add('animated');
        targetElement2.classList.add('show');
        }, 1000);
        setTimeout(() => {
          document.getElementById("targetimg").classList.add("animateimg")
          document.getElementsByClassName("textup")[0].classList.add("animatetxt")

        }, 3000)
        setTimeout(() => {
      
          document.getElementsByClassName("textuptwo")[0].classList.add("animatetxt")

        }, 1500)
      }


    }
    else {
      if (statusscroll !== "top") {
        statusscroll = "top";
         targetElement.classList.remove('animated');
        targetElement.classList.add("reverseanimation");
        targetElement2.classList.remove('show');
        document.getElementById("info-sec").classList.remove('animatedtwo');
        // document.getElementById("targetimg").classList.remove("animateimg")
    
          document.getElementById("targetimg").classList.remove("animateimg")
          document.getElementsByClassName("textup")[0].classList.remove("animatetxt")

      
      
      
          document.getElementsByClassName("textuptwo")[0].classList.remove("animatetxt")

      

      }
    }
  }
}

// Add scroll event listener
window.addEventListener('scroll', handleScroll);
   // Function to check if the screen width indicates a mobile device
    function isMobileWidth() {
      return window.innerWidth >= 810; // Adjust the threshold as needed
    }

    

