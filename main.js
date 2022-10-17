let prevScrollY = window.scrollY
let lastLinkClick = performance.now()

window.addEventListener('scroll', () => {
    // on smaller screens hide navbar if scrolled past 50px
    // on larger screens hide navbar if scrolled past 50px & scrolling direction is downwards & a link wasn't just clicked
    if (window.innerHeight > 600) {
        if (window.scrollY > prevScrollY && window.scrollY > 50 && performance.now() - lastLinkClick > 50) {
            document.getElementById('navbar').className = 'hide'
        } else {
            document.getElementById('navbar').className = ''
        }
    } else {
        if (window.scrollY > 50) {
            document.getElementById('navbar').className = 'hide'
        } else {
            document.getElementById('navbar').className = ''
        }
    }

    prevScrollY = window.scrollY
})

for (let index = 0; index < document.getElementById('navbar').getElementsByTagName("a").length; index++) {
    const link = document.getElementById('navbar').getElementsByTagName("a")[index];

    link.addEventListener('click', () => {
        lastLinkClick = performance.now()
    })
}