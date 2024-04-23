import * as admin from "firebase-admin";
import { DocumentData } from "firebase-admin/firestore";

import { Acolhimento } from "../../domain/models/Acolhimento";

export const firestore = admin.firestore();

// This is just a helper to add the type to the db responses
const createCollection = <T = DocumentData>(collectionName: string) => {
  return firestore.collection(
    collectionName
  ) as admin.firestore.CollectionReference<T>;
};

export const acolhimentosCol = createCollection<Acolhimento>("acolhimentos");
