const burgerIcon = document.querySelector('[data-sandwich="data-sandwich"]');
const nav = document.querySelector('[data-main-nav="nav"]');
const logo = document.querySelector('[data-header-logo="data-header-logo"]');
const body = document.body;
const navItems = document.querySelectorAll(".main-nav__item");

const activateDelay = () => {
	navItems.forEach((item, index) => {
		item.style.transitionDelay = `${index * 0.3}s`;
	});
};

const disableDelay = () => {
	navItems.forEach((item) => {
		item.style.transitionDelay = `0s`;
	});
};

const removeBurger = () => {
	burgerIcon.classList.remove("is-active");
	nav.classList.remove("is-active");
	body.classList.remove("scroll-lock");
	logo.classList.remove("is-menu");
	disableDelay();
};

const toggleBurger = () => {
	burgerIcon.classList.toggle("is-active");
	nav.classList.toggle("is-active");
	body.classList.toggle("scroll-lock");
	logo.classList.toggle("is-menu");
	if (nav.classList.contains("is-active")) {
		activateDelay();
	} else {
		disableDelay();
	}
};

const observer = new ResizeObserver((entries) => {
	if (entries[0].contentRect.width > 1023) {
		removeBurger();
	}
});

observer.observe(document.body);

burgerIcon.addEventListener("click", () => {
	toggleBurger();
});

document.addEventListener("keydown", function (event) {
	if (event.key === "Escape") {
		removeBurger();
	}
});
