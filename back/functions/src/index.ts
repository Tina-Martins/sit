import * as admin from "firebase-admin";
console.log("Initializing Firebase Admin SDK");
admin.initializeApp();

import { https } from "firebase-functions";
import app from "./app";

export const api = https.onRequest(app);
