
 
        // Throttling Function
        const throttleFunction = (func, delay) => {
 
            // Previously called time of the function
            let prev = 0;
            return (...args) => {
                // Current called time of the function
                let now = new Date().getTime();
 
                // Logging the difference
                // between previously 
                // called and current called timings
                // console.log(now - prev, delay);
 
                // If difference is greater
                // than delay call
                // the function again.
                if (now - prev > delay) {
                    prev = now;
 
                    // "..." is the spread
                    // operator here 
                    // returning the function with the 
                    // array of arguments
                    return func(...args);
                }
            }
        }

    



document.querySelector("#center").addEventListener("mousemove" , throttleFunction((debts)=>{
    // console.log("debtsdebts")
   var div = document.createElement("div");
    div.classList.add('imagediv')
    div.style.left = debts.clientX +'px';
    div.style.top = debts.clienty+'px';
   var img = document.createElement("img");
   img.setAttribute("src", "https://images.unsplash.com/photo-1715987587174-b8be6a743337?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")
 div.appendChild(img)

    document.body.appendChild(div);
    gsap.to(img,{
        y:"0",
        ease: Power1,
        duration :.2 
    })
    gsap.to(img,{
        y:"100%",
        delay:.6,
        ease: Power2,
        // duration .2
    })

setTimeout(function(){
    div.remove();
},1000)
},400));

