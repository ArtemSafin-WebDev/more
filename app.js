document.addEventListener("DOMContentLoaded", () => {
  let lenis = null;

  if (!window.matchMedia("(hover: hover)").matches) {
    lenis = new Lenis({
      smoothWheel: true,
    });

    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      if (lenis) {
        lenis.raf(time * 1000);
      }
    });

    gsap.ticker.lagSmoothing(0);
  }

  const sections = Array.from(document.querySelectorAll("section"));

  sections.forEach((section, index) => {
    if (index > sections.length - 2) return;
    ScrollTrigger.create({
      start: "bottom bottom",
      end: () => `bottom+=${window.innerHeight} bottom`,
      trigger: section,
      pin: true,
      pinSpacing: false,
      markers: false,
    });
  });
});
