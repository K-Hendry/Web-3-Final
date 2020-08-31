// pinning quote 1
gsap.to("#gallery-quote-1",{ease: "none", scrollTrigger:{
    trigger:"#gallery-quote-1",
    pin: true,
    pinSpacing: false,
    start: "top top",
    end: "bottom top",
    markers:true,
    id:"quote-1-pin"
}})
// pinning gallery
gsap.to("#gallery-container",{ease: "none", scrollTrigger:{
    trigger:"#gallery-container",
    pin: true,
    pinSpacing: false,
    start: "top top",
    end: "bottom top",
    markers:true,
    id:"gallery-pin"
}})
// // pinning gallery
// gsap.to("#gallery-container",{ease: "none", scrollTrigger:{
//     trigger:"#gallery-container",
//     pin: true,
//     pinSpacing: false,
//     start: "top top",
//     end: "bottom top",
//     markers:true,
//     id:"gallery-pin"
// }})