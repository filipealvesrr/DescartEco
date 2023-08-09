const express = require("express");
const descartEco = express();

// CONFIGURAÇÕES DO FIREBASE

const admin = require("firebase-admin");
const serviceAccount = require("./database/descarteco-48033-firebase-adminsdk-mvske-07aebc618c.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();


// RECEBER REQ.BODY
descartEco.use(express.urlencoded({ extended: true }));
// ESTILOS
descartEco.use(express.static("public"));

const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
    express: descartEco,
    noCache: true
});

// ROTAS
descartEco.get("/", (req, res) => {
   return res.render("index.html");
});

descartEco.get("/register", (req, res) => {
    return res.render("register.html");
});

descartEco.post("/success", (req, res) => {
    const newPoint = db.collection('places')
    let { name, address, complement, city, email, whats, itens } = req.body;
    
    if(Array.isArray(itens)) {
        itens = itens.join(", ")
    }

    const pointData = {
        name,
        address,
        complement,
        city,
        email, 
        whats,
        itens
    }
    
    newPoint.add(pointData).then((doc) => {
        console.log('Documento adicionado com ID:', doc.id);
        return res.render("register.html", { success: true})
    }).catch((err) => {
        console.error('Erro ao adicionar documento:', err);
    });


});

descartEco.get("/points", (req, res) => {
    const city = req.query.city;
    const pointsCollection = db.collection('places');

    pointsCollection.where('city', '==', city).get().then((snapshot) => {
        const points = [];
        snapshot.forEach(doc => points.push(doc.data()));

        return res.render("collectionPoints.html", {points, city});
    }).catch((err) => {
        console.error("Erro ao obter os dados de coleta:", err);
        res.status(500).json({ err: 'Ocorreu um erro ao obter os pontos de coleta.' });
    });
});

descartEco.get("/about-us", (req, res) => {
    return res.render("aboutUs.html");
});

descartEco.get("/know-more", (req, res) => {
    return res.render("knowMore.html");
});


descartEco.listen(2000);