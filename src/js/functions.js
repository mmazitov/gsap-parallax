gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

document.addEventListener("DOMContentLoaded", () => {
	initParalaxScroll();
});

const initParalaxScroll = () => {
	const smoother = ScrollSmoother.create({
		wrapper: ".wrapper",
		content: ".content",
		smooth: 1.5,
		effects: true,
	});

	window.addEventListener("scroll", () => {
		document.documentElement.style.setProperty("--scrollTop", `${window.scrollY}px`);
	});
};
