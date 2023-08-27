import { createNumbersArray } from '../common/createNumbersArray.js';

export const renderTimescale = () => {
  const time = createNumbersArray(0, 23);
  const calenderTimeScale = document.querySelector(".calendar__time-scale");
  for (let i = 0; i <= (time.length - 1); i++) {
  let htmlBase = `<div class='time-slot'>
                    <span class='time-slot__time'>${time[i]}:00</span>
                  </div>`;
  calenderTimeScale.insertAdjacentHTML('beforeend', htmlBase);
  }
  // The function should generate markup for the side time scale (24 hours).
  // Insert the obtained markup onto the page using innerHTML into the .calendar__time-scale.
};