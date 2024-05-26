import * as admin from "firebase-admin";
import { DocumentData } from "firebase-admin/firestore";

import { Acolhimento } from "../core/acolhimentos/domain/entities/Acolhimento";
import { Usuario } from "../core/usuarios/domain/entities/Usuario";
import { Demanda } from "../core/acolhimentos/domain/entities/Demanda";
import { Evento } from "../core/calendario/domain/entities/Evento";

export const firestore = admin.firestore();

const createCollection = <T = DocumentData>(collectionName: string) => {
  return firestore.collection(
    collectionName
  ) as admin.firestore.CollectionReference<T>;
};

export const acolhimentosCol = createCollection<Acolhimento>("acolhimentos");
export const usuariosCol = createCollection<Usuario>("usuarios");
export const demandasCol = createCollection<Demanda>("demandas");
export const eventosCol = createCollection<Evento>("eventos");
