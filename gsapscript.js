//import { gsap } from "gsap";

gsap.registerPlugin(ScrollTrigger);

window.addEventListener("DOMContentLoaded",()=>{

  
  for(let i=0;i<179;i++){
    gsap.to(
      ".cont" + i.toString(10)+" div.one",
      {
        y: -500,
        ease: CustomEase.create("custom", "M0,0 C0.352,0.072 0.428,0.18 0.51,0.514 0.594,0.858 0.704,0.99 1,1 "),
        scrollTrigger:{
          trigger:".cont"+i.toString(10),
          start:"center 80%",
          end:"center 20%",
          scrub:2,
        }
      }
      
    );

    var tl = gsap.timeline({
      scrollTrigger:{
        trigger:".cont"+i.toString(10),
        start:"center 70%",
        end:"center 30%",
        scrub:1,
      }
    });

    tl.fromTo(
      ".cont" + i.toString(10)+" div.one",
      {fontSize:10,x:0},
      {fontSize:10,x:0})
      .fromTo(
      ".cont" + i.toString(10)+" div.one",
      {fontSize:10,x:0},
      {fontSize:15,x:30})
      .fromTo(
        ".cont" + i.toString(10)+" div.one",
        {fontSize:15,x:30},
        {fontSize:10,x:0})
        .fromTo(
          ".cont" + i.toString(10)+" div.one",
          {fontSize:10,x:0},
          {fontSize:10,x:0});

    gsap.set(".cont"+i.toString(10),{fontSize:10});
  
  }
  return;
})
