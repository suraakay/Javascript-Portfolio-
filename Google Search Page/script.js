const input = document.querySelector('.main-input')
const cancelIcon = document.querySelector('.cancel-image-span')


input.addEventListener('input', (e) => {
    if(e.target.value){
        cancelIcon.style.display ='block'
    }
    else{
        cancelIcon.style.display ='none'
    }
})