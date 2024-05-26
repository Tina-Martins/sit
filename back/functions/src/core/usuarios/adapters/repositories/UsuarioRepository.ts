
import { createModelFromDoc } from "../../../../utils/CreateModelFromDoc";
import { usuariosCol } from "../../../../utils/FirestoreCollections";
import { QueryOptions, executeListQuery } from "../../../../utils/QueryUtils";
import { IUsuarioRepository } from "../../ports/out/IUsuarioRepository";
import { Usuario } from "../../domain/entities/Usuario";

export class UsuarioRepository implements IUsuarioRepository {
  private collection = usuariosCol;

  async list(queryOptions: QueryOptions) {
    try {
      return await executeListQuery(this.collection, queryOptions);
    } catch (error: any) {
      console.error(error);
      throw new Error("Erro ao listar usuarios!");
    }
  }

  async save(usuarioData: Usuario): Promise<Usuario> {
    try {
      const docRef = await this.collection.add({
        ...usuarioData,
        criadoEm: new Date().toISOString(),
        atualizadoEm: new Date().toISOString(),
        regAtivo: true,
      });

      if (!docRef.id) {
        throw new Error("Erro ao criar usuario!");
      }

      return {
        ...usuarioData,
        id: docRef.id,
      };
    } catch (error: any) {
      console.error(error);
      throw new Error("Erro ao criar usuario!");
    }
  }

  async findById(id: string): Promise<Usuario> {
    try {
      const doc = await this.collection.doc(id).get();
      if (!doc.exists) {
        throw new Error("Usuario não encontrado!");
      }

      return createModelFromDoc<Usuario>(doc);
    } catch (error: any) {
      console.error(error);
      throw new Error("Erro ao buscar usuario!");
    }
  }

  async update(id: string, body: Partial<Usuario>): Promise<Usuario> {
    try {
      const doc = await this.collection.doc(id).get();
      if (!doc.exists) {
        throw new Error("Usuario não encontrado!");
      }

      await this.collection.doc(id).update({
        ...body,
        atualizadoEm: new Date().toISOString(),
      });

      const updatedDoc = await this.collection.doc(id).get();
      return createModelFromDoc<Usuario>(updatedDoc);
    } catch (error: any) {
      console.error(error);
      throw new Error("Erro ao atualizar usuario!");
    }
  }

  async delete(id: string): Promise<void> {
    try {
      const doc = await this.collection.doc(id).get();

      if (!doc.exists) {
        throw new Error("Usuario não encontrado!");
      }

      await this.collection.doc(id).update({
        regAtivo: false,
        excluidoEm: new Date().toISOString(),
      });
    } catch (error: any) {
      console.error(error);
      throw new Error("Erro ao deletar usuario!");
    }
  }
}
  