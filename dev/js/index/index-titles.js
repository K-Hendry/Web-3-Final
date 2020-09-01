if(indexChecker){
    const needsDesigners = gsap.timeline();
    needsDesigners.from(".indexSubtitle1", {duration: 1, xPercent:-10});
    
    ScrollTrigger.create({
        animation: needsDesigners,
        toggleActions: "restart none none none",
        trigger:"#index-experimentation",
        // pin: true,
        //     pinSpacing: true,
            start: "top 60%"
            //end: "bottom 60%",
            //scrub: 1
    });
}
if(indexChecker){
    const makeImpact = gsap.timeline();
    makeImpact.from(".indexSubtitle2", {duration: 1, xPercent:10});
    
    ScrollTrigger.create({
        animation: makeImpact,
        toggleActions: "restart none none none",
        trigger:"#index-impact",
        // pin: true,
        //     pinSpacing: true,
            start: "top 60%"
            //end: "bottom 60%",
            //scrub: 1
    });
}
if(indexChecker){
    const getPublicity = gsap.timeline();
    getPublicity.from(".indexSubtitle3", {duration: 1, xPercent:-10});
    
    ScrollTrigger.create({
        animation: getPublicity,
        toggleActions: "restart none none none",
        trigger:"#index-publicity",
        // pin: true,
        //     pinSpacing: true,
            start: "top 60%"
            //end: "bottom 60%",
            //scrub: 1
    });
}
if(indexChecker){
    const beHistory = gsap.timeline();
    beHistory.from(".indexSubtitle4", {duration: 1, xPercent:10});
    
    ScrollTrigger.create({
        animation: beHistory,
        toggleActions: "restart none none none",
        trigger:"#index-history",
        // pin: true,
        //     pinSpacing: true,
            start: "top 60%"
            //end: "bottom 60%",
            //scrub: 1
    });
}
if(indexChecker){
    const exploreGallery = gsap.timeline();
    exploreGallery.from(".indexSubtitle5", {duration: 1, xPercent:-10});
    
    ScrollTrigger.create({
        animation: exploreGallery,
        toggleActions: "restart none none none",
        trigger:"#index-gallery",
        // pin: true,
        //     pinSpacing: true,
            start: "top 60%"
            //end: "bottom 60%",
            //scrub: 1
    });
}