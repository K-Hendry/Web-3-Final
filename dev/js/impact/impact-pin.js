// pinning my pull quote
gsap.to("#impact-hero-1",{ease: "none", scrollTrigger:{
    trigger:"#impact-hero-1",
    pin: true,
    pinSpacing: false,
    start: "top 76",
    end: "bottom 76",
    // markers:true,
    id:"quote-pin"
}})

// pinning my hero
gsap.to("#impact-hero-2",{ease: "none", scrollTrigger:{
    trigger:"#impact-hero-2",
    pin: true,
    pinSpacing: false,
    start: "top 76",
    end: "bottom 76",
    // markers:true,
    id:"hero-pin"
}})

// pinning my obama
gsap.to("#sway-img",{ease: "none", scrollTrigger:{
    trigger:"#sway-img",
    pin: true,
    start: "top 75",
    end: "top 5",
    // markers:true,
    id:"obama-pin",
    scrub: true
}})

// pinning thesis
gsap.to("#impact-thesis",{ease: "none", scrollTrigger:{
    trigger:"#impact-thesis",
    pin: true,
    pinSpacing: false,
    start: "top 76",
    end: "bottom 76"
    // markers:true
    // id:"obama-pin"
}})

// pinning vote sticker
// gsap.to("#change-body",{scrollTrigger:{
//     trigger:"#change-img",
//     pin: true,
//     pinSpacing: false,
//     start: "top 76",
//     end: "bottom 76",
//     // markers:true,
//     id:"change-pin"
// }})

var changeBodyChecker = document.querySelector("#change-body");
if(changeBodyChecker){
    // pinning vote sticker
gsap.to("#change-img",{scrollTrigger:{
    trigger:"#change-body",
    pin: true,
    pinSpacing: false,
    start: "top 76",
    end: "bottom 76",
    // markers:true,
    id:"change-pin"
}})
}

// // pinning moral
// gsap.to("#moral-section",{scrollTrigger:{
//     trigger:"#moral-img",
//     pin: true,
//     pinSpacing: false,
//     start: "top 76",
//     end: "bottom 76"
//     // markers:true,
// }})