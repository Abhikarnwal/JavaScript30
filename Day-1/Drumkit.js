
window.addEventListener('keydown',(event)=>{

    const audio=document.querySelector(`audio[data-key="${event.keyCode}"]`)
    const key= document.querySelector(`.key[data-key="${event.keyCode}"]`)
    
      // console.log(key)
   
      if(!audio){
          return
        }
        
    audio.currentTime=0;
    audio.play()
    key.classList.add('playing')

})

const endTransition=(e)=>{
   if(e.propertyName !== "transform" ){
    return
   }

  e.target.classList.remove('playing')

}


const keydata= document.querySelectorAll(".key")

console.log(keydata)


keydata.forEach((key) => {
  key.addEventListener("transitionend",endTransition)
})





