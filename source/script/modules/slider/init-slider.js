import Swiper from "swiper";
import "swiper/css";

const swiperParent = document.querySelector('[data-card-slider="parent"]');
const swiperWrapper = document.querySelector('[data-card-slider="wrapper"]');
const swiperSlide = document.querySelectorAll('[data-card-slider="slide"]');
const prev = document.querySelector('[data-card-slider="prev"]');
const next = document.querySelector('[data-card-slider="next"]');

let swiper = null;

function updateClass() {
	const screenWidth = window.innerWidth;

	if (screenWidth > 768) {
		swiperParent.classList.remove("products__swiper");
		swiperWrapper.classList.remove("products__list");
		swiperSlide.forEach((item) => item.classList.remove("products__item"));

		swiperParent.classList.add("swiper");
		swiperWrapper.classList.add("swiper-wrapper");
		swiperSlide.forEach((item) => item.classList.add("swiper-slide"));
		swiper = new Swiper(".swiper", {
			loop: true,
			spaceBetween: 10,
			slidesPerView: 3,
			navigation: true,
			breakpoints: {
				768: {
					slidesPerView: 1,
				},
				1024: {
					slidesPerView: 2,
				},
				1341: {
					slidesPerView: 3,
				},
			},
		});
		next.addEventListener("click", () => swiper.slideNext());
		prev.addEventListener("click", () => swiper.slidePrev());
	} else {
		swiperParent.classList.remove("swiper");
		swiperWrapper.classList.remove("swiper-wrapper");
		swiperSlide.forEach((item) => item.classList.remove("swiper-slide"));

		swiperParent.classList.add("products__swiper");
		swiperWrapper.classList.add("products__list");
		swiperSlide.forEach((item) => item.classList.add("products__item"));
		swiper.destroy(true, true);
	}

	updateSwiper();
}

window.addEventListener("resize", updateClass);

updateClass();
