gsap.registerPlugin(ScrollTrigger,TweenLite);var paragraphYPercent=20,paragraphTimeline=gsap.timeline();paragraphTimeline.from(".body-text",{alpha:0,yPercent:paragraphYPercent}),gsap.to("#emp-quote",{scrollTrigger:{trigger:"#emp-quote",pin:!0,pinSpacing:!1,start:"top 76",end:"bottom 76",id:"quote-pin"}}),gsap.to("#progress",{value:100,ease:"none",scrollTrigger:{scrub:.3}});var TweenLite=gsap.timeline(),Cont={val:0},NewVal=23;TweenLite.to(Cont,5,{val:NewVal,roundProps:"val",onUpdate:function(){document.getElementById("count-tween").innerHTML=Cont.val}}),ScrollTrigger.create({trigger:"#counter",start:"top 50%",end:"bottom 50%",animation:TweenLite,toggleActions:"play none none none",id:"counter"}),gsap.to("#impact-hero-1",{ease:"none",scrollTrigger:{trigger:"#impact-hero-1",pin:!0,pinSpacing:!1,start:"top 76",end:"bottom 76",id:"quote-pin"}}),gsap.to("#impact-hero-2",{ease:"none",scrollTrigger:{trigger:"#impact-hero-2",pin:!0,pinSpacing:!1,start:"top 76",end:"bottom 76",id:"hero-pin"}}),gsap.to("#sway-img",{ease:"none",scrollTrigger:{trigger:"#sway-img",pin:!0,start:"top 75",end:"top 5",id:"obama-pin",scrub:!0}}),gsap.to("#impact-thesis",{ease:"none",scrollTrigger:{trigger:"#impact-thesis",pin:!0,pinSpacing:!1,start:"top 76",end:"bottom 76",markers:!0}}),gsap.to("#change-body",{scrollTrigger:{trigger:"#change-img",pin:!0,pinSpacing:!1,start:"top 76",end:"bottom 76",id:"change-pin"}}),ScrollTrigger.create({trigger:"#moral-para-1",start:"top 90%",end:"bottom 70%",animation:paragraphTimeline,markers:!0,id:"paragraph",scrub:2});