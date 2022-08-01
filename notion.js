const express = require("express");
const app = express();
const fetch = require("node-fetch");
const cors = require("cors");
const port = 3000;

// fetch("https://api.notion.com/v1/databases/93289ee7e7154c419b2bf8aedfbffeb9", {
//   method: "GET", // *GET, POST, PUT, DELETE, etc.
//   // mode: "cors", // no-cors, *cors, same-origin
//   //     cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
//   // credentials: 'same-origin', // include, *same-origin, omit
//   headers: {
//     "Content-Type": "application/json",
//     Authorization: "Bearer secret_Jl2sFtLscqQ6ljb3KCrKLASzVHKUF8hf0aRM71ugVUt",
//     "Notion-Version": "2021-08-16",
//   },
//   // redirect: 'follow', // manual, *follow, error
//   // referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
//   // body: JSON.stringify(data) // body data type must match "Content-Type" header
// })
//   .then((response) => response.json())
//   .then((data) => console.log(data));

// console.log("response?", response.body.json());

app.use(
  cors({
    origin: "http://localhost:8080",
  })
);

app.get("/", async (req, res) => {
  try {
    let response = await fetch(
      "https://api.notion.com/v1/databases/93289ee7e7154c419b2bf8aedfbffeb9/query",
      {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        // mode: "cors", // no-cors, *cors, same-origin
        //     cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        // credentials: 'same-origin', // include, *same-origin, omit
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer secret_Jl2sFtLscqQ6ljb3KCrKLASzVHKUF8hf0aRM71ugVUt",
          "Notion-Version": "2021-08-16",
        },
        // redirect: 'follow', // manual, *follow, error
        // referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        // body: JSON.stringify(data) // body data type must match "Content-Type" header
      }
    )
      .then((response) => response.json())
      .then((data) => data);

    res.send(response);
  } catch (error) {
    res.send(error);
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
