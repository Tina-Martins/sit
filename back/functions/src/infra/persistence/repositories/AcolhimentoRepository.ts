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
import { createModelFromDoc } from "../../../utils/CreateModelFromDoc";
import { AcolhimentoStatus } from "../../../domain/models/Enums/AcolhimentoEnums";
export class AcolhimentoRepository implements IAcolhimentoRepository {
  private collection = acolhimentosCol;

  async findByFilter(
    queryParams: QueryParam[],
    orderByParams: OrderByParam[],
    paginationOptions: PaginationOptions
  ) {
    try {
      return await executeQuery(
        this.collection,
        queryParams,
        orderByParams,
        paginationOptions
      );
    } catch (error) {
      console.error("Erro ao buscar acolhimentos com filtro:", error);
      return {
        data: [],
        lastDocRef: null,
      };
    }
  }

  async save(acolhimentoData: Acolhimento): Promise<Acolhimento | null> {
    try {
      const docRef = await this.collection.add({
        ...acolhimentoData,
        criadoEm: FieldValue.serverTimestamp(),
        status: AcolhimentoStatus.ATIVO,
        regAtivo: true,
      });

      return {
        ...acolhimentoData,
        id: docRef.id,
      };
    } catch (error) {
      console.error("Erro ao salvar acolhimento:", error);
      return null;
    }
  }

  async findById(id: string): Promise<Acolhimento | null> {
    try {
      const doc = await this.collection.doc(id).get();
      if (!doc.exists) {
        console.log("Acolhimento não encontrado:", id);
        return null;
      }

      return createModelFromDoc<Acolhimento>(doc);
    } catch (error) {
      console.error("Erro ao encontrar acolhimento:", error);
      return null;
    }
  }

  async update(
    id: string,
    body: Partial<Acolhimento>
  ): Promise<Acolhimento | null> {
    try {
      const doc = await this.collection.doc(id).get();
      if (!doc.exists) {
        console.log("Acolhimento não encontrado:", id);
        return null;
      }

      await this.collection.doc(id).update({
        ...body,
        atualizadoEm: FieldValue.serverTimestamp(),
      });

      const updatedDoc = await this.collection.doc(id).get();
      return updatedDoc.exists
        ? createModelFromDoc<Acolhimento>(updatedDoc)
        : null;
    } catch (error) {
      console.error("Erro ao atualizar acolhimento:", error);
      return null;
    }
  }

  async delete(id: string): Promise<void> {
    try {
      await this.collection.doc(id).update({
        regAtivo: false,
        atualizadoEm: FieldValue.serverTimestamp(),
      });
    } catch (error) {
      console.error("Erro ao deletar acolhimento:", error);
    }
  }
}
