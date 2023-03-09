import { SVG } from "@svgdotjs/svg.js";
import {
  format,
  getDate,
  getDay,
  getDaysInMonth,
  getDaysInYear,
  getMonth,
  parseISO,
} from "date-fns";
import { MONTHS, DAYS } from "./constants";
import { THEMES } from "./themes";

export const drawContributionGraph = ({
  data,
  config: {
    graphTheme = "standard",
    graphMountElement = "body",
    graphWidth = 717,
    graphHeight = 130,
  } = {},
}) => {
  // sort year high to low
  const years = Object.keys(data).sort((a, b) => b - a);
  if (!years.length) return;

  years.forEach((year, ind) => {
    drawContributionGraphForYear(data[year], year, {
      graphTheme,
      graphMountElement,
      graphWidth,
      graphHeight,
    });
  });
};

const drawContributionGraphForYear = (data, year, config) => {
  const { graphMountElement, graphWidth, graphHeight, graphTheme } = config;

  const draw = SVG().addTo(graphMountElement).size(graphWidth, graphHeight);

  const dayTextMaxWidth = 28;
  const dayFont = { family: "Helvetica", size: 12 };

  const monthTextMaxHeight = 14;
  const monthFont = { family: "Helvetica", size: 12 };

  const boxWidth = 10;
  const boxHeight = 10;
  const boxGapX = 4;
  const boxGapY = 4;
  const maxBoxesInColumn = 7;

  let offsetX = 0;
  let offsetY = 0;

  // draw days
  let daysOffsetX = offsetX;
  let daysOffsetY;

  for (let y = 0; y < DAYS.length; y++) {
    daysOffsetY =
      (2 * y + 1) * boxHeight + 0.5 * boxHeight + 2 * (y + 1) * boxGapY;

    const text = draw.text(DAYS[y]);
    text.font(dayFont).move(daysOffsetX, daysOffsetY);
  }

  offsetX += dayTextMaxWidth;

  // draw months
  let monthsOffsetX = boxGapX + offsetX;
  let monthsOffsetY = 0;

  for (let x = 0; x < MONTHS.length; x++) {
    const numberOfDaysInMonth = getDaysInMonth(new Date(year, x));
    const { quotient } = getQuotientAndReminder(
      numberOfDaysInMonth,
      maxBoxesInColumn
    );

    const text = draw.text(MONTHS[x]);
    text.font(monthFont).move(monthsOffsetX, monthsOffsetY);

    monthsOffsetX = monthsOffsetX + quotient * (boxWidth + boxGapX) + boxGapX;
  }

  offsetY += monthTextMaxHeight;

  // draw boxes
  populateData(data, year);

  const selectedTheme = THEMES[graphTheme];
  const dayOfFirstDayOfYear = getDay(new Date(year, 0, 1));

  let boxOffsetX = offsetX + boxGapX;
  let boxOffsetY = offsetY + boxGapY;

  // paint raw graph
  //   for (let day = 0; day < numberOfDaysInYear; day++) {
  //     for (let y = dayOfFirstDayOfYear; y < maxBoxesInColumn; y++) {
  //       drawContributionBox({
  //         draw,
  //         boxPositionX: boxOffsetX,
  //         boxPositionY: boxOffsetY,
  //       });
  //       boxOffsetY += y * (boxHeight + boxGapY);
  //     }
  //     boxOffsetX += day * (boxWidth + boxGapX);
  //   }

  //   for (let x = 0; x < data.length; x++) {
  //     for (let y = 0; y < maxBoxesInColumn; y++) {
  //       const boxPositionX = x * (boxGap + boxWidth);
  //       const boxPositionY = y * (boxGap + boxHeight);

  //       drawContributionBox({
  //         draw,
  //         boxPositionX,
  //         boxPositionY,
  //         // boxColor: data[y + x * maxBoxesInColumn].color,
  //       });
  //     }
  //   }
};

const drawDays = () => {};
const drawMonths = () => {};
const drawBoxes = () => {};

const drawContributionBox = ({
  draw,
  boxPositionX,
  boxPositionY,
  boxWidth = 10,
  boxHeight = 10,
  boxColor = "#ebedf0",
  boxBorderColor = "#1b1f230f",
  boxBorderWidth = 1,
  boxBorderRadius = 2,
}) => {
  draw.rect(boxWidth, boxHeight).move(boxPositionX, boxPositionY).attr({
    fill: boxColor,
    stroke: boxBorderColor,
    "stroke-width": boxBorderWidth,
    rx: 2,
  });
};

const getQuotientAndReminder = (dividend, divisor) => {
  const rawQuotient = dividend / divisor;
  const reminder = rawQuotient % 1;
  const quotient = rawQuotient - reminder;

  return { quotient, reminder };
};

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

const populateData = (initialData, year) => {
  //   const numberOfDaysInYear = getDaysInYear(new Date(year, 0, 1));
  const daysInMonthInYear = MONTHS.map((month, ind) =>
    getDaysInMonth(new Date(year, ind))
  );

  const filledEnteries = initialData
    .map((d) => ({
      dayIndex: getIndexOfDayInYear(parseISO(d.date), year),
      ...d,
    }))
    .sort((a, b) => a.dayIndex - b.dayIndex);

  let finalArr = [];

  daysInMonthInYear.forEach((month, monthIndex) => {
    for (let day = 1; day <= month; day++) {
      const date = format(new Date(year, monthIndex, day), "yyyy-MM-dd");
      const dayIndex = getIndexOfDayInYear(parseISO(date), year);

      finalArr.push({
        done: 0,
        not_done: 0,
        dayIndex,
        date,
      });
    }
  });

  // update filled values
  filledEnteries.forEach((entry) => {
    finalArr[entry.dayIndex - 1] = entry;
  });

  return finalArr;
};
