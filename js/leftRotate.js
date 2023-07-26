function leftRotate_1() {
	let list = document.querySelector("aside#lAside article.hotArticle ul").children;
	let trans = [];
	const height = 24;
	const maxD = list[list.length - 1].offsetTop;
	const dD = list[list.length - 1].offsetTop - list[0].offsetTop + height;
	for (let i = 0; i < list.length; ++i) {
		trans[i] = 0.0;
	}
	let timer_1 = setInterval(function () {
		for (let i = 0; i < list.length; ++i) {
			list[i].style = "transform:translateY(" + trans[i] + "px)";
			trans[i] += 0.09;
			if (trans[i] + list[i].offsetTop > maxD)
				trans[i] -= dD;
		}
	}, 1);
}
function leftRotate_2() {
	let list = document.querySelector("aside#lAside article.newArticle ul").children;
	let trans = [];
	const height = 24;
	const maxD = list[list.length - 1].offsetTop;
	const dD = list[list.length - 1].offsetTop - list[0].offsetTop + height;
	for (let i = 0; i < list.length; ++i) {
		trans[i] = 0.0;
	}
	let timer_1 = setInterval(function () {
		for (let i = 0; i < list.length; ++i) {
			list[i].style = "transform:translateY(" + trans[i] + "px)";
			trans[i] += 0.09;
			if (trans[i] + list[i].offsetTop > maxD)
				trans[i] -= dD;
		}
	}, 1);
}
$(window).ready(function () {
	leftRotate_1();
	leftRotate_2();
});