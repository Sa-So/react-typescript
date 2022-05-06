# Code Quality ?!
## function to format date string to be seperated by commas
```implement.ts
export const formatDateStringAddComma = (dateString: string): string => {
  // return dateString.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  // const date = new Date(dateString);
  // const month = addZeroIfOneDigit(date.getMonth() + 1);
  // const day = addZeroIfOneDigit(date.getDate());
  // const year = date.getFullYear();
  // const hours = addZeroIfOneDigit(date.getHours());
  // const minutes = addZeroIfOneDigit(date.getMinutes());
  // const seconds = addZeroIfOneDigit(date.getSeconds());
  // const time = `${hours}:${minutes}:${seconds}`;
  // const dateStringWithComma = `${month}/${day}/${year} ${time}`;
  
  // nice way.
  /*
  const a = dateString.split(' ');
  a[0] = a[0] + ',';
  a[2] = a[2] + ',';
  const dateStringWithComma = a.join(' ');
  return dateStringWithComma;
  */
  // better way : destructure the date string and return the date string with comma
  const [ day, month, dd, year ] = dateString.split(' ');
  return `${day}, ${month} ${dd}, ${year}`;
};

```
```call.ts
formatDateStringAddComma(date.toDateString())
```
ideally we should put this function on a date object but it's fine.

## hehe
