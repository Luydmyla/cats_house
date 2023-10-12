// console.log("Hello, World!");
// const logotype = document.querySelector(".");
const slider = document.querySelector(".hero-list");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

// new Siema({
//   selector: ".hero",
// });

const mySiema = new Siema({
  selector: slider,
  duration: 1000,
  easing: "cubic-bezier(.17,.67,.32,1.34)",
  //   perPage: 1,
  //   startIndex: 0,
  //   draggable: true,
  //   multipleDrag: true,
  //   threshold: 20,
  loop: true,
  //   rtl: false,
  //   onInit: () => {},
  //   onChange: () => {},
});

function onClickNext() {
  mySiema.next();
}
function onClickPrev() {
  mySiema.prev();
}

next.addEventListener("click", onClickNext);
prev.addEventListener("click", onClickPrev);

const lightbox = new SimpleLightbox(".galllery a", {
  overlayOpacity: 10,
});

AOS.init({
  duration: 2000,
  easing: "cubic-bezier(.17,.67,.32,1.34)",
});
