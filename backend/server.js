const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb://127.0.0.1:27017/portfolio")

const Project = mongoose.model("Project", {
  title: String,
  desc: String,
  image: String
})

app.get("/projects", async (req, res) => {
  res.json(await Project.find())
})

app.post("/projects", async (req, res) => {
  const p = new Project(req.body)
  await p.save()
  res.json(p)
})

app.listen(5000, () => console.log("Server running"))
mongoose.connect(process.env.MONGO_URI)
