//consts
const navbarItems = document.querySelectorAll('.with-dropdown')
const dropdownBackgrounds = document.querySelectorAll('.dropdown-background-container')
const slideImages = document.querySelectorAll('.main-wrapper-part')
const menuFaFasIcon = document.querySelector('.navbar-down-side-logo-menu')
const navbarLeftSide = document.querySelector('.navbar-left-slide')

let isOnNav = 0

function displayDropdowns(e) {
    isOnNav++
    console.log(isOnNav)
    let dropdownData = e.target.dataset.name

    dropdownBackgrounds.forEach(background => {
        background.classList.remove('translateZero')
        if (background.classList.contains(`${dropdownData}`)) {
            background.classList.add('translateZero')
            if (background.classList.contains('mobile-dn'))
                window.scrollTo(0, 400)
        }
    })
}

function checkIsOnNav() {
    console.log(isOnNav)
    if (isOnNav === 0) {
        dropdownBackgrounds.forEach(background => {
            background.classList.remove('translateZero')
        })
    }
}
function slideSect4Items(e) {
    slideImages.forEach(image => {

        if (window.scrollY - image.clientHeight / 6 >= image.offsetTop) {
            image.classList.add('translateZero')
        }
    })
}

navbarItems.forEach(item => item.addEventListener('mouseenter', displayDropdowns))
navbarItems.forEach(item => item.addEventListener('mouseleave', () => {
    isOnNav--
    setTimeout(() => {
        checkIsOnNav()
    }, 300);
}))
dropdownBackgrounds.forEach(item => item.addEventListener('mouseenter', () => {
    isOnNav++
    checkIsOnNav()
}))
dropdownBackgrounds.forEach(item => item.addEventListener('mouseleave', () => {
    isOnNav--
    setTimeout(() => {
        checkIsOnNav()
    }, 300);
}))
menuFaFasIcon.addEventListener('click', () => {
    console.log('tık')
    if (navbarLeftSide.classList.contains('navbar-left-spec')) {
        navbarLeftSide.classList.remove('navbar-left-spec')
        navbarLeftSide.classList.add('translateZero')
        return
    }
    if (!navbarLeftSide.classList.contains('navbar-left-spec')) {
        navbarLeftSide.classList.remove('translateZero')
        navbarLeftSide.classList.add('navbar-left-spec')
    }
})

navbarLeftSide.addEventListener('mouseleave', () => {
    setTimeout(() => {
        navbarLeftSide.classList.remove('translateZero')
        navbarLeftSide.classList.add('navbar-left-spec')
    }, 300);

})
window.addEventListener('scroll', slideSect4Items)



