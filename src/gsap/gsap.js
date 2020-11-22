import gsap from 'gsap'
import {ScrollTrigger} from 'gsap/all'


gsap.registerPlugin(ScrollTrigger)

export const skew = elem => {

    
    let proxy = { skew: 0 },
    skewSetter = gsap.quickSetter(elem, "skewY", "deg"), // fast
    clamp = gsap.utils.clamp(-20, 20); // don't let the skew go beyond 20 degrees. 

ScrollTrigger.create({
  onUpdate: (self) => {

    document.addEventListener('resize', ()=>{
        ScrollTrigger.refresh()
    })
    let skew = clamp(self.getVelocity() / -300);
    // only do something if the skew is MORE severe. Remember, we're always tweening back to 0, so if the user slows their scrolling quickly, it's more natural to just let the tween handle that smoothly rather than jumping to the smaller skew.
    if (Math.abs(skew) > Math.abs(proxy.skew)) {
      proxy.skew = skew;
      gsap.to(proxy, {skew: 0, duration: 0.8, ease: "power3", overwrite: true, onUpdate: () => skewSetter(proxy.skew)});
    }
  }
});

// make the right edge "stick" to the scroll bar. force3D: true improves performance
gsap.set(elem, {transformOrigin: "right center", force3D: true});

}

export const Timelines = ()=>{
    let tl = gsap.timeline()
    tl.from('.head-text', {x:200, opacity:0, ease:"ease.in",  duration:2})
    .from('.paragh', {y:200, opacity:0, duration:2}, "-=1")
    .from('.button', {x: 300, y:200, duration:2,opacity:0,}, "+2")
    
}

export const Horizontal = ()=> {

  document.addEventListener('resize', ()=>{
    ScrollTrigger.refresh()
})

let sections = gsap.utils.toArray('.item')
      const scroller = document.getElementById('projects')

      if (scroller !== null) {
        gsap.to(sections, {
          xPercent: -100 * (sections.length - 1),
          ease: 'none',
          scrollTrigger: {
            trigger: '.work',
            pin: true,
            scrub: 1,
            snap: 1 / (sections.length - 1),
            // base vertical scrolling on how wide the container is so it feels more natural.
            end: () => '+=' + scroller.offsetWidth
          }
        })
      }
    }
    



