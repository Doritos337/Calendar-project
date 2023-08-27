import { getItem, setItem } from '../common/storage.js';
import { generateWeekRange } from '../common/time.utils.js';
import { openModal } from '../common/modal.js';
import {getDisplayedMonth} from '../common/time.utils.js'

const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export const renderHeader = () => {
  let DaysOfWeakRange = generateWeekRange(getItem("displayedWeekStart"));
  
  // Takes dates and days of week of current week like [[0, 1],[18, 19]];
  const daysList = (allWeek) => {
    let listNumbersOfDaysOfWeek = [];
    let listDaysOfMouth = [];
    allWeek.map((elem) => {
      listNumbersOfDaysOfWeek.push(elem.getDay());
      listDaysOfMouth.push(elem.getDate());
    });
    return [listNumbersOfDaysOfWeek, listDaysOfMouth];
  }
  // perm result
  let perm = (daysList(DaysOfWeakRange))
  let permWeek = perm[0];
  let days = perm[1];

// Convert list of number[0, 1, 2] into days of Week
  const numbersIntoDaysOfWeek = (days, normDays) => {
    let normalizedList = [];
    for (let i = 0; i <= days.length -1; i++) {
      normalizedList.push(normDays[days[i]]);
    }
    return normalizedList;
  }

  const normWeek = numbersIntoDaysOfWeek(permWeek, daysOfWeek);

  //creating an HTML code

  function createGridDays (normWeek, days) {

    const todaysDate = new Date();
    const todayIs = todaysDate.getDate();

    const calender = document.querySelector(".calendar__header");
    calender.innerHTML = '';



    for (let i = 0; i <= normWeek.length-1; i++) {
    const currentDay = new Date();
    let currentDayM = currentDay.getMonth();
    let currentYear = currentDay.getFullYear();

    let gettenMouth = new Date(getItem('displayedWeekStart'));
    let sda = gettenMouth.getMonth();
    let yer = gettenMouth.getFullYear();


      if (days[i] == todayIs && currentDayM == sda && currentYear == yer) {
        let htmlBase = `<div class='calendar__day-label day-label todayIs' data-day = '${days[i]}' data-mounth='${sda}' data-year='${yer}'>
                      <span class='day-label__day-name'>${normWeek[i]}</span>
                      <span class='day-label__day-number'>${days[i]}</span>
                    </div>`;
        calender.insertAdjacentHTML("beforeend", htmlBase);
      } else {
        let htmlBase = `<div class='calendar__day-label day-label' data-day = '${days[i]}' data-mounth='${sda}' data-year='${yer}'>
                      <span class='day-label__day-name'>${normWeek[i]}</span>
                      <span class='day-label__day-number'>${days[i]}</span>
                    </div>`;
        calender.insertAdjacentHTML("beforeend", htmlBase);
      }

    }
  
  // Based on the displayedWeekStart from storage, use generateWeekRange to form an array of days for the current week.
  // Based on the obtained array, create markup as a string - 7 days (day of the week and date in the month).
  // Insert the obtained markup onto the page using innerHTML into the .calendar__header.
  // Each cell should store the hour it represents in a data attribute.
};
createGridDays(normWeek, days);

const create = document.querySelector(".create-event-btn");
create.addEventListener ('click', openModal)
// When clicking the "Create" button, open a modal window with a form for event creation.
// Assign an event handler here.

}
