import { getItem, setItem, setItemList } from '../common/storage.js';
import { closePopup } from '../common/popup.js';

const weekElem = document.querySelector('.calendar__week');
const deleteEventBtn = document.querySelector('.delete-event-btn');

function handleEventClick(event) {
  const elem = event.target;
    //////////
  if (elem.classList.contains('event')) {
    const id = elem.dataset.eventId;
    //////////
    let events = getItem('events');
    events = events.find(ev => ev.id == id);
    
    const getItemEvent = (key) => {
      let value = events[key];
      return value;
    };

    let title = getItemEvent('title');
    let description = getItemEvent('description');
    let startTimeGetten = new Date(getItemEvent('start'));
    let endTimeGetten = new Date(getItemEvent('end'));

    let startTimeGettenHours = startTimeGetten.getHours()
    let startTimeGettenMinutes = startTimeGetten.getMinutes()

    let endTimeGettenHours = endTimeGetten.getHours()
    let endTimeGettenMinutes = endTimeGetten.getMinutes()

    if (startTimeGettenMinutes < 10) {
      startTimeGettenMinutes = `${startTimeGettenMinutes}0`
    }

    if (endTimeGettenMinutes < 10) {
      endTimeGettenMinutes = `${endTimeGettenMinutes}0`
    }
    let popupTitle = document.querySelector('.event-info__title');
    let popupTime = document.querySelector('.event-info__time');
    let popupDescription = document.querySelector('.event-info__description');

    popupTitle.textContent = `${title}`;
    popupTime.textContent = `${startTimeGettenHours}:${startTimeGettenMinutes} - ${endTimeGettenHours}:${endTimeGettenMinutes}`;

    popupDescription.textContent = `${description}`;

    /////
    
    const elemChild = document.querySelector('.popup');
    elemChild.classList.remove('hidden');
    setItem('eventIdToDelete', id);
  }
  if (elem.classList.contains('event__time') || elem.classList.contains('event__title')) {
      let closestEventParent = elem.closest('.event');
    const id = closestEventParent.dataset.eventId;
    /////
    let events = getItem('events');
    events = events.find(ev => ev.id == id);
    
    const getItemEvent = (key) => {
      let value = events[key];
      return value;
    };

    let title = getItemEvent('title');
    let description = getItemEvent('description');
    let startTimeGetten = new Date(getItemEvent('start'));
    let endTimeGetten = new Date(getItemEvent('end'));

    let startTimeGettenHours = startTimeGetten.getHours()
    let startTimeGettenMinutes = startTimeGetten.getMinutes()

    let endTimeGettenHours = endTimeGetten.getHours()
    let endTimeGettenMinutes = endTimeGetten.getMinutes()

    if (startTimeGettenMinutes < 10) {
      startTimeGettenMinutes = `${startTimeGettenMinutes}0`
    }

    if (endTimeGettenMinutes < 10) {
      endTimeGettenMinutes = `${endTimeGettenMinutes}0`
    }
    let popupTitle = document.querySelector('.event-info__title');
    let popupTime = document.querySelector('.event-info__time');
    let popupDescription = document.querySelector('.event-info__description');

    popupTitle.textContent = `${title}`;
    popupTime.textContent = `${startTimeGettenHours}:${startTimeGettenMinutes} - ${endTimeGettenHours}:${endTimeGettenMinutes}`;
    popupDescription.textContent = `${description}`;
    ///////
    const elemChild = document.querySelector('.popup');
    elemChild.classList.remove('hidden');
    setItem('eventIdToDelete', id);
  }
  // If a click occurs on an event, then a popup with a delete button needs to be displayed.
  // Set eventIdToDelete with the event ID in the storage.
}

function removeEventsFromCalendar() {
    const eventElements = document.querySelectorAll('.event');
    eventElements.forEach(eventElement => {
    eventElement.remove();
  });
  // A function for deleting all events from the calendar.
}

