import { Acolhimento } from "../../../domain/models/Acolhimento";
import { IAcolhimentoRepository } from "../interfaces/IAcolhimentoRepository";
import * as admin from "firebase-admin";

export class AcolhimentoRepository implements IAcolhimentoRepository {
  private db = admin.firestore();
  private collection = this.db.collection("acolhimentos");

  async findByTipoDemanda(tipoDemanda: string): Promise<Acolhimento[]> {
    const snapshot = await this.collection
      .where("tipo_demanda", "==", tipoDemanda)
      .get();
    if (snapshot.empty) {
      return [];
    }
    return snapshot.docs.map(
      (doc) =>
        new Acolhimento(
          doc.id,
          doc.data().name,
          doc.data().description,
          doc.data().date,
          doc.data().tipoDemanda
        )
    );
  }

  async findById(id: string): Promise<Acolhimento | null> {
    const doc = await this.collection.doc(id).get();
    if (!doc.exists) {
      return null;
    }
    return new Acolhimento(
      doc.id,
      doc.data()!.nome,
      doc.data()!.demandas,
      doc.data()!.criado_em,
      doc.data()!.atualizado_em
    );
  }

  async findByNome(nome: string): Promise<Acolhimento | null> {
    const snapshot = await this.collection.where("nome", "==", nome).get();
    if (snapshot.empty) {
      return null;
    }
    const doc = snapshot.docs[0];
    return new Acolhimento(
      doc.id,
      doc.data().name,
      doc.data().description,
      doc.data().date,
      doc.data().tipoDemanda
    );
  }

  async save(acolhimento: Acolhimento): Promise<Acolhimento> {
    const docRef = await this.collection.add({
      nome: acolhimento.nome,
      demandas: acolhimento.demandas,
      criado_em: acolhimento.criado_em,
      atualizado_em: acolhimento.atualizado_em,
    });
    return new Acolhimento(
      docRef.id,
      acolhimento.nome,
      acolhimento.demandas,
      acolhimento.criado_em,
      acolhimento.atualizado_em
    );
  }
}
