import {
  SVG,
  extend as SVGextend,
  Element as SVGElement,
} from "@svgdotjs/svg.js";
import { getDaysInMonth } from "date-fns";
import { de } from "date-fns/locale";

const THEMES = {
  standard: {
    background: "#ffffff",
    text: "#000000",
    boxBorderColor: "#1b1f230f",
    level0: "#ebedf0",
    level1: "#9be9a8",
    level2: "#40c463",
    level3: "#30a14e",
    level4: "#216e39",
  },
};

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
  const boxElement = draw
    .rect(boxWidth, boxHeight)
    .move(boxPositionX, boxPositionY)
    .attr({
      fill: boxColor,
      stroke: boxBorderColor,
      "stroke-width": boxBorderWidth,
      rx: 2,
    });
};

const drawMonths = (draw) => {};

const drawContributionGraphForYear = (data, year, config) => {
  const { graphMountElement, graphWidth, graphHeight, graphTheme } = config;

  const draw = SVG().addTo(graphMountElement).size(graphWidth, graphHeight);
  const selectedTheme = THEMES[graphTheme];

  //   const dayTextHeight = 10;
  const dayTextMaxWidth = 28;
  const dayFont = { family: "Helvetica", size: 12 };

  const monthFont = { family: "Helvetica", size: 12 };

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

  const DAYS = ["Mon", "Wed", "Fri"];

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

  const MONTHS = [
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
  ];

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

  // draw boxes
  let boxOffsetX = offsetX;
  let boxOffsetY = offsetY;

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

const getQuotientAndReminder = (dividend, divisor) => {
  const rawQuotient = dividend / divisor;
  const reminder = rawQuotient % 1;
  const quotient = rawQuotient - reminder;

  return { quotient, reminder };
};

export const drawContributionGraph = ({
  data,
  config: {
    graphTheme = "standard",
    graphMountElement = "body",
    graphWidth = 717,
    graphHeight = 88,
  } = {},
}) => {
  // sort year high to low
  const years = Object.keys(data)
    .sort((a, b) => a - b)
    .reverse();

  years.forEach((year) => {
    drawContributionGraphForYear(data, year, {
      graphTheme,
      graphMountElement,
      graphWidth,
      graphHeight,
    });
  });
};