const createEventElement = (event) => {
  for (let i = 0; i <= event.length - 1; i++){
    // function gets Values from the object we have
    const getItemEvent = (key) => {
      let value = takenObject[key];
      return value;
    };
    // sets Values from the object we have
    const setItemEvent = (key, value) => {
      takenObject[key] = value;
    };

    //randomaizer for id
    let randIndex = () => {
      const min = 0.7520027086457333;
      const max = 0.7600000000000000;
      return Math.random() * (max - min) + min;
    }
    ////////////////
    let takenObject = event[i];
    setItemEvent('id', randIndex())
    let startDate = new Date(getItemEvent('start'));
    ////////////////
    let startDay = startDate.getDate();
    let startHour = startDate.getHours();
    let startCalcMinutes = startDate.getMinutes();
    ////////////////
    let endDate = new Date(getItemEvent('end'));
    let endCalcMinutes = endDate.getMinutes();
    let endCalcHours = endDate.getHours();
    // calculates difference betwen time
    function calculateTimeDifference(startHours, startMinutes, endHours, endMinutes) {
      const totalStartMinutes = startHours * 60 + startMinutes;
      const totalEndMinutes = endHours * 60 + endMinutes;
    
      const differenceInMinutes = totalEndMinutes - totalStartMinutes;
    
      return differenceInMinutes;
    }
    
    let timeDifference = calculateTimeDifference(startHour, startCalcMinutes, endCalcHours, endCalcMinutes);
    ////////////////

    let textColor = getItemEvent('textColor');
    let backColor = getItemEvent('backColor');
    
    ////////////////
    //creates event
    let dayElem = weekElem.querySelector(`.calendar__day[data-day="${startDay}"]`);
    let hourElem = dayElem.querySelector(`.calendar__time-slot[data-time="${startHour}"]`)
    let elemDom = document.createElement("div");
    elemDom.setAttribute('class', 'event');
    elemDom.setAttribute('data-event-id', `${getItemEvent('id')}`);
    elemDom.style.top = `${startCalcMinutes}px`;
    elemDom.style.opacity = '0.5';
    let zIndexNum = 0;
    if (timeDifference < 30) {
      timeDifference = 30;
      zIndexNum = 10;
    } 

    if (timeDifference < 45) {
      zIndexNum = 9;
    } 

    if (timeDifference < 60) {
      zIndexNum = 8;
    } 

    if (timeDifference < 75) {
      zIndexNum = 7;
    } 

    if (timeDifference >= 90) {
      zIndexNum = 6;
    } 

    if (timeDifference >= 120) {
      zIndexNum = 5;
    } 

    if (timeDifference >= 150) {
      zIndexNum = 4;
    } 

    if (timeDifference >= 150) {
      zIndexNum = 3;
    } 

    if (timeDifference >= 180) {
      zIndexNum = 2;
    } 

    if (timeDifference >= 210) {
      zIndexNum = 1;
    } 
    elemDom.style.height = `${timeDifference}px`;
    elemDom.style.background = `${backColor}`;
    elemDom.style.zIndex = `${zIndexNum}`
    hourElem.appendChild(elemDom);


    ////////////////
    //creates event elements
    if (getItemEvent('title') != '' && timeDifference > 30) {
      let divTitle = document.createElement('div');
    divTitle.setAttribute('class', 'event__title');
    let eventTitle = getItemEvent('title');
    divTitle.textContent = eventTitle;
    divTitle.style.color = `${textColor}`;
    divTitle.style.overflow = 'hidden';
    divTitle.style.width = '95%';
    elemDom.appendChild(divTitle);
    }


    if (startCalcMinutes < 10) {
      startCalcMinutes = `${startCalcMinutes}0`
    }

    if (endCalcMinutes < 10) {
      endCalcMinutes = `${endCalcMinutes}0`
    }


    let divTime = document.createElement('div');
    divTime.setAttribute('class', 'event__time');
    divTime.textContent = `${startHour}:${startCalcMinutes} - ${endCalcHours}:${endCalcMinutes}`;
    divTime.style.color = `${textColor}`;
    elemDom.appendChild(divTime);
  }


  // The function creates a DOM element for an event.
  // The event should be positioned absolutely within the appropriate time cell inside the day.
  // You need to add the event ID to the data attribute.
  // Here, use document.createElement to create the DOM element for the event.
};

export const renderEvents = () => {
  removeEventsFromCalendar();
  const eventTaken = getItem('events');

  function filterEventsWithin7Days(events, startDate) {
    const endDate = new Date(getItem('displayedWeekStart'));
    endDate.setDate(startDate.getDate() + 7);
  
    return events.filter(event => event.start >= startDate && event.start <= endDate);
  }
  
  const startDay = new Date(getItem('displayedWeekStart')); // The starting day.
  const filteredEvents = filterEventsWithin7Days(eventTaken, startDay);

  createEventElement(filteredEvents);
  // We retrieve all events from storage and the date of the Monday of the displayed week.
  // We filter the events, keeping only those that are within the current week.
  // We create DOM elements for these events using the createEventElement function.
  // For each event, we find the corresponding time cell on the page (.calendar__time-slot).
  // And then insert the event into that time cell.
  // Each day and time cell should have data attributes that can be used to find the appropriate time cell for an event.
  // Don't forget to remove old events from the calendar before adding new ones.
};

function onDeleteEvent() {
  let events = getItem('events');
  let eventToDelete = parseFloat(getItem('eventIdToDelete'));
  events = events.filter(event => event.id != eventToDelete);
  setItem('events', events);
  closePopup();
  renderEvents();
  // We retrieve the array of events and eventIdToDelete from storage.
  // We remove the required event from the array and then store the updated array in the storage.
  // Close the popup.
  // Redraw the events on the page according to the new list of events in the storage (using renderEvents).
}

deleteEventBtn.addEventListener('click', onDeleteEvent);

weekElem.addEventListener('click', handleEventClick);

const dateInput = document.querySelector('input[name="date"]');
const startTimeInput = document.querySelector('input[name="startTime"]');
const endTimeInput = document.querySelector('input[name="endTime"]');

startTimeInput.addEventListener('input', () => {
  const selectedDate = new Date(dateInput.value);
  const startTimeParts = startTimeInput.value.split(':');
  selectedDate.setHours(startTimeParts[0], startTimeParts[1]);

  const startTime = selectedDate.getTime(); // Получаем миллисекунды для начального времени

  // Если второй инпут уже имеет значение, проверяем и корректируем его
  if (endTimeInput.valueAsDate) {
    const endTime = endTimeInput.valueAsDate.getTime();
    if (endTime <= startTime) {
      endTimeInput.value = ''; // Очищаем значение второго инпута
    }
  }

  // Ограничиваем минимальное время для второго инпута
  const minEndTime = new Date(startTime);
  minEndTime.setMinutes(minEndTime.getMinutes() + 1); // Увеличиваем на 1 минуту

  const minHours = minEndTime.getHours().toString().padStart(2, '0');
  const minMinutes = minEndTime.getMinutes().toString().padStart(2, '0');
  endTimeInput.min = `${minHours}:${minMinutes}`;
});