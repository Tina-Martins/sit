import { Acolhimento } from "../../../domain/models/Acolhimento";
import {
  OrderByParam,
  PaginationOptions,
  QueryParam,
  executeQuery,
} from "../../../utils/QueryUtils";
import { acolhimentosCol } from "../FirestoreCollections";
import { IAcolhimentoRepository } from "../interfaces/IAcolhimentoRepository";
import { v4 as uuidv4 } from "uuid";
export class AcolhimentoRepository implements IAcolhimentoRepository {
  private collection = acolhimentosCol;

  async findByFilter(
    queryParams: QueryParam[],
    orderByParams: OrderByParam[],
    paginationOptions: PaginationOptions
  ) {
    return executeQuery(
      this.collection,
      queryParams,
      orderByParams,
      paginationOptions
    );
  }

  async save(acolhimento: Acolhimento): Promise<Acolhimento> {
    const doc = await this.collection.add({
      id: uuidv4(),
      nome: acolhimento.nome,
      demandas: acolhimento.demandas,
      criado_em: new Date(),
      atualizado_em: new Date(),
    });
    return new Acolhimento(
      doc.id,
      acolhimento.nome,
      acolhimento.demandas,
      acolhimento.criado_em,
      acolhimento.atualizado_em
    );
  }

  async findAll(): Promise<Acolhimento[]> {
    const snapshot = await this.collection.get();
    if (snapshot.empty) {
      return [];
    }
    return snapshot.docs.map(
      (doc) =>
        new Acolhimento(
          doc.id,
          doc.data().nome,
          doc.data().demandas,
          doc.data().criado_em,
          doc.data().atualizado_em
        )
    );
  }

  async findByTipoDemanda(tipoDemanda: string): Promise<Acolhimento[]> {
    const snapshot = await this.collection
      .where("demandas", "array-contains", tipoDemanda)
      .get();
    if (snapshot.empty) {
      return [];
    }
    return snapshot.docs.map(
      (doc) =>
        new Acolhimento(
          doc.id,
          doc.data().nome,
          doc.data().demandas,
          doc.data().criado_em,
          doc.data().atualizado_em
        )
    );
  }

  async findById(id: string): Promise<Acolhimento | null> {
    const doc = await this.collection.doc(id).get();
    if (!doc.exists) {
      return null;
    }
    const data = doc.data()!;
    return new Acolhimento(
      id,
      data.nome,
      data.demandas,
      data.criado_em,
      data.atualizado_em
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
      doc.data().nome,
      doc.data().demandas,
      doc.data().criado_em,
      doc.data().atualizado_em
    );
  }

  async update(
    id: string,
    body: Partial<Acolhimento>
  ): Promise<Acolhimento | null> {
    const doc = await this.collection.doc(id).get();
    if (!doc.exists) {
      return null;
    }
    await this.collection.doc(id).update({
      ...body,
      atualizado_em: new Date(),
    });
    return new Acolhimento(
      id,
      body.nome || doc.data()!.nome,
      body.demandas || doc.data()!.demandas,
      doc.data()!.criado_em,
      new Date()
    );
  }

  async delete(id: string): Promise<void> {
    await this.collection.doc(id).delete();
  }
}
