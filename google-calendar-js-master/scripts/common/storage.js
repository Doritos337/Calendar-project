let storage = {
  // Used for event deletion.
  eventIdToDelete: null,
  // хранит дату понедельника той отображаемой недели
  displayedWeekStart: null,

  // Stores the date of the Monday of the displayed week.
  events: [],
  // These are all the data you need to store for the application to function.
};

export const setItem = (key, value) => {
  storage[key] = value;
  // The function should set values in the storage object.
};

export const setItemList = (key, value) => {
  storage[key].push(value);
  // The function should set values in the storage object.
}

export const getItem = (key) => {
  let value = storage[key];
  return value;
  // The function should return values from the storage object based on the provided key.
};

// An example of an event object
const eventExample = {
  id: 0.7520027086457333, //  the "id" will be needed for working with events.
  title: 'Title',
  description: 'Some description',
  start: new Date('2020-03-17T01:10:00.000Z'),
  end: new Date('2020-03-17T04:30:00.000Z'),
  textColor:``,
  backColor: ``,
};
