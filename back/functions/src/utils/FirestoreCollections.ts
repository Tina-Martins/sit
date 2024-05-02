import * as admin from "firebase-admin";
import { DocumentData } from "firebase-admin/firestore";

import { Acolhimento } from "../core/acolhimentos/domain/entities/Acolhimento";

export const firestore = admin.firestore();

const createCollection = <T = DocumentData>(collectionName: string) => {
  return firestore.collection(
    collectionName
  ) as admin.firestore.CollectionReference<T>;
};

export const acolhimentosCol = createCollection<Acolhimento>("acolhimentos");
