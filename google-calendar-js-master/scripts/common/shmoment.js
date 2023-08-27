const getMethodsNames = {
  years: 'getFullYear',
  months: 'getMonth',
  days: 'getDate',
  hours: 'getHours',
  minutes: 'getMinutes',
  seconds: 'getSeconds',
  milliseconds: 'getMilliseconds',
};

const setMethodsNames = {
  years: 'setFullYear',
  months: 'setMonth',
  days: 'setDate',
  hours: 'setHours',
  minutes: 'setMinutes',
  seconds: 'setSeconds',
  milliseconds: 'setMilliseconds',
};

// The function helps to add or subtract a certain amount of time from a given value.
// A simplified equivalent of the popular library "moment."
const shmoment = (date) => {
  let result = new Date(date);

  const calculator = {
    add(units, value) {
      const currentUnitValue = result[getMethodsNames[units]]();
      result = new Date(
        result[setMethodsNames[units]](currentUnitValue + value)
      );
      return this;
    },
    subtract(units, value) {
      return this.add(units, -value);
    },
    result() {
      return result;
    },
  };

  return calculator;
};

export default shmoment;
