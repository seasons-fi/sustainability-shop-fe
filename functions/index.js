const functions = require("firebase-functions");
const express = require("express");
const app = express();
const fetch = require("node-fetch");
const cors = require("cors")({ origin: true });
const port = 3000;

// app.use(
//   cors({
//     origin: "*",
//   })
// );

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.notion = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", { structuredData: true });
  cors(request, response, async () => {
    // your function body here - use the provided req and res from cors
    try {
      const responseNotion = await fetch(
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
        .then((responseNotion) => responseNotion.json())
        .then((data) => data);

      console.log("responseNotion", responseNotion);
      response.send(responseNotion);
    } catch (error) {
      response.send(error);
    }
  });

  //   response.send("Hello from Firebase!");
});

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

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`);
// });
