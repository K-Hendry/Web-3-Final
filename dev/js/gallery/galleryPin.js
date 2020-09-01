// pinning quote 1
if(galleryChecker){
    gsap.to("#gallery-quote-1", {
        ease: "none",
        scrollTrigger: {
            trigger: "#gallery-quote-1",
            pin: true,
            pinSpacing: false,
            start: "top top",
            end: "bottom top",
            //markers:true,
            id: "quote-1-pin"
        }
    })
    // pinning "what goes into a good.." and the quote runs from bottom up
    gsap.to("#gallery-content-2", {
        ease: "none",
        scrollTrigger: {
            trigger: "#gallery-content-2",
            pin: true,
            pinSpacing: true,
            start: "top top",
            end: "bottom top",
            //markers:true,
            id: "content-2-pin"
        }
    }, "content2Scroll")
    gsap.from("#content-2-quote", {
        yPercent: 100,
        alpha: 0,
        scrollTrigger: {
            trigger: "#gallery-content-2",
            scrub: 1,
            toggleActions: "restart reverse restart reverse",
            markers:true,
            id: "content-3-text"
        }
    }, "content2Scroll")

    // pinning pull-quote-2
    gsap.to("#gallery-quote-2", {
        ease: "none",
        scrollTrigger: {
            trigger: "#gallery-quote-2",
            pin: true,
            pinSpacing: false,
            //markers: true,
            id: "quote-2-pin"
        }
    })

    gsap.to("#gallery-content-4", {
        ease: "none",
        scrollTrigger: {
            trigger: "#gallery-content-4",
            //pin: true,
            //pinSpacing: false,
            markers: true,
            id: "content-4-pin"
        }
    })
}
