import * as admin from "firebase-admin";
console.log("Initializing Firebase Admin SDK");
admin.initializeApp();

import express, {
    Response as ExResponse,
    Request as ExRequest,
    NextFunction,
} from "express";
import { ValidateError } from "tsoa";
import * as functions from "firebase-functions";
import { RegisterRoutes } from "./routes/routes";
import swaggerUI from "swagger-ui-express";
import * as swaggerJson from "./swagger/swagger.json";
import cors from 'cors';

const app = express();
app.use((req, res, next) => {
  console.log(`Received request: ${req.method} ${req.url}`);
  next();
});

app.use(cors({
  origin: '*' 
}));


app.use(express.json());
RegisterRoutes(app);
app.use(["/docs/"], swaggerUI.serve, swaggerUI.setup(swaggerJson));

app.use(function errorHandler(
  err: unknown,
  req: ExRequest,
  res: ExResponse,
  next: NextFunction
): ExResponse | void {
  if (err instanceof ValidateError) {
    console.warn(`Caught Validation Error for ${req.path}:`, err.fields);
    return res.status(400).json({
      message: "Validation Failed",
      details: err?.fields,
    });
  }
  if (err instanceof Error) {
    return res.status(500).json({
      message: err.message,
    });
  }

  next();
});

export const api = functions.https.onRequest(app);
