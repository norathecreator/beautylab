$(document).ready(function(){
	// Preloader

	$('.preloader').fadeOut("slow", function() {
    	
  });

// SLICK SLIDER

  $('.slider').slick({
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2500,
    dots: true,
    // fade: true,
    pauseOnHover: false,
    responsive: [{

      breakpoint: 900,
      settings: {
        dots: false,
        fade: true
      }

      }],
  });

  // Method for arrows

  $('.slider_arrow_prev').click(function(){
  	$('.slider').slick('slickPrev');
  })

  $('.slider_arrow_next').click(function(){
  	$('.slider').slick('slickNext');
  })

});



// FAQ

const faqs = document.querySelectorAll('.faq')
const answer = document.querySelectorAll('.answer')
const arrows = document.querySelectorAll('.arrows')

for(let i = 0; i < faqs.length; i++){
    faqs[i].addEventListener('click', ()=>{
        answer[i].classList.toggle('active')
        arrows[i].classList.toggle('arrows_active')
    })
}

