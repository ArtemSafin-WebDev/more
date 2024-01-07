document.addEventListener("DOMContentLoaded", () => {
  let lenis = null;

  if (!window.matchMedia("(hover: hover)").matches) {
  }

  //   lenis = new Lenis({
  //     smoothWheel: true,
  //   });

  //   lenis.on("scroll", ScrollTrigger.update);

  //   gsap.ticker.add((time) => {
  //     if (lenis) {
  //       lenis.raf(time * 1000);
  //     }
  //   });

  //   gsap.ticker.lagSmoothing(0);

  const sections = Array.from(document.querySelectorAll("section"));

  sections.forEach((section, index) => {
    if (index > sections.length - 2) return;

    const inner = section.querySelector(".section-inner");

    const tl = gsap.timeline({
      scrollTrigger: {
        start: "top top",
        end: () => `top+=${window.innerHeight} top`,
        trigger: section,
        markers: false,
        scrub: true,
      },
    });
    tl.to(inner, {
      yPercent: 100,
      ease: "none",
      duration: 1,
    });
  });
});
