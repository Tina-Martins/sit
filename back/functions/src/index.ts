import * as admin from "firebase-admin";
console.log("Initializing Firebase Admin SDK");
admin.initializeApp();

import { https } from "firebase-functions";
import app from "./infra/web/routes";

export const api = https.onRequest(app);
