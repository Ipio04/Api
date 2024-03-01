/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
const functions = require("firebase-functions");
const express = require("express");
const app = express();

let resources = [
  { id: 1, name: "sample data one" },
  { id: 2, name: "sample data two" },
  { id: 3, name: "sample data three" }
];

// Define your API endpoints
app.get("/api/resource", (req, res) => {
  res.json(resources);
});

// get with specific id
app.get("/api/resource/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const resource = resources.find((r) => r.id === id);

  if (resource) {
    res.json(resource);
  } else {
    res.status(404).json({ message: "Resource not found" });
  }
});

// define post requset
app.post("/api/resource", (req, res) => {
  const { id, name } = req.body;
  const newResource = { id, name };
  resources.push(newResource);
  res.status(201).json(newResource);
});


// define put request
app.put("/api/resource/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const updatedResource = req.body;

  resources = resources.map((r) => {
    if (r.id === id) {
      return { ...r, ...updatedResource };
    } else {
      return r;
    }
  });

  res.json(updatedResource);
});


// define delete request
app.delete("/api/resource/:id", (req, res) => {
  const id = parseInt(req.params.id);
  resources = resources.filter((r) => r.id !== id);
  res.status(204).end();
});


exports.api = functions.https.onRequest(app);