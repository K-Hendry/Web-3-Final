//pins pink quote box momentarily on scroll 

if(experimentChecker){
    
    const afterObama = gsap.timeline();
    afterObama.from(".para-3-experiment", {alpha: 0});
    
    ScrollTrigger.create({
        animation: afterObama,
        toggleActions: "play none none none",
        trigger:"#para-section-3",
        pin: true,
        pinSpacing: true,
            start: "top top",
            end: "bottom 70%"
            //scrub: 1
    });
} 

