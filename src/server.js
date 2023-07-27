const express = require("express")
const descartEco = express()

// ESTILOS
descartEco.use(express.static("public"))

// ROTAS
descartEco.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html")
})

descartEco.listen(2000)