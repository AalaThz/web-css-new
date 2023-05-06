let backdrop = document.querySelector('.backdrop')
let modal = document.querySelector('.modal')
let selectPlanBtn = document.querySelectorAll('.plan button')
let modalCloseBtn = document.querySelector('.modal__action--negative')

for (i=0 ; i<selectPlanBtn.length ; i++) {
    selectPlanBtn[i].addEventListener('click', () => {
        // modal.style.display = 'block'
        // backdrop.style.display = 'block'
        modal.classList.add('open')
        backdrop.classList.add('open')

    })
}
backdrop.addEventListener('click',closeModal )
modalCloseBtn.addEventListener('click',closeModal )


function closeModal (){
    // modal.style.display = 'none'
    // backdrop.style.display = 'none'
    modal.classList.remove('open')
    backdrop.classList.remove('open')


}
