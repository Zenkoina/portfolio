let prevScrollY = window.scrollY

window.addEventListener('scroll', () => {
    console.log(prevScrollY, window.scrollY)
    if ((window.scrollY > prevScrollY || window.innerHeight < 600) && window.scrollY > 50) {
        navbar = document.getElementById('navbar')
        navbar.className = 'scrolled'
    } else {
        navbar = document.getElementById('navbar')
        navbar.className = ''
    }

    prevScrollY = window.scrollY
})

console.log(document.getElementById('navbar').getElementsByTagName("a"))