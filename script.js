const keys = document.querySelectorAll(".key")
const text = document.querySelector("#text")

const logKey = (key) => {
    
    key.onclick=function(){
       if (key.textContent === "Backspace") {
        text.textContent = text.textContent.slice(0, text.textContent.length-1) 
       }else{
        text.textContent = text.textContent + key.textContent 
       }
       
       
    }
}
keys.forEach(logKey)
