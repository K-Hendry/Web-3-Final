var indexChecker = document.querySelector("#index-background");

if(indexChecker){
    const indexHeaderTimeline = gsap.timeline();

    indexHeaderTimeline.from(".headerSlideUp", {duration: 1, yPercent:2});
    
    ScrollTrigger.create({
        animation: indexHeaderTimeline,
        toggleActions: "restart none none none",
        trigger:"#index-opening",
            start: "top top",
            //end: "bottom top",
            scrub: 1
    });
}
if(indexChecker){
    const campaignWork = gsap.timeline();
    campaignWork.from(".subHeaderSlideRight", {duration: .25, xPercent:-10});
    
    ScrollTrigger.create({
        animation: campaignWork,
        toggleActions: "restart none none none",
        trigger:"#hero-image-experiment",
        // pin: true,
        //     pinSpacing: true,
            start: "top 10%",
            //end: "bottom 60%",
            scrub: 1
    });
}