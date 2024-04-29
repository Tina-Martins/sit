import { QueryOptions } from "./../../../utils/QueryUtils";
import { Acolhimento } from "../../../domain/models/Acolhimento";
import { executeListQuery } from "../../../utils/QueryUtils";
import { acolhimentosCol } from "../FirestoreCollections";
import { IAcolhimentoRepository } from "../interfaces/IAcolhimentoRepository";
import { FieldValue } from "firebase-admin/firestore";
import { createModelFromDoc } from "../../../utils/CreateModelFromDoc";
import { AcolhimentoStatus } from "../../../domain/models/Enums/AcolhimentoEnums";
export class AcolhimentoRepository implements IAcolhimentoRepository {
  private collection = acolhimentosCol;

  async list(queryOptions: QueryOptions) {
    try {
      return await executeListQuery(this.collection, queryOptions);
    } catch (error: any) {
      console.error(error);
      throw new Error("Erro ao lsitar acolhimentos!");
    }
  }

  async save(acolhimentoData: Acolhimento): Promise<Acolhimento> {
    try {
      const docRef = await this.collection.add({
        ...acolhimentoData,
        criadoEm: FieldValue.serverTimestamp(),
        status: AcolhimentoStatus.ATIVO,
        regAtivo: true,
      });

      if (!docRef.id) {
        throw new Error("Erro ao criar acolhimento!");
      }

      return {
        ...acolhimentoData,
        id: docRef.id,
      };
    } catch (error: any) {
      console.error(error);
      throw new Error("Erro ao criar acolhimento!");
    }
  }

  async findById(id: string): Promise<Acolhimento> {
    try {
      const doc = await this.collection.doc(id).get();
      if (!doc.exists) {
        throw new Error("Acolhimento não encontrado!");
      }

      return createModelFromDoc<Acolhimento>(doc);
    } catch (error: any) {
      console.error(error);
      throw new Error("Erro ao buscar acolhimento!");
    }
  }

  async update(id: string, body: Partial<Acolhimento>): Promise<Acolhimento> {
    try {
      const doc = await this.collection.doc(id).get();
      if (!doc.exists) {
        throw new Error("Acolhimento não encontrado!");
      }

      await this.collection.doc(id).update({
        ...body,
        atualizadoEm: FieldValue.serverTimestamp(),
      });

      const updatedDoc = await this.collection.doc(id).get();
      return createModelFromDoc<Acolhimento>(updatedDoc);
    } catch (error: any) {
      console.error(error);
      throw new Error("Erro ao atualizar acolhimento!");
    }
  }

  async delete(id: string): Promise<void> {
    try {
      const doc = await this.collection.doc(id).get();

      if (!doc.exists) {
        throw new Error("Acolhimento não encontrado!");
      }

      await this.collection.doc(id).update({
        regAtivo: false,
        atualizadoEm: FieldValue.serverTimestamp(),
      });
    } catch (error: any) {
      console.error(error);
      throw new Error("Erro ao deletar acolhimento!");
    }
  }
}
