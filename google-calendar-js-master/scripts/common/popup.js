const popupElem = document.querySelector('.popup');
const popupContentElem = document.querySelector('.popup__content');

// In a popup, you need to pass the coordinates at which to display the popup.
export function openPopup(x, y) {
  popupElem.classList.remove('hidden');
  popupContentElem.style.top = `${y}px`;
  popupContentElem.style.left = `${x}px`;
}

export function closePopup() {
  popupElem.classList.add('hidden');
}

function onClickInsidePopup(event) {
  event.stopPropagation();
}

popupContentElem.addEventListener('click', onClickInsidePopup);
popupElem.addEventListener('click', closePopup);

const popupCross = document.querySelector('.close-pop');
popupCross.addEventListener('click', () => {
  const popupStat = document.querySelector('.popup');
  popupStat.classList.add('hidden');
})