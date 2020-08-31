
if(experimentChecker){
    const asAResult = gsap.timeline();
    asAResult.from(".pq1", {duration: .25, xPercent:-10});
    
    ScrollTrigger.create({
        animation: asAResult,
        toggleActions: "restart none none none",
        trigger:"#section-2-experiment",
        // pin: true,
        //     pinSpacing: true,
            start: "top 60%",
            //end: "bottom 60%",
            scrub: 1
    });
}


if(experimentChecker){
    const whoCanForget = gsap.timeline();
    whoCanForget.from(".pq2", {duration: .25, xPercent:-10});
    
    ScrollTrigger.create({
        animation: whoCanForget,
        toggleActions: "restart none none none",
        trigger:"#section-4-experiment",
        // pin: true,
        //     pinSpacing: true,
            start: "top 10%",
            //end: "bottom 60%",
            scrub: 1
    });
}