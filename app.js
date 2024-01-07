document.addEventListener("DOMContentLoaded", () => {
  const images = Array.from(document.querySelectorAll("img[loading='lazy']"));

  images.forEach((image) => {
    image.classList.add("lazyload");
    function loaded() {
      image.classList.add("loaded");
    }
    if (image.complete) {
      loaded();
    } else {
      image.addEventListener("load", loaded);
    }
  });
});
