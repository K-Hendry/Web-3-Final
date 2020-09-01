if(indexChecker){
    const indexParaTimeline = gsap.timeline();

indexParaTimeline.from(".indexPara1", {duration: 1, yPercent:10});

ScrollTrigger.create({
    animation: indexParaTimeline,
    toggleActions: "restart none none none",
    trigger:"#index-experimentation",
    // pin: true,
    //     pinSpacing: true,
        start: "top top"
});
}