import { AcolhimentoData } from "./../../../domain/models/Acolhimento";
import { Acolhimento } from "../../../domain/models/Acolhimento";
import {
  OrderByParam,
  PaginationOptions,
  QueryParam,
  executeQuery,
} from "../../../utils/QueryUtils";
import { acolhimentosCol } from "../FirestoreCollections";
import { IAcolhimentoRepository } from "../interfaces/IAcolhimentoRepository";
import { FieldValue } from "firebase-admin/firestore";
import { createEntityFromDoc } from "../../../utils/CreateEntityFromDoc";
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

  async save(acolhimento: AcolhimentoData): Promise<Acolhimento | null> {
    const docRef = await this.collection.add({
      nome: acolhimento.nome,
      demandas: acolhimento.demandas,
      criado_em: FieldValue.serverTimestamp(),
      atualizado_em: FieldValue.serverTimestamp(),
    });

    const doc = await docRef.get();
    return doc.exists ? createEntityFromDoc(doc) : null;
  }

  async findById(id: string): Promise<Acolhimento | null> {
    const doc = await this.collection.doc(id).get();
    return doc.exists ? createEntityFromDoc(doc) : null;
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
    return doc.exists ? createEntityFromDoc(doc) : null;
  }

  async delete(id: string): Promise<void> {
    await this.collection.doc(id).delete();
  }
}
