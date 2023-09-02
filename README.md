# Github Contribution Graph

display your data visually with a github like contribution graph.

![example of github contribution graph in action](https://raw.githubusercontent.com/AyushSaini00/github-contribution-graph/main/public/github-contribution-graph.png)

## install

```bash
npm i github-contribution-graph
```

or

```bash
yarn add github-contribution-graph
```

## usage

```js
import drawContributionGraph from "github-contribution-graph";

// for toottip css
// <link rel="stylesheet" href="https://unpkg.com/github-contribution-graph/src/style.css" crossorigin="anonymous">
// or
// import "github-contribution-graph/src/style.css";

drawContributionGraph({
  data,
  ssr: false,
  config: {
    graphMountElement: "#app",
  },
});
```

## demo

- [CSR (Client Side Rendering) demo](https://stackblitz.com/edit/csr-github-contribution-graph-demo?file=index.js)
- [SSR (Server Side Rendering) demo](https://stackblitz.com/edit/ssr-github-contribution-graph-demo?file=pages%2Findex.js)

## api

- `drawContributionGraph(data, ssr, config)`

### data

Type: Object

data to feed the graph, below is an example of the accepted format of the object

```js
const data = {
  2023: [
    {
      done: 12,
      not_done: 4, // it's fine if you keep not_done as 0
      date: "2023-06-07",
    },
    {
      done: 3,
      not_done: 6,
      date: "2023-02-25",
    },
  ],
  2022: [
    {
      done: 7,
      not_done: 3,
      date: "2022-08-01",
    },
  ],
};
```

### ssr
Type: boolean (defaults to `false`)

set to true if you want to use this package in server side rendering

### config

Type: object
children types : string or number

#### graphWidth

(defaults to `723`)

width of the contribution graph

#### graphHeight

(defaults to `113`)

height of the contribution graph

#### graphMountElement

(defaults to `body`)

the css selector of the element to which the contribution graph to be appended

#### graphTheme

(defaults to `standard`)

theme of the graph (check in utils/themes.js for available themes)
