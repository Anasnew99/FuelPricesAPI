const express = require("express");
const bodyParser = require("body-parser");
const { STATES } = require("./config/constants");
const { getFuelPrice } = require("./lib");
const listOfSupportedStates = Object.values(STATES);
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/supportedStates", (req, res) => {
  return res.status(200).json({ data: listOfSupportedStates });
});

app.get("/fuel", async (req, res) => {
  const state = req.query.state;
  if (listOfSupportedStates.includes(state)) {
    try {
      const { data, source } = await getFuelPrice(state);
      return res.status(200).json({ data: data, source: source });
    } catch (error) {
      return res.status(400).json(error);
    }
  } else {
    return res.status(404).json({ msg: "Invalid State" });
  }
});

app.listen(8080, () => {
  console.log("Server listening on port 8080");
});
