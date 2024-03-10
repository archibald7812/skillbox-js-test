import "../scss/style.scss";
import "./utils/prism.js";
import { iosVhFix } from "./utils/ios-vh-fix.js";
import "./modules/header/init-page-menu.js";

window.addEventListener("DOMContentLoaded", () => {
	iosVhFix();

	window.addEventListener("load", () => {});
});

/* const self = window;

const testObject = {
	property: 9,
	method: function () {
		console.log(this.property);
	},
};

const testFunction = function () {
	const self = this;
	self.property = 12;
	(function () {
		self.property = 66;
	})();
	console.log(self.property);
}; */

// testFunction();
//new testFunction();
// testObject.method();
//new testObject.method();
//testFunction.call(testFunction);
// testObject.method.call(testFunction);
