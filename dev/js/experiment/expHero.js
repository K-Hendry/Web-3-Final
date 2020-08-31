var experimentChecker = document.querySelector("#experimentation");

if(experimentChecker){
    const expHeaderTimeline = gsap.timeline();

    expHeaderTimeline.from(".headerSlide", {duration: 1, yPercent:.5});
    
    ScrollTrigger.create({
        animation: expHeaderTimeline,
        toggleActions: "restart none none none",
        trigger:"#hero-experiment",
            start: "top top",
            //end: "bottom top",
            scrub: 1
    });
}
if(experimentChecker){
    const needsDesigners = gsap.timeline();
    needsDesigners.from(".subHeaderSlide", {duration: .25, xPercent:-10});
    
    ScrollTrigger.create({
        animation: needsDesigners,
        toggleActions: "restart none none none",
        trigger:"#hero-image-experiment",
        // pin: true,
        //     pinSpacing: true,
            start: "top 10%",
            //end: "bottom 60%",
            scrub: 1
    });
}

