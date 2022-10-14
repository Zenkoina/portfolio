let prevScrollY = window.scrollY

window.addEventListener('scroll', () => {
    if ((window.scrollY > prevScrollY || window.innerHeight < 600) && window.scrollY > 50) {
        navbar = document.getElementById('navbar')
        navbar.className = 'scrolled'
    } else {
        navbar = document.getElementById('navbar')
        navbar.className = ''
    }

    prevScrollY = window.scrollY
})