//pins pull quote so next section overlaps on top of it
//make following section z-index:200; and position:relative; so it goes on top, not below

if(employmentChecker){
    gsap.to("#emp-quote",{ease: "none", scrollTrigger:{
        trigger:"#emp-quote",
        pin: true,
        pinSpacing: false,
        start: "top top",
        end: "bottom 1",
        // markers:true,
        id:"emp-quote-pin"
    }})
}

//animates quote in from side 

if(employmentChecker){
    var pullQuoteTimeline = gsap.timeline();

    pullQuoteTimeline.from("#emp-quote-text", {alpha:0, xPercent:5})

    ScrollTrigger.create({
        trigger: "#emp-quote-text",
        start: "top 60%",
        end: "bottom 70%",
        animation: pullQuoteTimeline,
        toggleActions: "play play none none",
        // markers: true,
        scrub: true,
        id:"pull-quote"
    });
}



//pin map section

if(employmentChecker){
    
    //only pin if desktop size
    if($(window).width() >= 1024){
        gsap.to("#emp-map",{ease: "none", scrollTrigger:{
            trigger:"#emp-map",
            pin: true,
            pinSpacing: false,
            start: "top top",
            end: "bottom 1",
            
            // markers:true,
            id:"emp-map-pin"
        }})
    }
}
