gsap.from("#svgs h3",{duration: 1, delay: 4,scale: 1.9,y: 50,opacity: 0,ease:'expo.inout'

})

gsap.from('.parts',{stagger: .2,duration:1,x: 30,opacity: 0,ease:'expo.inout'})

gsap.to('#svgs',{duration:1,delay:6,opacity:0,y:-150,ease:'expo.inout'})
gsap.to('.parts',{stagger:0.2,duration:1,delay:7,opacity:0,y:'-100%',opacity:0,ease:'expo.inout'})