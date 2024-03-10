const parent = document.querySelector('[data-project="parent"]');
const template = document.querySelector('[data-template="project-card"]');

const createBlock = (item) => {
	const newItem = template.content.cloneNode(true);
	const card = newItem.querySelector(".product-card");
	const label = newItem.querySelector(".product-card__label");
	const title = newItem.querySelector(".product-card__title");
	const hit = newItem.querySelector(".product-card__hit");
	const img = newItem.querySelector(".product-card__img");
	const date = newItem.querySelector(".product-card__date");

	card.classList.add(...item.classes);

	title.textContent = item.title;
	label.textContent = item.label;
	date.textContent = item.date;
	img.src = item.src;
	if (!item.hit) hit.style.display = "none";

	return newItem;
};

export const loadData = async () => {
	const response = await fetch("/projects.json");
	const data = await response.json();
	parent.classList.add("is-active");
	data.forEach((item) => {
		const block = createBlock(item);
		parent.appendChild(block);
	});
};
