function animateOpen(){
    var body = document.getElementById("start");
    var midLine = document.getElementById("midLine");
    
    var welcome = document.getElementById("welcome");
    
    var msg = document.getElementById("message");
    var icons = document.getElementById("icons");
    
    var icon1 = document.getElementById("icon1");
    var icon2 = document.getElementById("icon2");
    var icon3 = document.getElementById("icon3");
    var icon4 = document.getElementById("icon4");
    
    var topLine = document.getElementById("topLine");
    var mainText = document.getElementById("mainText");
    
    //1
    topLine.style.width="80%";
    topLine.style.left="0";
    

    //2
    setTimeout(function(){
        mainText.style.top="0";
        
        //3
        setTimeout(function(){
            
            midLine.style.height="30vh";
            midLine.style.top="500px";
            
            topLine.style.opacity="0";
            
            welcome.style.opacity = "1";
        
            setTimeout(function(){
                msg.style.marginRight="5%";
                msg.style.marginLeft="20%";
                msg.style.opacity="1";
    
                icons.style.marginLeft="5%";
            
                setTimeout(function(){icon1.style.opacity="1";}, 100);
                setTimeout(function(){icon2.style.opacity="1";}, 200);
                setTimeout(function(){icon3.style.opacity="1";}, 300);
                setTimeout(function(){icon4.style.opacity="1";}, 400);
                
            }, 500)
                
            
            

            
             
            
              
            
        }, 1000)
        
        
        
    }, 500);
    
    
    
    
    
   
    
    
}
