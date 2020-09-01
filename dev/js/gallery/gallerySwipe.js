//selector of gallery js
var galleryChecker = document.querySelector("#gallery-page");

if(galleryChecker){
    //gallery pinning and swiping timeline
    const galleryTimeline = gsap.timeline({paused:true});
    
    //calculating the width of the whole gallery
    var galleryMain = $("#gallery-main");
    var galleryMainWidth = galleryMain.width();


    galleryTimeline.to("#gallery-container", {
        ease: "none",
        scrollTrigger: {
            trigger: "#gallery-container",
            pin: true,
            pinSpacing: true,
            end: "bottom top",
            //markers: true,
            id: "gallery-pin"
        }
    }, "galleryPin")
    
    .to("#gallery-main", {x:-galleryMainWidth, 
        scrollTrigger: {
            trigger: "#gallery-container",
            scrub: true,
            start: "top top",
            markers: true,
            id: "gallery-swipe"
    }}, "gallerySwipe")
    
}
