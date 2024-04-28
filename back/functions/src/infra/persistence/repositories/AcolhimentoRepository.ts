import { AcolhimentoData } from "./../../../domain/models/Acolhimento";
import {
  Acolhimento,
  AcolhimentoSubcollections,
} from "../../../domain/models/Acolhimento";
import {
  OrderByParam,
  PaginationOptions,
  QueryParam,
  executeQuery,
} from "../../../utils/QueryUtils";
import { acolhimentosCol } from "../FirestoreCollections";
import { IAcolhimentoRepository } from "../interfaces/IAcolhimentoRepository";
import { FieldValue } from "firebase-admin/firestore";
import { createModelFromDoc } from "../../../utils/CreateModelFromDoc";
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
      origem: acolhimento.origem,
      status: acolhimento.status,
      criadoEm: FieldValue.serverTimestamp(),
      regAtivo: true,
      detalhesCadastro: acolhimento.detalhesCadastro,
    });

    const doc = await docRef.get();
    return doc.exists ? createModelFromDoc(doc) : null;
  }

  async findById(id: string): Promise<Acolhimento | null> {
    const doc = await this.collection.doc(id).get();
    if (!doc.exists) {
      return null;
    }

    const detalhesCadastroCollection = this.collection
      .doc(id)
      .collection(AcolhimentoSubcollections.DETALHES_CADASTRO);
    const detalhesCadastroDocs = await detalhesCadastroCollection.get();

    const subcollections = {
      detalhesCadastro: detalhesCadastroDocs,
    };

    return createModelFromDoc<Acolhimento>(doc, subcollections);
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
    return doc.exists ? createModelFromDoc(doc) : null;
  }

  async delete(id: string): Promise<void> {
    await this.collection.doc(id).delete();
  }
}
