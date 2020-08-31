var paragraphYPercent = 20;

var paragraphTimeline = gsap.timeline();

paragraphTimeline.from("#emp-p1", {alpha:0, yPercent:paragraphYPercent})

ScrollTrigger.create({
    trigger: "#emp-p1",
    start: "top 90%",
    end: "bottom 70%",
    animation: paragraphTimeline,
    toggleActions: "play none play none",
    markers: true,
    id:"paragraph"
    // scrub: 2
});