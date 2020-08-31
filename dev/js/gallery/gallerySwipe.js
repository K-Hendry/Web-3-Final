// var Scrollbar = window.Scrollbar;


// let scrollPositionX = 0,
//     scrollPositionY = 0
//     bodyScrollBar = Scrollbar.init(document.querySelector('#gallery-container'), { damping: 0.1, delegateTo: document });
  
//     bodyScrollBar.addListener(({ offset }) => {  
//       scrollPositionX = offset.x;
//       scrollPositionY = offset.y;
//     });
     
//     bodyScrollBar.setPosition(0, 0);
//     bodyScrollBar.track.xAxis.element.remove();
    
//     ScrollTrigger.scrollerProxy("#gallery-container", {
//       scrollTop(value) {
//         if (arguments.length) {
//           bodyScrollBar.scrollTop = value;
//         }
//         return bodyScrollBar.scrollTop;
//       }
//     });
    
//     bodyScrollBar.addListener(ScrollTrigger.update);
    

// $('#gallery-container').each(function () {	
  
//     var thisSection = $(this);
//     //var thisSectionWidth = thisSection.width();
//     //var thisSectionHeight = thisSection.height();  
  
//     // var thisPinWrap = thisSection.find('#gallery-container');
//     // var thisPinWrapWidth = thisPinWrap.width();	
//     // var thisPinWrapHeight = thisPinWrap.height();
  
//     var thisAnimWrap = thisSection.find('#gallery-main');
//     var thisAnimWrapWidth = thisAnimWrap.width();	
//     //var thisAnimWrapHeight = thisAnimWrap.height();
  
  
//     var theseItems = thisAnimWrap.find('.gallery-slider');
//     var theseItemsWidth = theseItems.width();
  
//     var scrollWidth = theseItemsWidth * theseItems.length;
  
//     var windowWidth = $(window).innerWidth();
  
  
//     if (thisAnimWrap.hasClass('.gallery-slider')) {
//       var fromValue = 0;
//       var toValue = -(scrollWidth - windowWidth + 1600); 
//       // 1600 Total Padding left & right of all items
  
//     }

// var horizontalSectionTween = gsap.fromTo(thisAnimWrap, { x: fromValue }, { x: toValue, ease: "none" });

//   ScrollTrigger.create({
//     id: "horizontalSectionScrolling",				
//     trigger: thisSection[0],					
//     start: "top top",
//     end: "+="+thisAnimWrapWidth,
//     animation: horizontalSectionTween,
//     pin: "#gallery-container",
//     scrub: true,  
//     onUpdate: self => {			
//       if(self.isActive) {
//         thisAnimWrap.css({"top": scrollPositionY + "px"});
//       }
//     },
//     onLeave: ({progress, direction, isActive}) => {
//       thisAnimWrap.css({ "top": "" });	  
//     },
//     onLeaveBack: ({progress, direction, isActive}) => {
//       thisAnimWrap.css({"top": ""});						
//     }
//   }); 	
// });	

//pinning gallery
gsap.to("#gallery-container", {
    ease: "none",
    scrollTrigger: {
        trigger: "#gallery-container",
        pin: true,
        pinSpacing: true,
        // start: "top top",
        end: "bottom top",
        markers: true,
        id: "gallery-pin"
    }
})

//horizontal scrolling
$target = $("#gallery-main").first(),
    currentPosition = parseInt($target.css("transform").split(",")[4]),
    moveBy = function (scrolledBy) {
        currentPosition += scrolledBy;
        $target.css("transform", "translateX(" + (currentPosition) + "px)")
    },
    lastScrollTop = 0;

    currentPosition = isNaN(currentPosition) ? 0 : currentPosition;
    $(window).bind("scroll", function (e) {
        var scrolledBy = $(window).scrollTop() - lastScrollTop;
        moveBy(-scrolledBy);
        lastScrollTop = $(window).scrollTop();
    });

