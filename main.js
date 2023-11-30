const imgs = document.querySelector('.imgs')
const box = document.querySelector('.box')
box.addEventListener('click', function () {
     let src = (this.getAttribute('src'))
     imgs.setAttribute('src', src)
})