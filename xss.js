function callme() {
  alert(1)
}

let cube = document.querySelector('#cube')
cube.addEventListener('click', function() {
  alert('XSS')
})

