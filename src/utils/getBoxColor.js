import getQuotientAndReminder from "./getQuotientAndReminder";

const getBoxColor = (done, maxValueOfDone, selectedTheme) => {
  const { quotient } = getQuotientAndReminder(maxValueOfDone, 5);

  if (done < quotient) {
    return selectedTheme.level0;
  } else if (done >= quotient && done < 2 * quotient) {
    return selectedTheme.level1;
  } else if (done >= 2 * quotient && done < 3 * quotient) {
    return selectedTheme.level2;
  } else if (done >= 3 * quotient && done < 4 * quotient) {
    return selectedTheme.level3;
  } else if (done > 4 * quotient) {
    return selectedTheme.level4;
  }
};

export default getBoxColor;
