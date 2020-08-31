//animates headers from 0 opacity

var empHeaderTimeline = gsap.timeline();

empHeaderTimeline.from("#emp-header", {alpha:0})

ScrollTrigger.create({
    trigger: "#emp-header",
    start: "top 80%",
    end: "bottom 50%",
    animation: empHeaderTimeline,
    toggleActions: "play play none none",
    // markers: true,
    id:"emp-header"
});