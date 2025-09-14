import { getDate, getDaysInMonth, getMonth } from "date-fns";

const utils = {
  constants: {
    DAYS: ["Mon", "Wed", "Fri"],
    MONTHS: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
  },
  getQuotientAndReminder(dividend, divisor) {
    const rawQuotient = dividend / divisor;
    const reminder = rawQuotient % 1;
    const quotient = rawQuotient - reminder;

    return { quotient, reminder };
  },
  getBoxColor(done, maxValueOfDone, selectedTheme) {
    const { quotient } = this.getQuotientAndReminder(maxValueOfDone, 5);

    if (done < quotient) {
      return selectedTheme.level0;
    } else if (done >= quotient && done < 2 * quotient) {
      return selectedTheme.level1;
    } else if (done >= 2 * quotient && done < 3 * quotient) {
      return selectedTheme.level2;
    } else if (done >= 3 * quotient && done < 4 * quotient) {
      return selectedTheme.level3;
    } else if (done >= 4 * quotient) {
      return selectedTheme.level4;
    }
  },
  getIndexOfDayInYear(date, year) {
    const monthIndex = getMonth(date);
    const day = getDate(date);

    let dayIndex = day;

    for (let i = 0; i < monthIndex; i++) {
      const numberOfDaysInMonth = getDaysInMonth(new Date(year, i));
      dayIndex += numberOfDaysInMonth;
    }

    return dayIndex;
  },
};

export default utils;
