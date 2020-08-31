//pins pink quote box momentarily on scroll 

gsap.to("#para-section-3", {
    ease: "none",
    scrollTrigger: {
        trigger: "#para-section-3",
        pin: true,
        pinSpacing: true,
        start: "top top",
        end: "bottom top",
        id: "para-3-experiment"
    }
})