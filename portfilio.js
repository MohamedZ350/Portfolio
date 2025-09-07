   const h2 = document.getElementById("h2") ; 
        h2.addEventListener('animationiteration', ()=>{
            if(h2.textContent ==='Full stack'){
                h2.textContent = 'Developer';
                h2.style.color ='white'
            } else {
                h2.textContent ='Full stack' ;
                h2.style.color = 'rgb(19, 120, 133)' ;
            } 
        }) ;
let valuePop ; 
let btn = document.getElementById("showBtn") ;
btn.addEventListener("click" ,function box(){
    // create Overly element
    let popupOverly = document.createElement("div") ; 
    // Add class to overly
    popupOverly.className ="popup-overly"  ;
    // Add overly to body 
    document.body.appendChild(popupOverly) ;
    // Create popup element
    let popup = document.createElement("div") ;
    valuePop = popup ; 
    // Add class to popup
    popup.className = "popup" ;
    // Add popup to body
    popupOverly.appendChild(popup);
    // create close popup
    let closePopup = document.createElement("button") ; 
    // Add content to close popup 
    closePopup.textContent = "X"
    // Add clasName to button close
    closePopup.className = "buttonClose" ; 
    // Add close popup to popup
    popup.appendChild(closePopup) ; 
      // create img 
    let img = document.createElement("img") ; 
    // Add src to img
    img.src = "photo/Skills.jpg" ;
    // Add className
    img.className = 'Skills-popup' ;
    // add img to popup
    popup.appendChild(img) ;


}

)
// img showing
let img = document.getElementById("img-box") ;

img.addEventListener("mouseenter" ,function img(){
    setTimeout(() =>{
  // create Overly element
    let popupOverly = document.createElement("div") ; 
    // Add class to overly
    popupOverly.className ="popup-overly"  ;
    // Add overly to body 
    document.body.appendChild(popupOverly) ;
    // Create popup element
    let popup = document.createElement("div") ;
    valuePop = popup ; 
    // Add class to popup
    popup.className = "popup2" ;
    // Add popup to body
    popupOverly.appendChild(popup);
    // create close popup
    let closePopup = document.createElement("button") ; 
    // Add content to close popup 
    closePopup.textContent = "X"
    // Add clasName to button close
    closePopup.className = "buttonClose2" ; 
    // Add close popup to popup
    popup.appendChild(closePopup) ; 
    // create img 
    let img = document.createElement("img") ; 
    // Add src to img
    img.src = "photo/Me.jpg" ;
    // Add className
    img.className = 'img-popup' ;
    // add img to popup
    popup.appendChild(img) ;
    },300)


}

)
// close popup 
document.addEventListener("click" , function(e){
    if(e.target.className == "buttonClose" || e.target.className == "buttonClose2"){
        valuePop.parentNode.remove();
      
    }
})