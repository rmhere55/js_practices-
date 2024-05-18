// document.querySelector("")
window.addEventListener("mousemove" , function(details){
var rect = document.querySelector("#react")
    var xval = gsap.utils.mapRange( 0 , window.innerWidth , 100+rect.getBoundingClientRect().width/2, 
    window.innerWidth-(100+rect.getBoundingClientRect().width/2),
     details.clientX)
    gsap.to('#react',{
        left: xval ,
        ease: Power3,  
    })
})