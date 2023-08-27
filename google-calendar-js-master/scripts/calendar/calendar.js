import { getItem } from '../common/storage.js';
import { generateWeekRange } from '../common/time.utils.js';
import { createNumbersArray } from '../common/createNumbersArray.js';

const generateDay = () => {
  const generatedDays = document.querySelectorAll(".calendar__day");
  const range = createNumbersArray(0, 23);
  generatedDays.forEach(day => {
    for (let i = 0; i < range.length; i++) {
      let htmlBase = `<div class='calendar__time-slot' data-time='${range[i]}'></div>`;
      day.insertAdjacentHTML("beforeend", htmlBase);
    }
  });
  // The function should generate and return the markup of the day as a string.
  // The markup consists of 24 hourly time slots (.calendar__time-slot).
};

export const renderWeek = () => {
  const calendarWeek = document.querySelector(".calendar__week");
  let DaysOfWeakRange = generateWeekRange(getItem("displayedWeekStart"));
  calendarWeek.innerHTML = '';
  const daysList = (allWeek) => {
    let listDaysOfMouth = [];
    allWeek.map((elem) => {
      listDaysOfMouth.push(elem.getDate());
    });
    return listDaysOfMouth;
  }
  // perm result
  let permanent = (daysList(DaysOfWeakRange))

  for (let i = 0; i <= permanent.length - 1; i++) {
    let htmlBace = `<div class='calendar__day' data-day='${permanent[i]}'></div>`
    calendarWeek.insertAdjacentHTML("beforeend", htmlBace);
  }
  generateDay();
  // The function should generate the markup of the week as a string and insert it into the page (inside .calendar__week).
  // The markup of the week consists of 7 days (.calendar__day) of the displayed week.
  // The array of days to be displayed is calculated using the function generateWeekRange based on the displayedWeekStart from the storage.
  // Each day should contain the ordinal number of the day in the month in a data attribute.
  // After rendering the entire grid for the displayed week, you need to display the events of this week using the renderEvents function.
};
