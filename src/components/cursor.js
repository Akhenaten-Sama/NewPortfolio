const cursor = ()=>{
    let mousepointer = document.querySelector('.cursor')
    let text = document.querySelectorAll('.text')
    text.forEach(each=>{
      each.addEventListener('mouseover', ()=>{
        mousepointer.classList.add('cursor-grow')
        each.classList.add('hovered-text')
      })
      each.addEventListener('mouseleave', ()=>{
        mousepointer.classList.remove('cursor-grow')
        each.classList.remove('hovered-text')
      })
    })
    

}

export default cursor
    