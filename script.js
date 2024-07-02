function loco(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});


// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
loco()

gsap.to("#loader",{
    top:"-100%",
    delay:3.5,
    ease: "power3.out",
    duration:1.5
})
Shery.makeMagnet(".magnet-target");

function page1(){
    var tl = gsap.timeline({
        scrollTrigger:{
            trigger:"#page1",
            scroller:"#main",
            start:"top top",
            end:"top -500%",
            scrub:1,
            pin:true
        }
    })
    
    tl
    .to("#image-container",{
        rotate:-12,
        scale:1.5,
        duration:1.5
    },"a")
    .to(".even",{
        duration:1.5,
        marginTop:"-5vw",
    },"a")
    .to(".odd",{
        duration:1.5,
        marginTop:"4vw",
    },"a")
    .to(".up",{
        duration:1.5,
        marginTop:"-15vw",
    },"a")
    .to("#overlay h1",{
        opacity:1,
        duration:.5,
        delay:0.4
    },"a")
    .to("#page1 #overlay",{
        backgroundColor:"rgba(0, 0, 0, 0.888)",
        duration:2.5,
    },"a")
    
    .to("#overlay-2",{
        top:0,
        duration:1.5,
        delay:1
    },"a")
    .to("#round",{
        height:0,
        duration:1.2,
        delay:1
    },"a")
    .to("#overlay-2 .over",{
        width:0,
        stagger:0.1,
        delay:1.7
    },"a")
    
}
page1()


function page2(){

    var tl2 = gsap.timeline({
        scrollTrigger:{
            trigger:"#page2",
            scroller:"#main",
            start:"top -30%",
            end:"top -400%",
            scrub:true,
            pin:true
        }
    })
    tl2
    .to("#wraper",{
        top:"-250%",
        duration:2
    },"a")
    .to("#arrow img",{
        rotate:720,
        duration:1.5
    },"a")
    .to("#arrow",{
        x:"610%",
        duration:0.5
    },"b")
    .from( "#left h4",{
        y:30,
        opacity:0
    },"b")
    
    
}
page2()

gsap.to(".over2",{
    width:0,
    stagger:0.2,
    duration:2.5,
    scrollTrigger:{
        trigger:"#page3",
        scroller:"#main",
        start:"top 40%",
        end:"top -40%",
        scrub:1,
    }
})

gsap.to("#round2",{
    height:0,
    duration:1.5,
    scrollTrigger:{
        trigger:"#round2",
        scroller:"#main",
        start:"top 50%",
        end:"top 0%",
        scrub:true,
    }
})

gsap.to(".over3",{
    width:0,
    stagger:0.2,
    duration:2.5,
    scrollTrigger:{
        trigger:"#page4",
        scroller:"#main",
        start:"top 50%",
        end:"top -50%",
        scrub:1,
    }
})


function page5(){
var tl3 = gsap.timeline({
    scrollTrigger:{
        trigger:"#page5",
        scroller:"#main",
        start:"top 0%",
        end:"top -500%",
        scrub:true,
        pin:true
    }
})

tl3
.to(".cover1",{
    top:"-50%",
    delay:.5,
    duration:1,
    duration:1,
},"a")
.to(".cover2",{
    bottom:"-50%",
    delay:.5,
    duration:1,
    duration:1,
},"a")
.to("#center-txt #span1",{
    x:-300,
    y:-230,
    duration:1,
    delay:.5
},"a")
.to("#center-txt #span2",{
    x:350,
    y:210,
    duration:1,
    delay:.5
},"a")
.to("#img-container img",{
    transform: "translateY(-700%)",
    duration:3
})
}
page5()