var empParagraphYPercent = 10;

var empParagraphTimeline = gsap.timeline();

empParagraphTimeline.from("#emp-p1, #emp-p2", {alpha:0, yPercent:empParagraphYPercent})

ScrollTrigger.create({
    trigger: "#emp-p1, #emp-p2",
    start: "top 50%",
    end: "bottom 50%",
    animation: empParagraphTimeline,
    toggleActions: "play play none none",
    // markers: true,
    id:"paragraph"
    // scrub: 2
});

//paragraph 2

var empParagraph2YPercent = 10;

var empParagraph2Timeline = gsap.timeline();

empParagraph2Timeline.from("#emp-p2", {alpha:0, yPercent:empParagraph2YPercent})

ScrollTrigger.create({
    trigger: "#emp-p2",
    start: "top 50%",
    end: "bottom 50%",
    animation: empParagraph2Timeline,
    toggleActions: "play play none none",
    markers: true,
    id:"paragraph"
    // scrub: 2
});