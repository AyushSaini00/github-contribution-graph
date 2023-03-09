import { SVG } from "@svgdotjs/svg.js";
import {
  format,
  getDate,
  getDay,
  getDaysInMonth,
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
    graphWidth = 723,
    graphHeight = 113,
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

  drawTooltip();
};

const drawContributionGraphForYear = (data, year, config) => {
  const { graphMountElement, graphWidth, graphHeight, graphTheme } = config;

  const draw = SVG().addTo(graphMountElement).size(graphWidth, graphHeight);

  const dayTextMaxWidth = 28;
  const dayFont = { family: "Helvetica", size: 10 };

  const monthTextMaxHeight = 14;
  const monthFont = { family: "Helvetica", size: 10 };

  const boxWidth = 10;
  const boxHeight = 10;
  const boxGapX = 3;
  const boxGapY = 3;
  const maxBoxesInColumn = 7;

  let offsetX = 0;
  let offsetY = 0;

  // draw days
  let daysOffsetX = offsetX;
  let daysOffsetY;

  for (let y = 0; y < DAYS.length; y++) {
    daysOffsetY =
      (2 * y + 1) * boxHeight + 2 * (y + 1) * boxGapY + monthTextMaxHeight;

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
  const populatedData = populateData(data, year, graphTheme);
  const dayOfFirstDayOfYear = getDay(new Date(year, 0, 1));
  let totalColumns = Math.ceil(populatedData.length / maxBoxesInColumn);
  if (dayOfFirstDayOfYear > 0) {
    totalColumns += 1;
  }

  let boxOffsetX = offsetX + boxGapX;
  let currBoxIndex = 0;

  for (let x = 0; x < totalColumns; x++) {
    let boxOffsetY =
      x === 0
        ? offsetY + boxGapY + dayOfFirstDayOfYear * (boxHeight + boxGapY)
        : offsetY + boxGapY;

    let loopInitializer = x === 0 ? dayOfFirstDayOfYear : 0;
    let loopCondition = maxBoxesInColumn;

    for (let y = loopInitializer; y < loopCondition; y++) {
      drawContributionBox({
        draw,
        boxPositionX: boxOffsetX,
        boxPositionY: boxOffsetY,
        boxData: populatedData[currBoxIndex],
      });
      currBoxIndex++;
      boxOffsetY += boxHeight + boxGapY;
    }
    boxOffsetX += boxWidth + boxGapX;
  }
};

const drawContributionBox = ({
  draw,
  boxPositionX,
  boxPositionY,
  boxWidth = 10,
  boxHeight = 10,
  boxBorderColor = "#1b1f230f",
  boxBorderWidth = 1,
  boxBorderRadius = 2,
  boxData,
}) => {
  if (!boxData) return;
  const { color, done, date } = boxData;

  const tooltipText = done
    ? `${done} contributions on ${format(parseISO(date), "PPPP")}`
    : `no contributions on ${format(parseISO(date), "PPPP")}`;

  const boxElement = draw
    .rect(boxWidth, boxHeight)
    .move(boxPositionX, boxPositionY)
    .attr({
      fill: color,
      stroke: boxBorderColor,
      "stroke-width": boxBorderWidth,
      rx: boxBorderRadius,
    })
    .data({
      "tooltip-text": tooltipText,
      date: date,
    });

  boxElement.addClass(`github-contribution-graph-box-${date}`);
  boxElement.mouseover((e) => {
    showTooltip(tooltipText, boxPositionX, boxPositionY);
  });
  boxElement.mouseout((e) => {
    hideTooltip();
  });
};

const drawTooltip = () => {
  const tooltipElement = document.createElement("div");
  tooltipElement.classList.add("github-contribution-graph-tooltip");
  tooltipElement.style.visibility = "hidden";
  document.body.appendChild(tooltipElement);
};

const showTooltip = (tooltipText, x, y) => {
  const tooltipElement = document.querySelector(
    ".github-contribution-graph-tooltip"
  );
  tooltipElement.style.visibility = "visible";
  tooltipElement.textContent = tooltipText;
  const offsetHeightElem = tooltipElement.offsetHeight;
  const offsetWidthElem = tooltipElement.offsetWidth;

  //   const leftVal = x - offsetWidthElem / 2 > 0 ? x - offsetWidthElem / 2 : 0;
  //   const topVal =
  //     y - offsetHeightElem > 0 ? y - offsetHeightElem : y + offsetHeightElem;
  const leftVal = x - offsetWidthElem / 2 + 5;
  const topVal = y - offsetHeightElem - 5;

  tooltipElement.style.left = `${leftVal}px`;
  tooltipElement.style.top = `${topVal}px`;
};

const hideTooltip = () => {
  const tooltipElement = document.querySelector(
    ".github-contribution-graph-tooltip"
  );
  tooltipElement.style.visibility = "hidden";
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

const populateData = (initialData, year, graphTheme) => {
  const selectedTheme = THEMES[graphTheme];
  //   const numberOfDaysInYear = getDaysInYear(new Date(year, 0, 1));
  const daysInMonthInYear = MONTHS.map((month, ind) =>
    getDaysInMonth(new Date(year, ind))
  );

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
        color: selectedTheme[`level0`],
      });
    }
  });

  const maxValueOfDone = initialData.sort((a, b) => b.done - a.done)[0].done;
  const filledEnteries = initialData
    .map((d) => ({
      dayIndex: getIndexOfDayInYear(parseISO(d.date), year),
      color: getBoxColor(d.done, maxValueOfDone, selectedTheme),
      ...d,
    }))
    .sort((a, b) => a.dayIndex - b.dayIndex);

  // update filled values
  filledEnteries.forEach((entry) => {
    finalArr[entry.dayIndex - 1] = entry;
  });

  return finalArr;
};

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
