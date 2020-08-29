//pins pull quote section, pulls in quote from side

// var pullQuoteXPercent = 20;

// var pullQuoteTimeline = gsap.timeline();

// pullQuoteTimeline.from(".pull-quote", {alpha:1, XPercent:pullQuoteXPercent})

// ScrollTrigger.create({
//     trigger: ".pull-quote",
//     start: "top 20%",
//     end: "bottom 50%",
//     animation: pullQuoteTimeline,
//     toggleActions: "play pause play stop",
//     markers: true,
//     scrub: true,
//     id:"pull-quote"
// });


gsap.to("#employment-start",{scrollTrigger:{
    trigger:"#employment-start",
    pin: true,
    pinSpacing: false,
    start: "top 76",
    end: "bottom 76",
    // markers:true,
    id:"hero"
}})