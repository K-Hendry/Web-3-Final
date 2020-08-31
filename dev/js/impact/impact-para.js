var paragraphYPercent = 20;

var paragraphTimeline = gsap.timeline();

paragraphTimeline.from("#moral-para-1", {alpha:0, yPercent:paragraphYPercent})

ScrollTrigger.create({
    trigger: "#moral-para-1",
    start: "top 90%",
    end: "bottom 70%",
    animation: paragraphTimeline,
    // toggleActions: "play pause play stop",
    // markers: true,
    id:"paragraph",
    scrub: 2
});
