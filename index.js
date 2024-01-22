import express from "express";

const app = express();
const port = 80;

//Render the home page "/" index.ejs
app.get("/",(req,res) => {
  res.render("index.ejs")
})

//Make sure that static files are linked to and the CSS shows up.
app.use(express.static("public"));

// Add the routes to handle the skillset
app.get("/skills",(req,res) => {
  res.render("skills.ejs");
})

// Add the routes to handle the projects done
app.get("/projects",(req,res) => {
  res.render("projects.ejs");
})

//Add the routes to handle the render of the certificate page
app.get("/certificates",(req,res) => {
  res.render("certificates.ejs");
})

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
