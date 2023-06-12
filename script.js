// Lottie Animation
var animation = bodymovin.loadAnimation({
  container: document.getElementById('animation-container'),
  path: 'lottie-files/Analyzing Infographics.json',
  render: 'svg',
  loop: true,
  autoplay: true,
  name: 'demo animation'
})

var people_lottie = bodymovin.loadAnimation({
  container: document.getElementById('people-lottie'),
  path: 'lottie-files/people.json',
  render: 'svg',
  loop: true,
  autoplay: true,
  name: 'people animation'
})

var animation3 = bodymovin.loadAnimation({
  container: document.getElementById('animation-container-simple'),
  path: 'lottie-files/simple.json',
  render: 'svg',
  loop: true,
  autoplay: true,
  name: 'demo animation'
})

// We are using this function for locomotive scroll
function loco() {
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true,
    multiplier: 2.5,
    tablet: { smooth: true },
    smartphone: { smooth: true }
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });

  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
}
loco();

// Canvas Scroll
const canvas = document.getElementById("hero-animation");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  render();
});

function getFileURL(index) {
  return `./assets/sequence img/file_${index + 1}.webp`;
}

const frameCount = 118;
const images = Array.from({ length: frameCount }, (_, index) => {
  const img = new Image();
  img.src = getFileURL(index);
  return img;
});

const imageSeq = { frame: 0 };

gsap.to(imageSeq, {
  frame: frameCount - 1,
  snap: "frame",
  ease: "none",
  scrollTrigger: {
    scrub: 0.5,
    trigger: "#hero-animation",
    start: "top top",
    end: "235% top",
    scroller: "#main",
  },
  onUpdate: render,
});

images[0].onload = render;

function render() {
  const img = images[imageSeq.frame];
  const { width: imgWidth, height: imgHeight } = img;
  const { width: canvasWidth, height: canvasHeight } = canvas;
  const ratio = Math.max(canvasWidth / imgWidth, canvasHeight / imgHeight);
  const centerShift_x = (canvasWidth - imgWidth * ratio) / 2;
  const centerShift_y = (canvasHeight - imgHeight * ratio) / 2;

  context.clearRect(0, 0, canvasWidth, canvasHeight);
  context.drawImage(
    img,
    0,
    0,
    imgWidth,
    imgHeight,
    centerShift_x,
    centerShift_y,
    imgWidth * ratio,
    imgHeight * ratio
  );
}

ScrollTrigger.create({
  trigger: "#hero-animation",
  pin: true,
  scroller: "#main",
  start: "top top",
  end: "235% top",
});
