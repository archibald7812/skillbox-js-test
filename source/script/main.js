import "../scss/style.scss";
import "./utils/prism.js";
import "./modules/header/init-page-menu.js";
import "./modules/slider/init-slider.js";
import { iosVhFix } from "./utils/ios-vh-fix.js";
import { loadData } from "../script/modules/filter/init-filter.js";

window.addEventListener("DOMContentLoaded", () => {
	iosVhFix();
	loadData();

	window.addEventListener("load", () => {});
});
