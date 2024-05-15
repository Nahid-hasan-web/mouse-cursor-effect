let dot = document.querySelector('.dot')
let cercel = document.querySelector('.cercel')

window.addEventListener('mousemove' , (e)=>{

    const posX = e.clientX
    const posY = e.clientY

    dot.style.left = `${posX}px`
    dot.style.top = `${posY}px`


    cercel.animate({
        left: `${posX}px`,
        top: `${posY}px`
    } , {duration: 500 , fill: 'forwards'})
})