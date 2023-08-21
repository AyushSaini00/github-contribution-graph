import { getDate, getDaysInMonth, getMonth } from "date-fns";

const getIndexOfDayInYear = (date, year) => {
  const monthIndex = getMonth(date);
  const day = getDate(date);

  let dayIndex = day;

  for (let i = 0; i < monthIndex; i++) {
    const numberOfDaysInMonth = getDaysInMonth(new Date(year, i));
    dayIndex += numberOfDaysInMonth;
  }

  return dayIndex;
};

export default getIndexOfDayInYear;
