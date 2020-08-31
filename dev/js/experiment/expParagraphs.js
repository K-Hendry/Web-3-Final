const expParaTimeline = gsap.timeline();

expParaTimeline.from(".para1", {duration: 1, yPercent:10});

ScrollTrigger.create({
    animation: expParaTimeline,
    toggleActions: "restart none none none",
    trigger:"#pullquote-section-1",
    pin: true,
        pinSpacing: true,
        start: "top top",
        //end: "bottom top",
        scrub: 1
});

const expPara2Timeline = gsap.timeline();

expPara2Timeline.from(".para2", {duration: 1, yPercent:10});

ScrollTrigger.create({
    animation: expPara2Timeline,
    toggleActions: "restart none none none",
    trigger:"#image-section-4",
        start: "top top",
        //end: "bottom top",
        scrub: 1
});