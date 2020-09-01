gsap.to("#progress",{value:100,ease:"none",scrollTrigger:{scrub:.3,markers:!0}}),$('[data-fancybox="gallery"]').fancybox({touch:{vertical:!0},buttons:[]});var indexSlider=document.getElementsByClassName("index-slider");indexSlider.length>0&&tns({container:".index-slider",items:1,gutter:15,edgePadding:50,nav:!1,controlsPosition:"bottom",navPosition:"bottom",mouseDrag:!0,responsive:{350:{items:1},768:{items:3,gutter:50},1040:{items:3,gutter:50}}}),gsap.registerPlugin(ScrollTrigger,TweenLite);var empBodyChecker=document.querySelector("#emp-quote");empBodyChecker&&gsap.to("#emp-quote",{scrollTrigger:{trigger:"#emp-quote",pin:!0,pinSpacing:!1,start:"top 76",end:"bottom 76",id:"quote-pin"}});var headerHeight=$("header").outerHeight();gsap.set("header",{y:-headerHeight});var headerTimeline=gsap.timeline();headerTimeline.to("header",{duration:.4,y:0}),$((function(){var e=200;$(window).scroll((function(){if(!1===canYouSeeTheMenu){var t=$(this).scrollTop();jQuery(window).scrollTop()>=200&&t>=e?headerTimeline.reverse():headerTimeline.play(),e=t}}))}));var canYouSeeTheMenu=!1,navHeight=$("#main-nav").outerHeight();gsap.set("#main-nav",{y:-navHeight});var mainNavTimeline=gsap.timeline({paused:!0});function hideShowMainNav(){!1===canYouSeeTheMenu?(mainNavTimeline.play(),canYouSeeTheMenu=!0):(mainNavTimeline.reverse(),canYouSeeTheMenu=!1)}mainNavTimeline.to("#main-nav",{duration:.5,y:0});var menuBackground=document.querySelector("#main-nav");function reportWindowSize(){console.log("test"),!1===canYouSeeTheMenu&&(console.log("can't see the main nav"),console.log($("#main-nav").outerHeight()),navHeight=$("#main-nav").outerHeight(),gsap.set("#main-nav",{y:-navHeight}))}window.onclick=function(e){e.target==menuBackground&&hideShowMainNav()},window.addEventListener("resize",reportWindowSize),$("#main-nav li").on("click",hideShowMainNav),$("#burger").on("click",hideShowMainNav);var employmentChecker=document.querySelector("#employment-page");if(employmentChecker){var TweenLite=gsap.timeline(),Cont={val:0},NewVal=23;TweenLite.to(Cont,5,{val:NewVal,roundProps:"val",onUpdate:function(){document.getElementById("count-tween").innerHTML=Cont.val}}),ScrollTrigger.create({trigger:"#counter",start:"top 50%",end:"bottom 50%",animation:TweenLite,toggleActions:"play none none none",id:"counter"})}if(employmentChecker&&gsap.to("#emp-quote",{ease:"none",scrollTrigger:{trigger:"#emp-quote",pin:!0,pinSpacing:!1,start:"top top",end:"bottom 1",id:"emp-quote-pin"}}),employmentChecker){var pullQuoteTimeline=gsap.timeline();pullQuoteTimeline.from("#emp-quote-text",{alpha:0,xPercent:5}),ScrollTrigger.create({trigger:"#emp-quote-text",start:"top 60%",end:"bottom 70%",animation:pullQuoteTimeline,toggleActions:"play play none none",scrub:!0,id:"pull-quote"})}employmentChecker&&$(window).width()>=1024&&gsap.to("#emp-map",{ease:"none",scrollTrigger:{trigger:"#emp-map",pin:!0,pinSpacing:!1,start:"top top",end:"bottom 1",id:"emp-map-pin"}});var empParagraphYPercent=10;if(employmentChecker){var empParagraphTimeline=gsap.timeline();empParagraphTimeline.from("#emp-p1",{alpha:0,yPercent:empParagraphYPercent}),ScrollTrigger.create({trigger:"#emp-p1",start:"top 50%",end:"bottom 50%",animation:empParagraphTimeline,toggleActions:"play play none none",id:"paragraph"})}if(employmentChecker){var empParagraph2Timeline=gsap.timeline();empParagraph2Timeline.from("#emp-p2",{alpha:0,yPercent:empParagraphYPercent}),ScrollTrigger.create({trigger:"#emp-p2",start:"top 80%",end:"bottom 50%",animation:empParagraph2Timeline,toggleActions:"play play none none",id:"paragraph2"})}if(employmentChecker){var empParagraph3Timeline=gsap.timeline();empParagraph3Timeline.from("#emp-p3",{alpha:0,yPercent:empParagraphYPercent}),ScrollTrigger.create({trigger:"#emp-p3",start:"top 80%",end:"bottom 50%",animation:empParagraph3Timeline,toggleActions:"play play none none",id:"paragraph3"})}if(employmentChecker){var empParagraph4Timeline=gsap.timeline();empParagraph4Timeline.from("#emp-end-p",{alpha:0,yPercent:empParagraphYPercent}),ScrollTrigger.create({trigger:"#emp-end-p",start:"top 80%",end:"bottom 50%",animation:empParagraph4Timeline,toggleActions:"play play none none",id:"paragraph4"})}if(employmentChecker){var empCardsTimeline=gsap.timeline();gsap.set(".emp-card",{alpha:0,yPercent:100}),empCardsTimeline.to(".emp-card",{duration:.5,alpha:1,yPercent:0,stagger:.25}),ScrollTrigger.create({animation:empCardsTimeline,toggleActions:"play none none none",trigger:"#emp-cards",start:"top 50%",end:"bottom 50%",id:"emp-cards"})}if(employmentChecker){var empHeaderTimeline=gsap.timeline();empHeaderTimeline.from("#emp-header",{alpha:0}),ScrollTrigger.create({trigger:"#emp-header",start:"top 80%",end:"bottom 50%",animation:empHeaderTimeline,toggleActions:"play play none none",id:"emp-header"})}if(employmentChecker){var empHeader2Timeline=gsap.timeline();empHeader2Timeline.from("#designers-wanted",{alpha:0}),ScrollTrigger.create({trigger:"#designers-wanted",start:"top 60%",end:"bottom 50%",animation:empHeader2Timeline,toggleActions:"play play none none",id:"emp-header2"})}var experimentChecker=document.querySelector("#experimentation");if(experimentChecker){const e=gsap.timeline();e.from(".headerSlide",{duration:1,yPercent:.5}),ScrollTrigger.create({animation:e,toggleActions:"restart none none none",trigger:"#hero-experiment",start:"top top",scrub:1})}if(experimentChecker){const e=gsap.timeline();e.from(".subHeaderSlide",{duration:.25,xPercent:-10}),ScrollTrigger.create({animation:e,toggleActions:"restart none none none",trigger:"#hero-image-experiment",start:"top 10%",scrub:1})}if(experimentChecker){const e=gsap.timeline();e.from(".para1",{duration:1,yPercent:10}),ScrollTrigger.create({animation:e,toggleActions:"restart none none none",trigger:"#pullquote-section-1",pin:!0,pinSpacing:!0,start:"top top"})}if(experimentChecker){const e=gsap.timeline();e.from(".para2",{duration:1,yPercent:10}),ScrollTrigger.create({animation:e,toggleActions:"restart none none none",trigger:"#image-section-4",start:"top top"})}if(experimentChecker){const e=gsap.timeline();e.from(".pq1",{duration:.25,xPercent:-10}),ScrollTrigger.create({animation:e,toggleActions:"restart none none none",trigger:"#section-2-experiment",start:"top 60%"})}if(experimentChecker){const e=gsap.timeline();e.from(".pq2",{duration:.25,xPercent:-10}),ScrollTrigger.create({animation:e,toggleActions:"restart none none none",trigger:"#section-4-experiment",start:"top 10%"})}if(experimentChecker&&gsap.to("#para-section-3",{ease:"none",scrollTrigger:{trigger:"#para-section-3",pin:!0,pinSpacing:!0,start:"top top",end:"bottom top",id:"para-3-experiment"}}),experimentChecker){const e=gsap.timeline();e.from(".g-photos",{duration:2,yPercent:100,stagger:.5}),ScrollTrigger.create({animation:e,toggleActions:"restart none none none",trigger:"#section-5-experiment",pin:!0,pinSpacing:!0,start:"top top",end:"bottom top"})}var impactChecker=document.querySelector("#impact"),paragraphYPercent=10;if(impactChecker){var paragraphTimeline=gsap.timeline();paragraphTimeline.from("#moral-para-1",{alpha:0,yPercent:paragraphYPercent}),ScrollTrigger.create({trigger:"#moral-para-1",start:"top 50%",end:"bottom 50%",animation:paragraphTimeline,toggleActions:"play play none none",id:"paragraph"})}if(impactChecker){var paragraph2Timeline=gsap.timeline();paragraph2Timeline.from("#moral-para-2",{alpha:0,yPercent:paragraphYPercent}),ScrollTrigger.create({trigger:"#moral-para-2",start:"top 50%",end:"bottom 50%",animation:paragraph2Timeline,toggleActions:"play play none none",id:"paragraph"})}if(impactChecker){var calloutTimeline=gsap.timeline();calloutTimeline.from("#moral-callout",{alpha:0,xPercent:20}),ScrollTrigger.create({trigger:"#moral-callout",start:"top 50%",end:"bottom 50%",animation:calloutTimeline,toggleActions:"play play none none",id:"callout"})}if(impactChecker){var paragraph3Timeline=gsap.timeline();paragraph3Timeline.from("#change-body-1",{alpha:0,yPercent:paragraphYPercent}),ScrollTrigger.create({trigger:"#change-body-1",start:"top 50%",end:"bottom 50%",animation:paragraph3Timeline,toggleActions:"play play none none",id:"paragraph"})}if(impactChecker){var paragraph4Timeline=gsap.timeline();paragraph4Timeline.from("#change-body-2",{alpha:0,yPercent:paragraphYPercent}),ScrollTrigger.create({trigger:"#change-body-2",start:"top 50%",end:"bottom 50%",animation:paragraph4Timeline,toggleActions:"play play none none",id:"paragraph"})}if(impactChecker){var paragraph5Timeline=gsap.timeline();paragraph5Timeline.from("#sway-body",{alpha:0,yPercent:paragraphYPercent}),ScrollTrigger.create({trigger:"#sway-body",start:"top 50%",end:"bottom 50%",animation:paragraph5Timeline,toggleActions:"play play none none",id:"paragraph"})}if(impactChecker&&gsap.to("#impact-hero-1",{ease:"none",scrollTrigger:{trigger:"#impact-hero-1",pin:!0,pinSpacing:!1,start:"top top",end:"bottom top",id:"quote-pin"}}),impactChecker&&gsap.to("#impact-hero-2",{ease:"none",scrollTrigger:{trigger:"#impact-hero-2",pin:!0,pinSpacing:!1,start:"top top",end:"bottom top",id:"hero-pin"}}),impactChecker&&gsap.to("#sway-img",{ease:"none",scrollTrigger:{trigger:"#sway-img",pin:!0,start:"top top",end:"bottom 10",id:"obama-pin"}}),impactChecker&&gsap.to("#impact-thesis",{ease:"none",scrollTrigger:{trigger:"#impact-thesis",pin:!0,pinSpacing:!1,start:"top top",end:"bottom top",id:"obama-pin"}}),impactChecker&&gsap.to("#change-img",{scrollTrigger:{trigger:"#change-img",pin:!0,pinSpacing:!1,start:"top top",end:"bottom top",id:"change-pin"}}),impactChecker){var impactHeaderTimeline=gsap.timeline();impactHeaderTimeline.from("#moral-title",{alpha:0}),ScrollTrigger.create({trigger:"#moral-title",start:"top 80%",end:"bottom 50%",animation:impactHeaderTimeline,toggleActions:"play play none none",id:"impact-header"})}if(impactChecker){var impact2HeaderTimeline=gsap.timeline();impact2HeaderTimeline.from("#change-title",{alpha:0}),ScrollTrigger.create({trigger:"#change-title",start:"top 80%",end:"bottom 50%",animation:impact2HeaderTimeline,toggleActions:"play play none none",id:"impact-header"})}if(impactChecker){var impact3HeaderTimeline=gsap.timeline();impact3HeaderTimeline.from("#sway-title",{alpha:0}),ScrollTrigger.create({trigger:"#sway-title",start:"top 80%",end:"bottom 50%",animation:impact3HeaderTimeline,toggleActions:"play play none none",id:"impact-header"})}if(impactChecker){var impactTitleTimeline=gsap.timeline();impactTitleTimeline.from("#impact-title",{duration:1,alpha:0,yPercent:-20})}if(impactChecker){var impact2TitleTimeline=gsap.timeline();impact2TitleTimeline.from("#impact-sup",{duration:1,alpha:0,xPercent:-20})}if(impactChecker){var impactQuotesTimeline=gsap.timeline();impactQuotesTimeline.from("#impact-thesis-p",{alpha:0,xPercent:-10,duartion:1}),ScrollTrigger.create({trigger:"#impact-thesis-p",start:"top 50%",end:"bottom 50%",animation:impactQuotesTimeline,toggleActions:"play play none none",id:"impact-thesis"})}if(impactChecker){var impact2QuotesTimeline=gsap.timeline();impact2QuotesTimeline.from("#hero-1-quote",{alpha:0,xPercent:10,duartion:1}),ScrollTrigger.create({trigger:"#hero-1-quote",start:"top 50%",end:"bottom 50%",animation:impact2QuotesTimeline,toggleActions:"play play none none",id:"impact-thesis"})}if(impactChecker){var impact3QuotesTimeline=gsap.timeline();impact3QuotesTimeline.from("#hero-1-name",{alpha:0,xPercent:10,duartion:1}),ScrollTrigger.create({trigger:"#hero-1-name",start:"top 50%",end:"bottom 50%",animation:impact3QuotesTimeline,toggleActions:"play play none none",id:"impact-thesis"})}gsap.to("#gallery-container",{ease:"none",scrollTrigger:{trigger:"#gallery-container",pin:!0,pinSpacing:!0,end:"bottom top",id:"gallery-pin"}}),gsap.to("#gallery-quote-1",{ease:"none",scrollTrigger:{trigger:"#gallery-quote-1",pin:!0,pinSpacing:!1,start:"top top",end:"bottom top",id:"quote-1-pin"}}),gsap.to("#gallery-content-2",{ease:"none",scrollTrigger:{trigger:"#gallery-content-2",pin:!0,pinSpacing:!0,start:"top top",end:"bottom top",id:"content-2-pin"}},"content2Scroll"),gsap.from("#content-2-quote",{yPercent:100,alpha:0,scrollTrigger:{trigger:"#gallery-content-2",scrub:1,toggleActions:"restart reverse restart reverse",id:"content-3-text"}},"content2Scroll"),gsap.to("#gallery-quote-2",{ease:"none",scrollTrigger:{trigger:"#gallery-quote-2",pin:!0,pinSpacing:!1,id:"quote-2-pin"}});