const express = require("express");
const app = express()

// A simple route
app.get("/", (req, res) => {
  res.send("Hello from Express!")
})

// Start the server
app.listen(3000, () =>  {
  console.log("Listening on http://localhost:3000")
})

