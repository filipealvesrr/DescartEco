const express = require("express")
const descartEco = express()

// ESTILOS
descartEco.use(express.static("public"))

const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
    express: descartEco,
    noCache: true
})

// ROTAS
descartEco.get("/", (req, res) => {
   return res.render("index.html")
})

descartEco.get("/register", (req, res) => {
    return res.render("register.html")
})

descartEco.get("/points", (req, res) => {
    return res.render("collectionPoints.html")
})

descartEco.get("/about-us", (req, res) => {
    return res.render("aboutUs.html")
})

descartEco.get("/know-more", (req, res) => {
    return res.render("knowMore.html")
})


descartEco.listen(2000)