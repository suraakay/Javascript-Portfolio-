const menuBar = document.querySelector('.menu-icon')
const menuSideBar = document.querySelector('.header-menu-dropdown')
const outMenu = document.querySelector('.container-article-content')

function displayMenu() {
    menuSideBar.classList.contains('slide-in')
        ? menuSideBar.classList.remove('slide-in')
        : menuSideBar.classList.add('slide-in')
    setTimeout(() => {
        menuSideBar.classList.remove('slide-in')
    }, 10000);
}

menuBar.addEventListener('click', displayMenu)
outMenu.addEventListener('click', () => {
    setTimeout(() => {
        menuSideBar.classList.remove('slide-in')

    }, 20);
})

