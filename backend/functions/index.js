const express = require("express");

const {initializeApp} = require("firebase/app");
const {onRequest} = require("firebase-functions/v2/https");
// const {onDocumentWritten} = require("firebase-functions/v2/firestore");
const logger = require("firebase-functions/logger");

const app = express();

initializeApp({
  apiKey: "AIzaSyCETiVrezmLrTKI2Yc9hN8Udd8fz2CMjaE",
  authDomain: "moi-3d1cb.firebaseapp.com",
  projectId: "moi-3d1cb",
  storageBucket: "moi-3d1cb.appspot.com",
  messagingSenderId: "363294852315",
  appId: "1:363294852315:web:6b0c7a820a00dd61a538fe",
  measurementId: "G-PLM9J25RQQ",
});

app.get("/helloworld", (request, response) => {
  logger.info("Hello logs!", {structuredData: true});
  response.send("Hello from Firebase!");
});

exports.api = onRequest(app);
