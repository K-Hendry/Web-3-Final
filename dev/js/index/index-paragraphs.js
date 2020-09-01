if(indexChecker){
    const indexParaTimeline = gsap.timeline();

indexParaTimeline.from(".indexPara1", {duration: 1, yPercent:10});

ScrollTrigger.create({
    animation: indexParaTimeline,
    toggleActions: "play none none none",
    trigger:"#index-experimentation",
    // pin: true,
    //     pinSpacing: true,
        start: "top 60%"
});
}
if(indexChecker){
    const indexParaTimeline2 = gsap.timeline();

indexParaTimeline2.from(".indexPara2", {duration: 1, yPercent:10});

ScrollTrigger.create({
    animation: indexParaTimeline2,
    toggleActions: "play none none none",
    trigger:"#index-impact",
    // pin: true,
    //     pinSpacing: true,
        start: "top 60%"
});
}
if(indexChecker){
    const indexParaTimeline3 = gsap.timeline();

indexParaTimeline3.from(".indexPara3", {duration: 1, yPercent:10});

ScrollTrigger.create({
    animation: indexParaTimeline3,
    toggleActions: "play none none none",
    trigger:"#index-publicity",
    // pin: true,
    //     pinSpacing: true,
        start: "top 60%"
});
}
if(indexChecker){
    const indexParaTimeline4 = gsap.timeline();

indexParaTimeline4.from(".indexPara4", {duration: 1, yPercent:10});

ScrollTrigger.create({
    animation: indexParaTimeline4,
    toggleActions: "play none none none",
    trigger:"#index-history",
    // pin: true,
    //     pinSpacing: true,
        start: "top 60%"
});
}