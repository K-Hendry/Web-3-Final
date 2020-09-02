gsap.to("#progress",{value:100,ease:"none",scrollTrigger:{scrub:.3}}),$('[data-fancybox="gallery"]').fancybox({touch:{vertical:!0},buttons:[]}),gsap.registerPlugin(ScrollTrigger,TweenLite);var headerHeight=$("header").outerHeight();gsap.set("header",{y:-headerHeight});var headerTimeline=gsap.timeline();headerTimeline.to("header",{duration:.4,y:0}),$((function(){var e=200;$(window).scroll((function(){if(!1===canYouSeeTheMenu){var t=$(this).scrollTop();jQuery(window).scrollTop()>=200&&t>=e?headerTimeline.reverse():headerTimeline.play(),e=t}}))}));var canYouSeeTheMenu=!1,navHeight=$("#main-nav").outerHeight();gsap.set("#main-nav",{y:-navHeight});var mainNavTimeline=gsap.timeline({paused:!0});function hideShowMainNav(){!1===canYouSeeTheMenu?(mainNavTimeline.play(),canYouSeeTheMenu=!0):(mainNavTimeline.reverse(),canYouSeeTheMenu=!1)}mainNavTimeline.to("#main-nav",{duration:.5,y:0});var menuBackground=document.querySelector("#main-nav");function reportWindowSize(){console.log("test"),!1===canYouSeeTheMenu&&(console.log("can't see the main nav"),console.log($("#main-nav").outerHeight()),navHeight=$("#main-nav").outerHeight(),gsap.set("#main-nav",{y:-navHeight}))}window.onclick=function(e){e.target==menuBackground&&hideShowMainNav()},window.addEventListener("resize",reportWindowSize),$("#main-nav li").on("click",hideShowMainNav),$("#burger").on("click",hideShowMainNav);var indexChecker=document.querySelector("#index-background");if(indexChecker){const e=gsap.timeline();e.from("#index-campaign",{alpha:0}),ScrollTrigger.create({trigger:"#index-campaign",start:"top 50%",end:"bottom 50%",animation:e,toggleActions:"play play none none"})}if(indexChecker){const e=gsap.timeline();e.from("#index-impact-h",{alpha:0}),ScrollTrigger.create({trigger:"#index-impact-h",start:"top 60%",end:"bottom 50%",animation:e,toggleActions:"play play none none"})}if(indexChecker){const e=gsap.timeline();e.from("#get-pub",{alpha:0}),ScrollTrigger.create({trigger:"#get-pub",start:"top 60%",end:"bottom 50%",animation:e,toggleActions:"play play none none"})}if(indexChecker){const e=gsap.timeline();e.from("#history-h",{alpha:0}),ScrollTrigger.create({trigger:"#history-h",start:"top 60%",end:"bottom 50%",animation:e,toggleActions:"play play none none"})}if(indexChecker&&ScrollTrigger.create({trigger:"#index-impact",pin:!0,pinSpacing:!1,start:"top top",end:"bottom 1"}),indexChecker){const e=gsap.timeline();e.from(".indexPara1",{alpha:0,yPercent:10}),ScrollTrigger.create({trigger:".indexPara1",start:"top 70%",end:"bottom 50%",animation:e,toggleActions:"play play none none",id:"paragraph"})}if(indexChecker){const e=gsap.timeline();e.from(".indexPara2",{alpha:0,yPercent:10}),ScrollTrigger.create({trigger:".indexPara2",start:"top 70%",end:"bottom 50%",animation:e,toggleActions:"play play none none",id:"paragraph"})}if(indexChecker){const e=gsap.timeline();e.from(".indexPara3",{alpha:0,yPercent:10}),ScrollTrigger.create({trigger:".indexPara3",start:"top 70%",end:"bottom 50%",animation:e,toggleActions:"play play none none",id:"paragraph"})}if(indexChecker){const e=gsap.timeline();e.from(".indexPara4",{alpha:0,yPercent:10}),ScrollTrigger.create({trigger:".indexPara4",start:"top 50%",end:"bottom 50%",animation:e,toggleActions:"play play none none",id:"paragraph"})}var employmentChecker=document.querySelector("#employment-page");if(employmentChecker){var TweenLite=gsap.timeline(),Cont={val:0},NewVal=23;TweenLite.to(Cont,5,{val:NewVal,roundProps:"val",onUpdate:function(){document.getElementById("count-tween").innerHTML=Cont.val}}),ScrollTrigger.create({trigger:"#counter",start:"top 50%",end:"bottom 50%",animation:TweenLite,toggleActions:"play none none none",id:"counter"})}if(employmentChecker&&ScrollTrigger.create({trigger:"#emp-quote",pin:!0,pinSpacing:!1,start:"top top",end:"bottom 1",id:"emp-quote-pin"}),employmentChecker){var pullQuoteTimeline=gsap.timeline();pullQuoteTimeline.from("#emp-quote-text",{alpha:0,xPercent:5}),ScrollTrigger.create({trigger:"#emp-quote-text",start:"top 60%",end:"bottom 70%",animation:pullQuoteTimeline,toggleActions:"play play none none",scrub:!0,id:"pull-quote"})}employmentChecker&&$(window).width()>=1024&&ScrollTrigger.create({trigger:"#emp-map",pin:!0,pinSpacing:!1,start:"top top",end:"bottom 1",id:"emp-map-pin"});var empParagraphYPercent=10;if(employmentChecker){var empParagraphTimeline=gsap.timeline();empParagraphTimeline.from("#emp-p1",{alpha:0,yPercent:empParagraphYPercent}),ScrollTrigger.create({trigger:"#emp-p1",start:"top 50%",end:"bottom 50%",animation:empParagraphTimeline,toggleActions:"play play none none",id:"paragraph"})}if(employmentChecker){var empParagraph2Timeline=gsap.timeline();empParagraph2Timeline.from("#emp-p2",{alpha:0,yPercent:empParagraphYPercent}),ScrollTrigger.create({trigger:"#emp-p2",start:"top 80%",end:"bottom 50%",animation:empParagraph2Timeline,toggleActions:"play play none none",id:"paragraph2"})}if(employmentChecker){var empParagraph3Timeline=gsap.timeline();empParagraph3Timeline.from("#emp-p3",{alpha:0,yPercent:empParagraphYPercent}),ScrollTrigger.create({trigger:"#emp-p3",start:"top 80%",end:"bottom 50%",animation:empParagraph3Timeline,toggleActions:"play play none none",id:"paragraph3"})}if(employmentChecker){var empParagraph4Timeline=gsap.timeline();empParagraph4Timeline.from("#emp-end-p",{alpha:0,yPercent:empParagraphYPercent}),ScrollTrigger.create({trigger:"#emp-end-p",start:"top 80%",end:"bottom 50%",animation:empParagraph4Timeline,toggleActions:"play play none none",id:"paragraph4"})}if(employmentChecker){var empCardsTimeline=gsap.timeline();gsap.set(".emp-card",{alpha:0,yPercent:100}),empCardsTimeline.to(".emp-card",{duration:.5,alpha:1,yPercent:0,stagger:.25}),ScrollTrigger.create({animation:empCardsTimeline,toggleActions:"play none none none",trigger:"#emp-cards",start:"top 50%",end:"bottom 50%",id:"emp-cards"})}if(employmentChecker){var empHeaderTimeline=gsap.timeline();empHeaderTimeline.from("#emp-header",{alpha:0}),ScrollTrigger.create({trigger:"#emp-header",start:"top 80%",end:"bottom 50%",animation:empHeaderTimeline,toggleActions:"play play none none",id:"emp-header"})}if(employmentChecker){var empHeader2Timeline=gsap.timeline();empHeader2Timeline.from("#designers-wanted",{alpha:0}),ScrollTrigger.create({trigger:"#designers-wanted",start:"top 60%",end:"bottom 50%",animation:empHeader2Timeline,toggleActions:"play play none none",id:"emp-header2"})}var experimentChecker=document.querySelector("#experimentation");if(experimentChecker){const e=gsap.timeline();e.from(".headerSlide",{duration:1,yPercent:2}),ScrollTrigger.create({animation:e,toggleActions:"play none none none",trigger:"#hero-experiment",start:"top top"})}if(experimentChecker){const e=gsap.timeline();e.from(".subHeaderSlide",{duration:1,xPercent:-10}),ScrollTrigger.create({animation:e,toggleActions:"play none none none",trigger:"#hero-image-experiment",start:"top 10%"})}if(experimentChecker){const e=gsap.timeline();e.from(".para1",{duration:3,yPercent:30}),ScrollTrigger.create({animation:e,toggleActions:"play play none none",trigger:"#pullquote-section-1",pin:!0,pinSpacing:!0,start:"top top"})}if(experimentChecker){const e=gsap.timeline();e.from(".para2",{duration:1,yPercent:10}),ScrollTrigger.create({animation:e,toggleActions:"play play none none",trigger:"#image-section-4",start:"top top"})}if(experimentChecker){const e=gsap.timeline();e.from(".pq1",{duration:1,xPercent:-10}),ScrollTrigger.create({animation:e,toggleActions:"play none none none",trigger:"#section-2-experiment",start:"top 10%"})}if(experimentChecker){const e=gsap.timeline();e.from(".pq2",{duration:1,xPercent:-10}),ScrollTrigger.create({animation:e,toggleActions:"play none none none",trigger:"#section-4-experiment",start:"top 10%"})}if(experimentChecker){const e=gsap.timeline();e.from(".para-3-experiment",{alpha:1}),ScrollTrigger.create({animation:e,toggleActions:"play none none none",trigger:"#para-section-3",pin:!0,pinSpacing:!1,start:"top 76",end:"bottom 76",id:"afterObama"})}if(experimentChecker&&gsap.to("#section-2-experiment",{ease:"none",scrollTrigger:{trigger:"#section-2-experiment",pin:!0,pinSpacing:!1,start:"top 76",end:"bottom 76",id:"as-result-2"}}),experimentChecker){const e=gsap.timeline();e.from(".g-photos",{duration:2,yPercent:100,stagger:.5}),ScrollTrigger.create({animation:e,toggleActions:"play none none none",trigger:"#section-5-experiment",pin:!0,pinSpacing:!0,start:"top top",end:"bottom top"})}gsap.to("#impact-hero-1",{ease:"none",scrollTrigger:{trigger:"#impact-hero-1",pin:!0,pinSpacing:!1,start:"top 76",end:"bottom 76",id:"quote-pin"}}),gsap.to("#impact-hero-2",{ease:"none",scrollTrigger:{trigger:"#impact-hero-2",pin:!0,pinSpacing:!1,start:"top 76",end:"bottom 76",id:"hero-pin"}}),gsap.to("#sway-img",{ease:"none",scrollTrigger:{trigger:"#sway-img",pin:!0,start:"top 75",end:"top 5",id:"obama-pin",scrub:!0}}),gsap.to("#impact-thesis",{ease:"none",scrollTrigger:{trigger:"#impact-thesis",pin:!0,pinSpacing:!1,start:"top 76",end:"bottom 76",id:"obama-pin"}}),gsap.to("#change-body",{scrollTrigger:{trigger:"#change-img",pin:!0,pinSpacing:!1,start:"top 76",end:"bottom 76",id:"change-pin"}});var paragraphYPercent=20,paragraphTimeline=gsap.timeline();paragraphTimeline.from("#moral-para-1",{alpha:0,yPercent:paragraphYPercent}),ScrollTrigger.create({trigger:"#moral-para-1",start:"top 90%",end:"bottom 70%",animation:paragraphTimeline,id:"paragraph",scrub:2});var galleryChecker=document.querySelector("#gallery-page");if(galleryChecker){const e=gsap.timeline({paused:!0});var galleryMain=$("#gallery-main"),galleryMainWidth=$("#gallery-main").width(),theseItems=galleryMain.find(".gallery-slider"),theseItemsWidth=theseItems.width(),scrollWidth=theseItemsWidth*theseItems.length,windowWidth=$(window).innerWidth(),toValue=-(scrollWidth-windowWidth+300);e.to("#gallery-container",{ease:"none",scrollTrigger:{trigger:"#gallery-container",pin:!0,pinSpacing:!0,end:"+="+galleryMainWidth,id:"gallery-pin"}},"gallerySwipe").to("#gallery-main",{x:toValue,scrollTrigger:{trigger:"#gallery-container",scrub:!0,start:"top top",end:"+="+galleryMainWidth,id:"gallery-swipe"}},"gallerySwipe")}galleryChecker&&(gsap.to("#gallery-quote-1",{ease:"none",scrollTrigger:{trigger:"#gallery-quote-1",pin:!0,pinSpacing:!1,start:"top top",end:"bottom top",id:"quote-1-pin"}}),ScrollTrigger.matchMedia({"(min-width: 800px)":function(){gsap.to("#gallery-content-2",{ease:"none",scrollTrigger:{trigger:"#gallery-content-2",pin:!0,pinSpacing:!0,start:"top top",end:"bottom top",id:"content-2-pin"}},"content2Scroll"),gsap.from("#content-2-quote",{yPercent:100,alpha:0,duration:.5,scrollTrigger:{trigger:"#gallery-content-2",start:"top top",scrub:1,toggleActions:"play none none none",id:"content-3-text"}},"content2Scroll")},"(max-width: 799px)":function(){gsap.from("#content-2-quote",{yPercent:100,alpha:0,duration:.5,scrollTrigger:{trigger:"#gallery-content-2",start:"top 50%",toggleActions:"play none none none",id:"content-3-text"}})}}),gsap.to("#gallery-quote-2",{ease:"none",scrollTrigger:{trigger:"#gallery-quote-2",pin:"#pin-pull-quote",start:"top top",end:"bottom top",markers:!0,id:"quote-2-pin"}}));