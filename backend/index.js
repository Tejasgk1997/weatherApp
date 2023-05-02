const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");
const PORT = process.env.PORT || 5000;
const apiKey = "46e03e0fb17a891ab80f487fec29e903";

app.use(cors());
app.use(express.static("build"));

app.get("/getWeatherByCityName/:city", async (req, res) => {
  try {
    const response = await fetch(
      `https:///api.openweathermap.org/data/2.5/weather?q=${req.params.city}&appid=${apiKey}`
    );
    const jsonResponse = await response.json();
    return res.send(jsonResponse);
  } catch (e) {
    return res.send({ status: 500, message: e.message });
  }
});

app.listen(PORT, () => console.log(`Backend is running on port ${PORT}.`));
