document.addEventListener('DOMContentLoaded', () => {
	const headers = document.querySelectorAll('.accordion-header');

	headers.forEach(header => {
		header.addEventListener('click', () => {
			const currentlyActiveContent = document.querySelector('.accordion-content.active');
			const currentIcon = document.querySelector('.accordion-header.active .icon');
			const content = header.nextElementSibling;
			const icon = header.querySelector('.icon');

			// Oldin ochiq bo'lgan accordionni yopish
			if (currentlyActiveContent && currentlyActiveContent !== content) {
				currentlyActiveContent.classList.remove('active');
				if (currentIcon) currentIcon.innerHTML = '&#9660;';
				currentlyActiveContent.previousElementSibling.classList.remove('active');
			}

			// Hozirgi accordionni ochish yoki yopish
			if (content.classList.contains('active')) {
				content.classList.remove('active');
				icon.innerHTML = '&#9660;';
			} else {
				content.classList.add('active');
				icon.innerHTML = '&#9650;';
			}

			header.classList.toggle('active');
		});
	});
});

// Menu toggle logic
const menuToggle = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('.mobile-menu');
const closeMenu = document.querySelector('.close-menu');

// Mobile menu open
menuToggle.addEventListener('click', () => {
	mobileMenu.classList.add('active');
	document.body.style.overflow = 'hidden'; // Scrollni bloklash
});

// Close mobile menu
closeMenu.addEventListener('click', () => {
	mobileMenu.classList.remove('active');
	document.body.style.overflow = ''; // Scrollni qayta yoqish
});

// Close the menu when screen is resized to larger than mobile view
window.addEventListener('resize', () => {
	if (window.innerWidth > 820) {
		mobileMenu.classList.remove('active');
		document.body.style.overflow = ''; // Scrollni qayta yoqish
	}
});

/* JavaScript Initialization */
var splide = new Splide('.splide', {
	type: 'loop',
	perPage: 3,
	perMove: 1,
	gap: 20,
	breakpoints: {
		1024: {
			perPage: 3,
		},
		860: {
			perPage: 2,
		},
		768: {
			perPage: 2,
		},
		640: {
			perPage: 1,
		},
		420: {
			perPage: 1,
		},
	},
	arrows: true,
	pagination: false,
});

splide.mount();
