const burger = document.querySelector('.burger')
const navbar = document.querySelector('.navList')
const slider = document.querySelector('.slider')

function displayNavbar() {
    if (navbar.classList.contains('openedNav')) {
        navbar.classList.remove('openedNav')
    }
    else {
        navbar.classList.add('openedNav')
    }
}
function displayImages(e) {
    const defaultHeight = 875
    const images = document.querySelectorAll('.container img')
    images.forEach(image => {
        if (window.scrollY + defaultHeight / 2 >= image.offsetTop) {
            image.classList.add('slide-in')
        }
        if (window.scrollY + defaultHeight <= image.offsetTop) {
            image.classList.remove('slide-in')
        }
    })
}


burger.addEventListener('click', displayNavbar)
window.addEventListener('scroll', displayImages)


