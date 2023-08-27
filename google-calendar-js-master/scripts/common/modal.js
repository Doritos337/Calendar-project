const modalElem = document.querySelector('.modal');

export function openModal(){
    modalElem.classList.remove('hidden');
}

export function closeModal(){
    modalElem.classList.add('hidden');
}
// descriptions for the openModal and closeModal functions
// The modal window operates in a similar manner to a popup.
// The difference is that a popup is displayed at the click location, while a modal window is centered on the screen.
