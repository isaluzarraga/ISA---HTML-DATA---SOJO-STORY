$(document).ready(function () {
			$('.slick-carousel').slick({
				dist: 3,
				padding: 5,
				slidesToShow: 3, // Shows a three slides at a time
				slidesToScroll: 1, // When you click an arrow, it scrolls 1 slide at a time
				prevArrow: false,
				nextArrow: false,
				variableWidth: true,
				centerMode: false,
				//			draggable:true,
				//			swipe: false,
				//			touchMove: true
				responsive: [
					{
						breakpoint: 924,
						settings: {
							slidesToShow: 2,
							slidesToScroll: 1,
							infinite: true,
						}
					}]
			});
    $('.next-article').click(function () {
				$(".slider").slick('slickNext');

		
			});
		});

		//back to top footer//
// Show/hide the "Back to Top" button when reaching the bottom of the page
window.addEventListener('scroll', function() {
	var backToTopButton = document.getElementById("back-to-top");
  
	// Calculate the distance between the bottom of the window and the bottom of the document
	var windowHeight = window.innerHeight;
	var bodyHeight = document.body.clientHeight;
	var scrollTop = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
  
	if (bodyHeight - windowHeight - scrollTop < 50) {
	  backToTopButton.style.display = "block";
	} else {
	  backToTopButton.style.display = "none";
	}
  });
  
  // Smooth scroll to the top of the page when the button is clicked
  document.getElementById("back-to-top").addEventListener("click", function(event) {
	event.preventDefault();
	window.scrollTo({
	  top: 0,
	  behavior: 'smooth'
	});
  });