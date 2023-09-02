"use strict";

import { format, getDay, getDaysInMonth, parseISO } from "date-fns";
import { MONTHS, DAYS } from "./utils/constants.js";
import { THEMES } from "./utils/themes.js";
import getIndexOfDayInYear from "./utils/getIndexOfDayInYear.js";
import getBoxColor from "./utils/getBoxColor.js";
import getQuotientAndReminder from "./utils/getQuotientAndReminder.js";

export default function drawContributionGraph({
  data,
  ssr = false,
  config: {
    graphTheme = "standard",
    graphMountElement = "body",
    graphWidth = 723,
    graphHeight = 113,
  } = {},
}) {
  const years = Object.keys(data).sort((a, b) => b - a);
  if (!years.length) return;

  let allSvgs = "";

  years.forEach((year) => {
    const svg = drawContributionGraphForYear(data[year], ssr, year, {
      graphTheme,
      graphMountElement,
      graphWidth,
      graphHeight,
    });
    allSvgs += svg;
  });

  if (!ssr) {
    const mountElem = document.querySelector(graphMountElement);
    const tempContainer = document.createElement("div");
    tempContainer.innerHTML = allSvgs;
    while (tempContainer.firstChild) {
      mountElem.appendChild(tempContainer.firstChild);
    }
    drawTooltip();
  } else {
    return allSvgs;
  }
}

const drawContributionGraphForYear = (data, ssr, year, config) => {
  const { graphMountElement, graphWidth, graphHeight, graphTheme } = config;

  let graphSvgString = "";

  const dayTextMaxWidth = 28;
  // const dayFont = { family: "Helvetica", size: 10 };

  const monthTextMaxHeight = 14;
  // const monthFont = { family: "Helvetica", size: 10 };

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

    graphSvgString += createTextNode({
      label: DAYS[y],
      xPos: daysOffsetX,
      yPos: daysOffsetY + 9,
    });
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

    graphSvgString += createTextNode({
      label: MONTHS[x],
      xPos: monthsOffsetX,
      yPos: monthsOffsetY + 9,
    });

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
      const boxData = populatedData[currBoxIndex];

      if (boxData) {
        const { done, date, color } = boxData;
        const tooltipText = done
          ? `${done} contributions on ${format(parseISO(date), "PPPP")}`
          : `no contributions on ${format(parseISO(date), "PPPP")}`;

        graphSvgString += createRectNode({
          xPos: boxOffsetX,
          yPos: boxOffsetY,
          fill: color,
          tooltipText,
          date: date,
        });
      }
      currBoxIndex++;
      boxOffsetY += boxHeight + boxGapY;
    }
    boxOffsetX += boxWidth + boxGapX;
  }

  const svgString = createYearGraphNode({
    width: graphWidth,
    height: graphHeight,
    children: graphSvgString,
  });

  return svgString;
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

// svg nodes

const createTextNode = ({
  fontFamily = "Helvetica",
  fontSize = 10,
  label,
  xPos,
  yPos,
}) => {
  return `
    <text font-family="${fontFamily}" font-size="${fontSize}" x="${xPos}" y="${yPos}">
      <tspan dy="0" x="${xPos}">${label}</tspan>
    </text>
  `;
};

const createRectNode = ({
  width = 10,
  height = 10,
  xPos,
  yPos,
  fill,
  stroke = "#1b1f230f",
  strokeWidth = 1,
  borderRadius = 2,
  tooltipText,
  date,
  classNames,
}) => {
  return `
  <rect
    width="${width}"
    height="${height}" 
    x="${xPos}" y="${yPos}" 
    fill="${fill}" stroke="${stroke}" stroke-width="${strokeWidth}" rx="${borderRadius}" 
    ${tooltipText ? `data-tooltip-text="${tooltipText}"` : ""}
    ${date ? `data-date="${date}"` : ""} 
    class="${`github-contribution-graph-box-${date} ${
      classNames ? classNames : ""
    }`}"></rect>
  `;
};

const createYearGraphNode = ({ width, height, children }) => {
  return `
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    version="1.1"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 ${width} ${height}"
    width="${width}" height="${height}"
    >${children}</svg>
  `;
};

// TOOLTIP

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
