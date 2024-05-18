var rect = document.querySelector("#center")
// addeventelisten isliya hai ki mouse aaya hai rectangle par
rect.addEventListener("mousemove", function(details){
   var rectanglelocation = rect.getBoundingClientRect()
//    mouse ki location ko - kr do rectangale ki phle location se 
   var  insiderectval = details.clientX - rectanglelocation.left;

   if(insiderectval < rectanglelocation.width/2){
    // console.log("left")
    var redcolor = gsap.utils.mapRange(0,rectanglelocation.width/2,
    255,
    0,
    insiderectval)
    gsap.to(rect,{
        backgroundColor:`rgb(${redcolor},0,0)`,
        ease: Power4,
    })
   }else{
    // console.log("righth");
    var bluecolor = gsap.utils.mapRange(rectanglelocation.width/2, rectanglelocation.width,0,
    255,
    insiderectval)
    gsap.to(rect,{
        backgroundColor:`rgb(0,0,${bluecolor})`,
        ease: Power4,
    })
   }
})


rect.addEventListener("mouseleave", function(){
    // rect.style.backgroundColor="white"
    gsap.to(rect,{
        backgroundColor :"white",
    })
})