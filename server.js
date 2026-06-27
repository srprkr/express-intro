const express = require("express");
const app = express()

app.set("view engine", "ejs")

// A simple route
app.get("/", (req, res) => {
  res.send("Hello from Express!")
})

// Start the server
app.listen(3000, () =>  {
  console.log("Listening on http://localhost:3000")
})


app.get("/about", (req, res) => {
  res.send("About page")
});


app.get("/users", (req, res) => {
  const users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" }
  ]
  res.render("users", { users })
})

// users api
app.get("/api/users", (req, res) => {
  res.json([
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" }
  ])
});

// Handle unknown routes
app.use((req, res) => {
  res.status(404).send("Sorry, page not found")
});