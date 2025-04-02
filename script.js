if (window.innerWidth > 768) { // Adjust breakpoint as needed
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }
  
  


function firstPageAnimation(){
    var tl = gsap.timeline()
    tl.from("#nav", {
        y: -100,
        opacity: 0,
        ease: Expo
    })
        .to(".boundingelm", {
            y: 0,
            duration: 2,
            delay:-1,
            ease: Expo.easeInOut,
            stagger: .2
        })
        .to("#left",{

            opacity: 1,
            delay: -1,
            ease: Expo.easeInOut,
            
        })
        .to("#right p",{

            opacity: 1,
            delay: -1,
            ease: Expo.easeInOut,
            
        })
     
 
}
firstPageAnimation()

gsap.from("#images", {
    y: -1000,
    duration: 0.8,
    ease: "power2.out"

});
gsap.to(".moveImg", {
    y:600,
    x:400,
    scrollTrigger: {
        trigger: ".right",
        start: "top center",
        end: "bottom bottom",
        scrub: 1,
      
        ease: "power1.out",

    }
});
function circleMouseFollower(){
    window.addEventListener('mousemove', function(dets){
        console.log(dets)
        document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px)`
    })
}

circleMouseFollower()





  
  