$('[data-fancybox="gallery"]').fancybox({touch:{vertical:!0},buttons:[]}),gsap.registerPlugin(ScrollTrigger,TweenLite),gsap.to("#progress",{value:100,ease:"none",scrollTrigger:{scrub:.3}});var headerHeight=$("header").outerHeight();gsap.set("header",{y:-headerHeight});var headerTimeline=gsap.timeline();headerTimeline.to("header",{duration:.4,y:0}),$((function(){var e=200;$(window).scroll((function(){if(!1===canYouSeeTheMenu){var a=$(this).scrollTop();jQuery(window).scrollTop()>=200&&a>=e?headerTimeline.reverse():headerTimeline.play(),e=a}}))}));var TweenLite=gsap.timeline(),Cont={val:0},NewVal=23;TweenLite.to(Cont,5,{val:NewVal,roundProps:"val",onUpdate:function(){document.getElementById("count-tween").innerHTML=Cont.val}}),ScrollTrigger.create({trigger:"#counter",start:"top 50%",end:"bottom 50%",animation:TweenLite,toggleActions:"play none none none",id:"counter"}),gsap.to("#emp-quote",{ease:"none",scrollTrigger:{trigger:"#emp-quote",pin:!0,pinSpacing:!1,start:"top top",end:"bottom 1",id:"emp-quote-pin"}});var pullQuoteTimeline=gsap.timeline();pullQuoteTimeline.from("#emp-quote-text",{alpha:0,xPercent:5}),ScrollTrigger.create({trigger:"#emp-quote-text",start:"top 80%",end:"bottom 70%",animation:pullQuoteTimeline,toggleActions:"play pause play stop",scrub:!0,id:"pull-quote"}),gsap.to("#emp-map",{ease:"none",scrollTrigger:{trigger:"#emp-map",pin:!0,pinSpacing:!1,start:"top top",end:"bottom 1",id:"emp-map-pin"}});var empParagraphYPercent=10,empParagraphTimeline=gsap.timeline();empParagraphTimeline.from("#emp-p1",{alpha:0,yPercent:empParagraphYPercent}),ScrollTrigger.create({trigger:"#emp-p1",start:"top 50%",end:"bottom 50%",animation:empParagraphTimeline,toggleActions:"play play none none",id:"paragraph"});var empParagraph2YPercent=10,empParagraph2Timeline=gsap.timeline();empParagraph2Timeline.from("#emp-p2",{alpha:0,yPercent:empParagraph2YPercent}),ScrollTrigger.create({trigger:"#emp-p2",start:"top 50%",end:"bottom 50%",animation:empParagraph2Timeline,toggleActions:"play play none none",markers:!0,id:"paragraph"});var empCardsTimeline=gsap.timeline();gsap.set(".emp-card",{alpha:0,yPercent:100}),empCardsTimeline.to(".emp-card",{duration:.5,alpha:1,yPercent:0,stagger:.25}),ScrollTrigger.create({animation:empCardsTimeline,toggleActions:"play none none none",trigger:"#emp-cards",start:"top 50%",end:"bottom 50%",id:"emp-cards"});var empHeaderTimeline=gsap.timeline();empHeaderTimeline.from("#emp-header",{alpha:0}),ScrollTrigger.create({trigger:"#emp-header",start:"top 80%",end:"bottom 50%",animation:empHeaderTimeline,toggleActions:"play play none none",id:"emp-header"}),gsap.to("#impact-hero-1",{ease:"none",scrollTrigger:{trigger:"#impact-hero-1",pin:!0,pinSpacing:!1,start:"top 76",end:"bottom 76",id:"quote-pin"}}),gsap.to("#impact-hero-2",{ease:"none",scrollTrigger:{trigger:"#impact-hero-2",pin:!0,pinSpacing:!1,start:"top 76",end:"bottom 76",id:"hero-pin"}}),gsap.to("#sway-img",{ease:"none",scrollTrigger:{trigger:"#sway-img",pin:!0,start:"top 75",end:"top 5",id:"obama-pin",scrub:!0}}),gsap.to("#impact-thesis",{ease:"none",scrollTrigger:{trigger:"#impact-thesis",pin:!0,pinSpacing:!1,start:"top 76",end:"bottom 76",id:"obama-pin"}}),gsap.to("#change-body",{scrollTrigger:{trigger:"#change-img",pin:!0,pinSpacing:!1,start:"top 76",end:"bottom 76",id:"change-pin"}});var paragraphYPercent=20,paragraphTimeline=gsap.timeline();paragraphTimeline.from("#moral-para-1",{alpha:0,yPercent:paragraphYPercent}),ScrollTrigger.create({trigger:"#moral-para-1",start:"top 90%",end:"bottom 70%",animation:paragraphTimeline,id:"paragraph",scrub:2}),gsap.to("#gallery-quote-1",{ease:"none",scrollTrigger:{trigger:"#gallery-quote-1",pin:!0,pinSpacing:!1,start:"top top",end:"bottom top",id:"quote-1-pin"}}),gsap.to("#gallery-container",{ease:"none",scrollTrigger:{trigger:"#gallery-container",pin:!0,pinSpacing:!0,start:"top top",end:"bottom top",id:"gallery-pin"}}),gsap.to("#gallery-content-2",{ease:"none",scrollTrigger:{trigger:"#gallery-content-2",pin:!0,pinSpacing:!0,start:"top top",end:"bottom top",id:"content-2-pin"}},"content2Scroll"),gsap.from("#content-2-quote",{yPercent:100,alpha:0,scrollTrigger:{trigger:"#gallery-content-2",scrub:1,toggleActions:"restart reverse restart reverse",id:"content-3-text"}},"content2Scroll"),gsap.to("#gallery-quote-2",{ease:"none",scrollTrigger:{trigger:"#gallery-quote-2",pin:!0,pinSpacing:!1,start:"top top",end:"bottom top",id:"quote-2-pin"}});var canYouSeeTheMenu=!1,navHeight=$("#main-nav").outerHeight();gsap.set("#main-nav",{y:-navHeight});var mainNavTimeline=gsap.timeline({paused:!0});function hideShowMainNav(){!1===canYouSeeTheMenu?(mainNavTimeline.play(),canYouSeeTheMenu=!0):(mainNavTimeline.reverse(),canYouSeeTheMenu=!1)}mainNavTimeline.to("#main-nav",{duration:.5,y:0});var menuBackground=document.querySelector("#main-nav");function reportWindowSize(){console.log("test"),!1===canYouSeeTheMenu&&(console.log("can't see the main nav"),console.log($("#main-nav").outerHeight()),navHeight=$("#main-nav").outerHeight(),gsap.set("#main-nav",{y:-navHeight}))}window.onclick=function(e){e.target==menuBackground&&hideShowMainNav()},window.addEventListener("resize",reportWindowSize),$("#main-nav li").on("click",hideShowMainNav),$("#burger").on("click",hideShowMainNav);