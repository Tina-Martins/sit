import { createModelFromDoc } from "../../../../utils/CreateModelFromDoc";
import { eventosCol } from "../../../../utils/FirestoreCollections";
import { QueryOptions, executeListQuery } from "../../../../utils/QueryUtils";
import { IEventoRepository } from "../../ports/out/IEventoRepository";
import { Evento } from "../../domain/entities/Evento";

export class EventoRepository implements IEventoRepository {
  private collection = eventosCol;

  async list(queryOptions: QueryOptions) {
    try {
      return await executeListQuery(this.collection, queryOptions);
    } catch (error: any) {
      console.error(error);
      throw new Error("Erro ao listar eventos!");
    }
  }

  async save(eventoData: Evento): Promise<Evento> {
    try {
      const isEventoValid = await this.validateEvento(eventoData);

      if (!isEventoValid) {
        throw new Error("Conflito de horário!");
      }

      const docRef = await this.collection.add({
        ...eventoData,
        regAtivo: true,
      });

      if (!docRef.id) {
        throw new Error("Erro ao criar evento!");
      }

      return {
        ...eventoData,
        id: docRef.id,
      };
    } catch (error: any) {
      console.error(error);
      throw new Error(error.message || "Erro ao criar evento!");
    }
  }

  async findById(id: string): Promise<Evento> {
    try {
      const doc = await this.collection.doc(id).get();
      if (!doc.exists) {
        throw new Error("Evento não encontrado!");
      }

      return createModelFromDoc<Evento>(doc);
    } catch (error: any) {
      console.error(error);
      throw new Error("Erro ao buscar evento!");
    }
  }

  async update(id: string, body: Partial<Evento>): Promise<Evento> {
    try {
      const doc = await this.collection.doc(id).get();
      if (!doc.exists) {
        throw new Error("Evento não encontrado!");
      }

      const isEventoValid = await this.validateEvento({
        ...(doc.data() as Evento),
        ...body,
      });

      if (!isEventoValid) {
        throw new Error("Conflito de horário!");
      }

      await this.collection.doc(id).update({
        ...body,
      });

      const updatedDoc = await this.collection.doc(id).get();
      return createModelFromDoc<Evento>(updatedDoc);
    } catch (error: any) {
      console.error(error);
      throw new Error(error.message || "Erro ao criar evento!");
    }
  }

  async delete(id: string): Promise<void> {
    try {
      const doc = await this.collection.doc(id).get();

      if (!doc.exists) {
        throw new Error("Evento não encontrado!");
      }

      await this.collection.doc(id).update({
        regAtivo: false,
        excluidoEm: new Date().toISOString(),
      });
    } catch (error: any) {
      console.error(error);
      throw new Error("Erro ao deletar evento!");
    }
  }

  private async validateEvento(eventoData: Evento): Promise<boolean> {
    const eventosSnapshot = await this.collection
      .where("local", "==", eventoData.local)
      .where("data", "==", eventoData.data)
      .get();

    const eventos = eventosSnapshot.docs.map((doc) =>
      createModelFromDoc<Evento>(doc)
    );

    const novoInicio = new Date(
      `${eventoData.data}T${eventoData.horaInicio || "00:00:00"}Z`
    ).getTime();
    const novoFim = new Date(
      `${eventoData.data}T${eventoData.horaFim || "23:59:59"}Z`
    ).getTime();

    for (const evento of eventos) {
      const eventoInicio = new Date(
        `${evento.data}T${evento.horaInicio || "00:00:00"}Z`
      ).getTime();
      const eventoFim = new Date(
        `${evento.data}T${evento.horaFim || "23:59:59"}Z`
      ).getTime();

      if (
        (novoInicio < eventoFim && novoFim > eventoInicio) ||
        eventoData.diaTodo ||
        evento.diaTodo
      ) {
        return false;
      }
    }
    return true;
  }
}
