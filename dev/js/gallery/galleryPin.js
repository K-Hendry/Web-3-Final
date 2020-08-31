// pinning quote 1
gsap.to("#gallery-quote-1",{ease: "none", scrollTrigger:{
    trigger:"#gallery-quote-1",
    pin: true,
    pinSpacing: false,
    start: "top top",
    end: "bottom top",
    //markers:true,
    id:"quote-1-pin"
}})

// pinning gallery
gsap.to("#gallery-container",{ease: "none", scrollTrigger:{
    trigger:"#gallery-container",
    pin: true,
    pinSpacing: true,
    start: "top top",
    end: "bottom top",
    //markers:true,
    id:"gallery-pin"
}})

// pinning "what goes into a good.."
gsap.to("#gallery-content-2",{ease: "none", scrollTrigger:{
    trigger:"#gallery-content-2",
    pin: true,
    pinSpacing: true,
    start: "top top",
    end: "bottom top",
    //markers:true,
    id:"content-2-pin"
}}, "content2Scroll")
gsap.from("#content-2-quote",{
    yPercent: 100,
    alpha: 0,
    scrollTrigger:{
    trigger:"#gallery-content-2",
    scrub: 1,
    toggleActions: "restart reverse restart reverse",
    markers:true,
    id:"content-3-text"
}}, "content2Scroll")

// pinning pull-quote-2
gsap.to("#gallery-quote-2",{ease: "none", scrollTrigger:{
    trigger:"#gallery-quote-2",
    pin: true,
    pinSpacing: false,
    start: "top top",
    end: "bottom top",
    markers:true,
    id:"quote-2-pin"
}})