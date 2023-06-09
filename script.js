// Lottie Animation
var animation = bodymovin.loadAnimation({
  container: document.getElementById('animation-container'),
  path: 'lottie-files/Analyzing Infographics.json',
  render: 'svg',
  loop: true,
  autoplay: true,
  name: 'demo animation'
})

var animation2 = bodymovin.loadAnimation({
  container: document.getElementById('animation-container2'),
  path: 'lottie-files/Analyzing Infographics.json',
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
    el: document.querySelector("#main"),
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
const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  render();
});

function files(index) {
  var data = `    
  ./assets/sequence img/file_1.webp
  ./assets/sequence img/file_2.webp
  ./assets/sequence img/file_3.webp
  ./assets/sequence img/file_4.webp
  ./assets/sequence img/file_5.webp
  ./assets/sequence img/file_6.webp
  ./assets/sequence img/file_7.webp
  ./assets/sequence img/file_8.webp
  ./assets/sequence img/file_9.webp
  ./assets/sequence img/file_10.webp
  ./assets/sequence img/file_11.webp
  ./assets/sequence img/file_12.webp
  ./assets/sequence img/file_13.webp
  ./assets/sequence img/file_14.webp
  ./assets/sequence img/file_15.webp
  ./assets/sequence img/file_16.webp
  ./assets/sequence img/file_17.webp
  ./assets/sequence img/file_18.webp
  ./assets/sequence img/file_19.webp
  ./assets/sequence img/file_20.webp
  ./assets/sequence img/file_21.webp
  ./assets/sequence img/file_22.webp
  ./assets/sequence img/file_23.webp
  ./assets/sequence img/file_24.webp
  ./assets/sequence img/file_25.webp
  ./assets/sequence img/file_26.webp
  ./assets/sequence img/file_27.webp
  ./assets/sequence img/file_28.webp
  ./assets/sequence img/file_29.webp
  ./assets/sequence img/file_30.webp
  ./assets/sequence img/file_31.webp
  ./assets/sequence img/file_32.webp
  ./assets/sequence img/file_33.webp
  ./assets/sequence img/file_34.webp
  ./assets/sequence img/file_35.webp
  ./assets/sequence img/file_36.webp
  ./assets/sequence img/file_37.webp
  ./assets/sequence img/file_38.webp
  ./assets/sequence img/file_39.webp
  ./assets/sequence img/file_40.webp
  ./assets/sequence img/file_41.webp
  ./assets/sequence img/file_42.webp
  ./assets/sequence img/file_43.webp
  ./assets/sequence img/file_44.webp
  ./assets/sequence img/file_45.webp
  ./assets/sequence img/file_46.webp
  ./assets/sequence img/file_47.webp
  ./assets/sequence img/file_48.webp
  ./assets/sequence img/file_49.webp
  ./assets/sequence img/file_50.webp
  ./assets/sequence img/file_51.webp
  ./assets/sequence img/file_52.webp
  ./assets/sequence img/file_53.webp
  ./assets/sequence img/file_54.webp
  ./assets/sequence img/file_55.webp
  ./assets/sequence img/file_56.webp
  ./assets/sequence img/file_57.webp
  ./assets/sequence img/file_58.webp
  ./assets/sequence img/file_59.webp
  ./assets/sequence img/file_60.webp
  ./assets/sequence img/file_61.webp
  ./assets/sequence img/file_62.webp
  ./assets/sequence img/file_63.webp
  ./assets/sequence img/file_64.webp
  ./assets/sequence img/file_64.webp
  ./assets/sequence img/file_65.webp
  ./assets/sequence img/file_66.webp
  ./assets/sequence img/file_67.webp
  ./assets/sequence img/file_68.webp
  ./assets/sequence img/file_69.webp
  ./assets/sequence img/file_70.webp
  ./assets/sequence img/file_71.webp
  ./assets/sequence img/file_72.webp
  ./assets/sequence img/file_73.webp
  ./assets/sequence img/file_74.webp
  ./assets/sequence img/file_75.webp
  ./assets/sequence img/file_76.webp
  ./assets/sequence img/file_77.webp
  ./assets/sequence img/file_78.webp
  ./assets/sequence img/file_79.webp
  ./assets/sequence img/file_80.webp
  ./assets/sequence img/file_81.webp
  ./assets/sequence img/file_82.webp
  ./assets/sequence img/file_83.webp
  ./assets/sequence img/file_84.webp
  ./assets/sequence img/file_84.webp
  ./assets/sequence img/file_86.webp
  ./assets/sequence img/file_87.webp
  ./assets/sequence img/file_88.webp
  ./assets/sequence img/file_89.webp
  ./assets/sequence img/file_90.webp
  ./assets/sequence img/file_91.webp
  ./assets/sequence img/file_92.webp
  ./assets/sequence img/file_93.webp
  ./assets/sequence img/file_94.webp
  ./assets/sequence img/file_95.webp
  ./assets/sequence img/file_96.webp
  ./assets/sequence img/file_97.webp
  ./assets/sequence img/file_98.webp
  ./assets/sequence img/file_99.webp
  ./assets/sequence img/file_100.webp
  ./assets/sequence img/file_101.webp
  ./assets/sequence img/file_102.webp
  ./assets/sequence img/file_103.webp
  ./assets/sequence img/file_104.webp
  ./assets/sequence img/file_105.webp
  ./assets/sequence img/file_106.webp
  ./assets/sequence img/file_107.webp
  ./assets/sequence img/file_108.webp
  ./assets/sequence img/file_109.webp
  ./assets/sequence img/file_110.webp
  ./assets/sequence img/file_111.webp
  ./assets/sequence img/file_112.webp
  ./assets/sequence img/file_113.webp
  ./assets/sequence img/file_114.webp
  ./assets/sequence img/file_115.webp
  ./assets/sequence img/file_116.webp
  ./assets/sequence img/file_117.webp
  ./assets/sequence img/file_118.webp
 `;
  return data.split("\n")[index];
}

const frameCount = 118;

const images = [];
const imageSeq = {
  frame: 1,
};

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = files(i);
  images.push(img);
}

gsap.to(imageSeq, {
  frame: frameCount - 1,
  snap: "frame",
  ease: `none`,
  scrollTrigger: {
    scrub: 0.15,
    trigger: `#page>canvas`,
    //   set start end according to preference
    start: `top top`,
    end: `235% top`,
    scroller: `#main`,
  },
  onUpdate: render,
});

images[1].onload = render;

function render() {
  scaleImage(images[imageSeq.frame], context);
}

function scaleImage(img, ctx) {
  var canvas = ctx.canvas;
  var hRatio = canvas.width / img.width;
  var vRatio = canvas.height / img.height;
  var ratio = Math.max(hRatio, vRatio);
  var centerShift_x = (canvas.width - img.width * ratio) / 2;
  var centerShift_y = (canvas.height - img.height * ratio) / 2;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(
    img,
    0,
    0,
    img.width,
    img.height,
    centerShift_x,
    centerShift_y,
    img.width * ratio,
    img.height * ratio
  );
}
ScrollTrigger.create({
  trigger: "#page>canvas",
  pin: true,
  // markers:true,
  scroller: `#main`,
  //   set start end according to preference
  start: `top top`,
  end: `235% top`,
});
