// this code is copied form codepen to combine scroll trigger and locomotiv (puted in fuction)
function init(){
    gsap.registerPlugin(ScrollTrigger);
  
  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
  
  const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);
  
  // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
  });
  
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  
  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
  
  }
  // init ()

//   rest part start

let tl = gsap.timeline();

tl.from("#img-1, #img-2, #img-3 , #img-4, #img-6 , #img-7 , #img-8 , #img-9" , {
  top: "50%" ,
  left: "50%" ,
  stagger: 0.1 ,
  ease: "power4"
});
tl.to("#img-5" , {
  height: "100vh" ,
  width: "100vw" ,
  ease: "expo.inOut",
  duration: 1.0 ,
  backgroundColor: "#FFF"
})

tl.from(".h1-div h1" , {
  // opacity: 1 ,
  y: 100 , 
  stagger: 0.2 , 
  duration: 1.5 ,
  ease: "power4.inOut"
})

let vid = document.querySelector(".vid-1"); //vid-slowed
vid.playbackRate = 0.8; 
