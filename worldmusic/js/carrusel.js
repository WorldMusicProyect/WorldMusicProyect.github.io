var swiper = new Swiper('.swiper-carrusel', {
	navigation: {
	   nextEl: '.swiper-button-next',
	   prevEl: '.swiper-button-prev'
	},
	slidesPerView: 1,
	spaceBetween: 10,
	loop: true, // Aquí se configura el bucle
	// init: false,
	pagination: {
	   el: '.swiper-pagination',
	   clickable: true,
	},
   
	breakpoints: {
	   620: {
		 slidesPerView: 1,
		 spaceBetween: 20,
	   },
	   680: {
		 slidesPerView: 2,
		 spaceBetween: 40,
	   },
	   920: {
		 slidesPerView: 3,
		 spaceBetween: 40,
	   },
	   1240: {
		 slidesPerView: 4,
		 spaceBetween: 50,
	   },
	} 
   });