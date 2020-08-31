//pins pull quote so next section overlaps on top of it
//make following section z-index:200; and position:relative; so it goes on top, not below

gsap.to("#emp-quote",{ease: "none", scrollTrigger:{
    trigger:"#emp-quote",
    pin: true,
    pinSpacing: false,
    start: "top top",
    end: "bottom 1",
    
    // markers:true,
    id:"emp-quote-pin"
}})

//animates quote in from side 

var pullQuoteTimeline = gsap.timeline();

pullQuoteTimeline.from("#emp-quote-text", {alpha:0, xPercent:5})

ScrollTrigger.create({
    trigger: "#emp-quote-text",
    start: "top 80%",
    end: "bottom 70%",
    animation: pullQuoteTimeline,
    toggleActions: "play pause play stop",
    // markers: true,
    scrub: true,
    id:"pull-quote"
});



//pin map section
//make so only pins on xl size? if else sentence?
//https://stackoverflow.com/questions/17237935/jquery-execute-scripts-based-on-screen-size

gsap.to("#emp-map",{ease: "none", scrollTrigger:{
    trigger:"#emp-map",
    pin: true,
    pinSpacing: false,
    start: "top top",
    end: "bottom 1",
    
    // markers:true,
    id:"emp-map-pin"
}})