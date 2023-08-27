import { getItem, setItem } from '../common/storage.js';
import { renderWeek } from '../calendar/calendar.js';
import { renderHeader } from '../calendar/header.js';
import { getStartOfWeek, getDisplayedMonth } from '../common/time.utils.js';
import {renderEvents} from '../events/events.js';

const navElem = document.querySelector('.navigation');
const displayedMonthElem = document.querySelector(
  '.navigation__displayed-month'
);

function renderCurrentMonth() {
  const mouth = getDisplayedMonth(getItem("displayedWeekStart"));
  displayedMonthElem.textContent = mouth;
  // Render the month to which the current week belongs (using getDisplayedMonth).
  // Insert it into the .navigation__displayed-month.
}



const onChangeWeek = (event) => {
  const directionIcon = event.target.closest('button');
  const direct = directionIcon.dataset.direction;
  let currentDate = new Date(getItem('displayedWeekStart'));
    if (direct === "prev") {
      currentDate.setDate(currentDate.getDate() - 7);
    } else if (direct === "next") {
      currentDate.setDate(currentDate.getDate() + 7);
    } else if (direct === "today") {
      currentDate = new Date();
    }
    setItem('displayedWeekStart', currentDate);
    setItem('displayedWeekStart', getStartOfWeek(getItem('displayedWeekStart')));
    renderHeader();
    renderWeek();
    renderEvents();
    renderCurrentMonth();
};

export const initNavigation = () => {
  renderCurrentMonth();
  navElem.addEventListener('click', onChangeWeek);
};
