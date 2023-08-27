import { getItem, setItemList, setItem } from '../common/storage.js';
import { renderEvents } from './events.js';
import { getDateTime } from '../common/time.utils.js';
import { closeModal } from '../common/modal.js';
const eventFormElem = document.querySelector('.event-form');
const closeEventFormBtn = document.querySelector('.create-event__close-btn');


function clearEventForm() {
   const inp = eventFormElem.querySelectorAll('.event-form__field');
   for (let elem of inp){
      elem.value = '';
   }
  //The function should clear the form fields of their values.
}

closeEventFormBtn.addEventListener("click", onCloseEventForm);

function onCloseEventForm() {
  clearEventForm();
  closeModal();
  // Here, you need to close the modal window and clear the form.
}

function onCreateEvent(event) {
  event.preventDefault();
  const formData = [...new FormData(eventFormElem)]
    .reduce((acc, [field, value]) => ({...acc,[field]: value}), {});

    const getFormDates = (key) => {
      let value = formData[key];
      return value;
    }

    

    const randNum = () => {
      const min = 0;
      const max = 5;
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    
    const randomColor = (number) => {
      let colorSets = [['#ffffff', '#6699CC'],['#ffffff','#843D58'], ['#000000', "#FFF275"], ['#ffffff', '#083D77'], ['#ffffff', '#FF3C38'],['#ffffff','#5B5941']];
      return colorSets[number];
    }
    
    let colorSet = randomColor(randNum());

    const createdEvent = {
      id: null,
      title: getFormDates('title'),
      description: getFormDates('description'),
      start: new Date (getDateTime(getFormDates('date'), getFormDates('startTime'))),
      end: new Date (getDateTime(getFormDates('date'), getFormDates('endTime'))),
      textColor: `${colorSet[0]}`,
      backColor:`${colorSet[1]}`,
    };

    setItemList('events', createdEvent);

    onCloseEventForm();
    
    renderEvents();

  // The task of this function is solely to add a new event to the array of events stored in the storage.
  // Creating or modifying DOM elements is not necessary here. Other functions will handle that.
  // Upon form submission, it's necessary to read the data from the form.
  // From the form, you will obtain the fields: date, startTime, endTime, title, and description.
  // Based on the date, startTime, and endTime fields, you need to calculate the start and end dates of the event.
  // using the getDateTime utility function, the start and end objects of the event can be calculated from the date, startTime, and endTime strings.
  // The obtained event is added to the array of events stored in the storage.
  // We close the form.
  // And trigger the event redraw using the renderEvents function.
}

export function initEventForm() {
  eventFormElem.addEventListener('submit', onCreateEvent);
  onCloseEventForm();
}

//Color adding

