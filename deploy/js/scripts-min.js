$('[data-fancybox="gallery"]').fancybox({touch:{vertical:!0},buttons:[]}),gsap.registerPlugin(ScrollTrigger,TweenLite);var paragraphYPercent=20,paragraphTimeline=gsap.timeline();paragraphTimeline.from(".body-text",{alpha:0,yPercent:paragraphYPercent}),gsap.to("#emp-quote",{scrollTrigger:{trigger:"#emp-quote",pin:!0,pinSpacing:!1,start:"top 76",end:"bottom 76",id:"quote-pin"}}),gsap.to("#progress",{value:100,ease:"none",scrollTrigger:{scrub:.3}});var canYouSeeTheMenu=!1,headerHeight=$("header").outerHeight();gsap.set("header",{y:-headerHeight});var headerTimeline=gsap.timeline();headerTimeline.to("header",{duration:.4,y:0}),$((function(){var e=200;$(window).scroll((function(){if(!1===canYouSeeTheMenu){var t=$(this).scrollTop();jQuery(window).scrollTop()>=200&&t>=e?headerTimeline.reverse():headerTimeline.play(),e=t}}))}));var TweenLite=gsap.timeline(),Cont={val:0},NewVal=23;TweenLite.to(Cont,5,{val:NewVal,roundProps:"val",onUpdate:function(){document.getElementById("count-tween").innerHTML=Cont.val}}),ScrollTrigger.create({trigger:"#counter",start:"top 50%",end:"bottom 50%",animation:TweenLite,toggleActions:"play none none none",id:"counter"}),gsap.to("#impact-hero-1",{ease:"none",scrollTrigger:{trigger:"#impact-hero-1",pin:!0,pinSpacing:!1,start:"top 76",end:"bottom 76",id:"quote-pin"}}),gsap.to("#impact-hero-2",{ease:"none",scrollTrigger:{trigger:"#impact-hero-2",pin:!0,pinSpacing:!1,start:"top 76",end:"bottom 76",id:"hero-pin"}}),gsap.to("#sway-img",{ease:"none",scrollTrigger:{trigger:"#sway-img",pin:!0,start:"top 75",end:"top 5",id:"obama-pin",scrub:!0}}),gsap.to("#impact-thesis",{ease:"none",scrollTrigger:{trigger:"#impact-thesis",pin:!0,pinSpacing:!1,start:"top 76",end:"bottom 76",markers:!0}}),gsap.to("#change-body",{scrollTrigger:{trigger:"#change-img",pin:!0,pinSpacing:!1,start:"top 76",end:"bottom 76",id:"change-pin"}}),ScrollTrigger.create({trigger:"#moral-para-1",start:"top 90%",end:"bottom 70%",animation:paragraphTimeline,markers:!0,id:"paragraph",scrub:2}),gsap.to("#gallery-quote-1",{ease:"none",scrollTrigger:{trigger:"#gallery-quote-1",pin:!0,pinSpacing:!1,start:"top top",end:"bottom top",id:"quote-1-pin"}}),gsap.to("#gallery-container",{ease:"none",scrollTrigger:{trigger:"#gallery-container",pin:!0,pinSpacing:!0,start:"top top",end:"bottom top",id:"gallery-pin"}}),gsap.to("#gallery-content-2",{ease:"none",scrollTrigger:{trigger:"#gallery-content-2",pin:!0,pinSpacing:!0,start:"top top",end:"bottom top",id:"content-2-pin"}},"content2Scroll"),gsap.from("#content-2-quote",{yPercent:100,alpha:0,scrollTrigger:{trigger:"#gallery-content-2",scrub:1,toggleActions:"restart reverse restart reverse",id:"content-3-text"}},"content2Scroll"),gsap.to("#gallery-quote-2",{ease:"none",scrollTrigger:{trigger:"#gallery-quote-2",pin:!0,pinSpacing:!1,start:"top top",end:"bottom top",markers:!0,id:"quote-2-pin"}});