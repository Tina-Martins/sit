import { createModelFromDoc } from "../../../../utils/CreateModelFromDoc";
import {
  acolhimentosCol,
  demandasCol,
  usuariosCol,
} from "../../../../utils/FirestoreCollections";
import { QueryOptions, executeListQuery } from "../../../../utils/QueryUtils";
import { IDemandaRepository } from "../../ports/out/IDemandaRepository";
import { Demanda } from "../../domain/entities/Demanda";
import { Atendimento } from "../../domain/entities/Atendimento";

export class DemandaRepository implements IDemandaRepository {
  private collection = demandasCol;

  async list(queryOptions: QueryOptions) {
    try {
      return await executeListQuery(this.collection, queryOptions);
    } catch (error: any) {
      console.error(error);
      throw new Error("Erro ao listar demandas!");
    }
  }

  async save(demandaData: Demanda): Promise<Demanda> {
    try {
      if (demandaData.acolhimentoId) {
        const acolhimentoDoc = await acolhimentosCol
          .doc(demandaData.acolhimentoId)
          .get();

        if (!acolhimentoDoc.exists) {
          throw new Error("Acolhimento não encontrado!");
        }
      } else {
        throw new Error("Acolhimento não encontrado!");
      }

      if (demandaData.usuarioId) {
        const userDoc = await usuariosCol.doc(demandaData.usuarioId).get();
        if (!userDoc.exists) {
          throw new Error("Usuário não encontrado!");
        }
      }

      const docRef = await this.collection.add({
        ...demandaData,
        criadoEm: new Date().toISOString(),
        regAtivo: true,
      });

      if (!docRef.id) {
        throw new Error("Erro ao criar demanda!");
      }

      return {
        ...demandaData,
        id: docRef.id,
      };
    } catch (error: any) {
      console.error(error);
      throw new Error("Erro ao criar demanda!");
    }
  }

  async findById(id: string): Promise<Demanda> {
    try {
      const doc = await this.collection.doc(id).get();
      if (!doc.exists) {
        throw new Error("Demanda não encontrado!");
      }

      const atendimentosSnapshot = await this.collection
        .doc(id)
        .collection("atendimentos")
        .get();

      return createModelFromDoc<Demanda>(doc, {
        atendimentos: atendimentosSnapshot,
      });
    } catch (error: any) {
      console.error(error);
      throw new Error("Erro ao buscar demanda!");
    }
  }

  async update(id: string, body: Partial<Demanda>): Promise<Demanda> {
    try {
      const doc = await this.collection.doc(id).get();
      if (!doc.exists) {
        throw new Error("Demanda não encontrado!");
      }

      if (body.usuarioId) {
        const userDoc = await usuariosCol.doc(body.usuarioId).get();
        if (!userDoc.exists) {
          throw new Error("Usuário não encontrado!");
        }
      }

      await this.collection.doc(id).update({
        ...body,
        atualizadoEm: new Date().toISOString(),
      });

      const updatedDoc = await this.collection.doc(id).get();
      return createModelFromDoc<Demanda>(updatedDoc);
    } catch (error: any) {
      console.error(error);
      throw new Error("Erro ao atualizar demanda!");
    }
  }

  async delete(id: string): Promise<void> {
    try {
      const doc = await this.collection.doc(id).get();

      if (!doc.exists) {
        throw new Error("Demanda não encontrado!");
      }

      await this.collection.doc(id).update({
        regAtivo: false,
        atualizadoEm: new Date().toISOString(),
      });
    } catch (error: any) {
      console.error(error);
      throw new Error("Erro ao deletar demanda!");
    }
  }

  async createAtendimento(demandaId: string, atendimentoData: Atendimento): Promise<Atendimento> {
    const docRef = await this.collection
      .doc(demandaId)
      .collection('atendimentos')
      .add(atendimentoData);

    return {
      ...atendimentoData,
      id: docRef.id,
    };
  }

  async updateAtendimento(demandaId: string, atendimentoId: string, atendimentoData: Partial<Atendimento>): Promise<Atendimento> {
    const atendimentoDocRef = this.collection
      .doc(demandaId)
      .collection('atendimentos')
      .doc(atendimentoId);

    await atendimentoDocRef.update(atendimentoData);

    const updatedDoc = await atendimentoDocRef.get();
    return createModelFromDoc<Atendimento>(updatedDoc);
  }

  async deleteAtendimento(demandaId: string, atendimentoId: string): Promise<void> {
    const atendimentoDocRef = this.collection
    .doc(demandaId)
    .collection('atendimentos')
    .doc(atendimentoId);

    await atendimentoDocRef.update({
      regAtivo: false,
      excluidoEm: new Date().toISOString(),
    });
  }
}
