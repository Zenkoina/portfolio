let prevScrollY = window.scrollY
let lastLinkClick = performance.now()

window.addEventListener('scroll', () => {
    if ((window.scrollY > prevScrollY || window.innerHeight < 600) && window.scrollY > 50 && performance.now() - lastLinkClick > 50) {
        navbar = document.getElementById('navbar')
        navbar.className = 'scrolled'
    } else {
        navbar = document.getElementById('navbar')
        navbar.className = ''
    }

    prevScrollY = window.scrollY
})

for (let index = 0; index < document.getElementById('navbar').getElementsByTagName("a").length; index++) {
    const link = document.getElementById('navbar').getElementsByTagName("a")[index];

    link.addEventListener('click', () => {
        lastLinkClick = performance.now()
    })
}