function homepageAnimation(){
    gsap.set(".slidesMarquee",{scale: 5})

var timeline = gsap.timeline({
    scrollTrigger:{
        trigger:".home",
        start:"top top",
        end:"bottom bottom",
        scrub: 2
    }
})

timeline.to(".front", {
    '--clip':"0%",
    ease:Power2,
}, 'a')

.to(".slidesMarquee", {
    scale: 1,
    ease:Power2,
}, 'a')

.to(".lft", {
    xPercent: -10,
    stagger: .03,
    ease:Power4,
}, 'b')

.to(".rgt", {
    xPercent: 10,
    stagger: .03,
    ease:Power4,
}, 'b')
}

function impactAnimation(){
    gsap.to(".slide",{
        scrollTrigger: {
            trigger: ".impact",
            start:"top top",
            end:"bottom bottom",
            scrub: 1
        },
        xPercent: -200,
        ease: Power4
    })
}

function paraAnimation(){
    var clutter = "";
document.querySelector(".textPara").textContent.split("").forEach(function(e){
    if(e === " ") clutter += `<span>&nbsp;</span>`
    clutter += `<span>${e}</span>`
})
document.querySelector(".textPara").innerHTML = clutter

gsap.set(".textPara span",{opacity: .1})
gsap.to(".textPara span",{
    scrollTrigger:{
        trigger:".para",
        start: "top 60%",
        end: "bottom 90%",
        scrub: 1,
    },
    opacity: 1,
    stagger: .03,
    ease: Power4
})
}

function locoMotive(){
    (function () {
        const locomotiveScroll = new LocomotiveScroll();
    })();
}

function capsulesAnimation(){
    gsap.to(".capsule:nth-child(2)", {
        scrollTrigger:{
            trigger:".capsules",
            start: "top 10%",
            end: "bottom bottom",
            scrub: 1,
        },
        y: 0,
        ease: Power4
})
}

function colorChange(){
    document.querySelectorAll(".section").forEach(function(e){
        ScrollTrigger.create({
            trigger: e,
            start:"top 50%",
            end: "bottom 50%",
            onEnter: function(){
                document.body.setAttribute("theme", e.dataset.color);
            },
            onEnterBack: function(){
                document.body.setAttribute("theme", e.dataset.color);
            }
        })
    })
}

homepageAnimation();
impactAnimation();
paraAnimation();
locoMotive();
capsulesAnimation();
colorChange();