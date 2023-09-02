import express from "express";
const app = express();
import drawContributionGraph from "../dist/github-contribution-graph.umd.js";

app.get("/", (req, res) => {
  try {
    const randomData = {
      generator({ years = [] }) {
        const data = {};
        if (!years.length) return data;

        years.forEach((year) => {
          for (let month = 1; month <= 12; month++) {
            for (let day = 1; day <= this.getDaysInMonth(month, year); day++) {
              const date = `${year}-${this.padZero(month)}-${this.padZero(
                day
              )}`;
              const done = Math.floor(Math.random() * 50) + 1; // Random value between 1 and 50
              const not_done = Math.floor(Math.random() * 10); // Random value between 0 and 9

              if (!data[year]) {
                data[year] = [];
              }
              data[year].push({ done, not_done, date });
            }
          }
        });

        return data;
      },
      getDaysInMonth(month, year) {
        return new Date(year, month, 0).getDate();
      },
      padZero(number) {
        return number.toString().padStart(2, "0");
      },
    };

    const data = randomData.generator({ years: [2023, 2022] });

    const svgString = drawContributionGraph({
      data,
      ssr: true,
      config: {
        //   graphMountElement: "#app",
      },
    });

    const htmlPage = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>github contribution graph</title>
    </head>
    <body>
        <div>github contribution graph server side rendering demo:</div>
        <div>refresh to randomize :)</div>
        <br>
        <br>
        <div id="app">${svgString}</div>
        <br>
        <br>
        <div>check out the <a href="https://www.npmjs.com/package/github-contribution-graph">library</a></div>
    </body>
    </html>
    `;

    res.send(htmlPage);
  } catch (err) {
    console.log(err);
  }
});

// Start the server
const PORT = 5431;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
