document.querySelectorAll('#radiento input').forEach(radio => {
  radio.onclick = e => {
    if (!document.startViewTransition) return
    
    e.preventDefault()
    
    document.startViewTransition(()=> {
      e.target.checked = true
    })
  }
})