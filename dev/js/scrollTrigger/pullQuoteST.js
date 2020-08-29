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


ScrollTrigger.create({
    trigger: "#emp-quote",
    start: "top top",
    endTrigger: "#content-container",
    end: "bottom bottom",
    pin: true,
    pinSpacing: false,
    markers: true,
    id:"quotePin"
  });