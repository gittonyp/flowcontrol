
document.addEventListener("keypress",(e)=>{
    if(e.code==="BracketRight"){
        var a=document.querySelector('video').playbackRate+=0.1
        console.log("Change Positive "+a)
    }else if(e.code==="BracketLeft"){
        var a=document.querySelector('video').playbackRate-=0.1
        console.log("Change Negative"+a)
    }
    
})
