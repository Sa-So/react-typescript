const addZeroIfOneDigit = (num) =>
  Number(num) < 10 ? `0${Number(num)}` : `${Number(num)}`;

const convertTo12HourFormat = (time) => {
  const timeArray = time.split(':');
  const hours = Number(timeArray[0]);
  const minutes = Number(timeArray[1]);

  const ampm = hours >= 12 ? 'PM' : 'AM';
  const newHours = addZeroIfOneDigit(hours % 12);
  const newMinutes = addZeroIfOneDigit(minutes);

  if(newHours === '00') {
    return `12:${newMinutes} ${ampm}`;
  }
  return `${newHours}:${newMinutes} ${ampm}`;
};
const convertTo24HourFormat = (time) => {
  const timeArray = time.split(':');
  const hours = Number(timeArray[0]);
  const minutes = timeArray[1].split(' ')[0];
  const seconds = '00';
  if(time.includes('PM')) {
      if(hours==12){
          return `${hours}:${minutes}:${seconds}`;
      }
    return `${(hours + 12) % 24}:${minutes}:${seconds}`;
  }
  else{
      if(hours==12){
          return `${(hours + 12) % 24}:${minutes}:${seconds}`;
      }
      return `${hours}:${minutes}:${seconds}`;
  }
};
console.log(convertTo24HourFormat('12:00 PM'));
console.log(convertTo12HourFormat("23:59:00"));
console.log(convertTo12HourFormat("12:00:00"));
console.log(convertTo12HourFormat("00:00:00"));
// there is no 24 in 24 hr clock but there is a 12 in 12 hour clock !
