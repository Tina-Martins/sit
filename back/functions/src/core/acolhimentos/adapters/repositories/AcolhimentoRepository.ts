import { createModelFromDoc } from "../../../../utils/CreateModelFromDoc";
import { acolhimentosCol } from "../../../../utils/FirestoreCollections";
import { QueryOptions, executeListQuery } from "../../../../utils/QueryUtils";
import { IAcolhimentoRepository } from "../../ports/out/IAcolhimentoRepository";
import { Acolhimento } from "../../domain/entities/Acolhimento";
import { AcolhimentoStatus } from "../../domain/enums/AcolhimentoStatus";


export class AcolhimentoRepository implements IAcolhimentoRepository {
  private collection = acolhimentosCol;

  async list(queryOptions: QueryOptions) {
    try {
      return await executeListQuery(this.collection, queryOptions);
    } catch (error: any) {
      console.error(error);
      throw new Error("Erro ao listar acolhimentos!");
    }
  }

  async save(acolhimentoData: Acolhimento): Promise<Acolhimento> {
    try {
      const docRef = await this.collection.add({
        ...acolhimentoData,
        dataNascimento: new Date(acolhimentoData.dataNascimento!).toISOString(),
        criadoEm: new Date().toISOString(),
        atualizadoEm: new Date().toISOString(),
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
        dataNascimento: new Date(body.dataNascimento!).toISOString(),
        atualizadoEm: new Date().toISOString(),
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
        status: AcolhimentoStatus.ENCERRADO,
        regAtivo: false,
        atualizadoEm: new Date().toISOString(),
        excluidoEm: new Date().toISOString(),
      });
    } catch (error: any) {
      console.error(error);
      throw new Error("Erro ao deletar acolhimento!");
    }
  }
}
