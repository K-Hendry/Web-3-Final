//animates paragraphs up from the bottom on scroll

var paragraphYPercent = 10;

var paragraphTimeline = gsap.timeline();

paragraphTimeline.from(".body-text", {alpha:0, yPercent:paragraphYPercent})

ScrollTrigger.create({
    trigger: ".body-text",
    start: "top 80%",
    end: "bottom 50%",
    animation: paragraphTimeline,
    toggleActions: "play pause play stop",
    // markers: true,
    id:"paragraph"
});
