import { Timestamp } from "firebase-admin/firestore";
import { UsuarioRepository } from "../usuarios/adapters/repositories/UsuarioRepository";
import { Usuario } from "../usuarios/domain/entities/Usuario";
import { executeListQuery, QueryOptions } from "../../utils/QueryUtils";
import { UsuarioEscopos } from "../usuarios/domain/enums/UsuarioEscopos";
import { usuariosCol } from "../../utils/FirestoreCollections";


jest.mock('../../utils/FirestoreCollections', () => ({
  usuariosCol: {
    add: jest.fn(),
    doc: jest.fn(() => ({
      get: jest.fn(),
      update: jest.fn(),
    })),
    get: jest.fn(),
  },
}));

jest.mock('../../utils/QueryUtils', () => ({
  executeListQuery: jest.fn(),
}));

jest.mock('../../utils/CreateModelFromDoc', () => ({
  createModelFromDoc: jest.fn((snapshot) => {
    const data = snapshot.data();
    if (!data) throw new Error("Document data undefined.");
    
    const result: any = { id: snapshot.id };
    for (const key in data) {
      if (data[key] instanceof Timestamp) {
        result[key] = data[key].toDate();
      } else {
        result[key] = data[key];
      }
    }
    
    return result;
  }),
}));

describe('UsuarioRepository', () => {
  let repository: UsuarioRepository;

  beforeEach(() => {
    repository = new UsuarioRepository();
  });

  it('should list usuarios', async () => {
    const mockUsuario: Usuario = { 
      id: '1', 
      nome: 'Test User', 
      email: 'test@example.com',
      escopo: UsuarioEscopos.ADM,
      criadoEm: '2023-01-01T00:00:00Z', 
      atualizadoEm: '2023-01-01T00:00:00Z', 
      regAtivo: true 
    };

    (executeListQuery as jest.Mock).mockResolvedValue({
      data: [mockUsuario],
      lastDocRef: null,
    });

    const queryOptions: QueryOptions = { paginationOptions: { limit: 10 } };
    const result = await repository.list(queryOptions);

    expect(result).toEqual({ data: [mockUsuario], lastDocRef: null });
    expect(executeListQuery).toHaveBeenCalledWith(usuariosCol, queryOptions);
  });

  it('should throw an error when listing usuarios fails', async () => {
    (executeListQuery as jest.Mock).mockRejectedValue(new Error("Erro ao listar usuarios!"));

    const queryOptions: QueryOptions = { paginationOptions: { limit: 10 } };

    await expect(repository.list(queryOptions)).rejects.toThrow("Erro ao listar usuarios!");
  });

  it('should throw an error when saving usuario fails', async () => {
    const newUsuario: Usuario = { 
      nome: 'Test User', 
      email: 'test@example.com', 
      escopo: UsuarioEscopos.ADM,
      criadoEm: '2023-01-01T00:00:00Z', 
      atualizadoEm: '2023-01-01T00:00:00Z', 
      regAtivo: true 
    };
    (usuariosCol.add as jest.Mock).mockRejectedValue(new Error("Erro ao criar usuario!"));

    await expect(repository.save(newUsuario)).rejects.toThrow("Erro ao criar usuario!");
  });

  it('should find usuario by id', async () => {
    const mockUsuario: Usuario = { 
      id: '1', 
      nome: 'Test User', 
      email: 'test@example.com', 
      escopo: UsuarioEscopos.ADM,
      criadoEm: '2023-01-01T00:00:00Z', 
      atualizadoEm: '2023-01-01T00:00:00Z', 
      regAtivo: true 
    };
    (usuariosCol.doc as jest.Mock).mockReturnValue({
      get: jest.fn().mockResolvedValue({ exists: true, data: () => mockUsuario }),
    });

    const result = await repository.findById('1');

    expect(result).toEqual(mockUsuario);
    expect(usuariosCol.doc).toHaveBeenCalledWith('1');
  });

  it('should throw an error when usuario is not found by id', async () => {
    (usuariosCol.doc as jest.Mock).mockReturnValue({
      get: jest.fn().mockResolvedValue({ exists: false }),
    });

    await expect(repository.findById('1')).rejects.toThrow("Erro ao buscar usuario!");
  });

  it('should throw an error when findById fails', async () => {
    (usuariosCol.doc as jest.Mock).mockReturnValue({
      get: jest.fn().mockRejectedValue(new Error("Erro ao buscar usuario!")),
    });

    await expect(repository.findById('1')).rejects.toThrow("Erro ao buscar usuario!");
  });

  it('should update an usuario', async () => {
    const updatedUsuario: Usuario = { 
      id: '1', 
      nome: 'Updated Test User', 
      email: 'test@example.com', 
      escopo: UsuarioEscopos.ADM,
      criadoEm: '2023-01-01T00:00:00Z', 
      atualizadoEm: '2023-01-01T00:00:00Z', 
      regAtivo: true 
    };
    const docMock = {
      get: jest.fn().mockResolvedValue({ exists: true, data: () => updatedUsuario }),
      update: jest.fn(),
    };
    (usuariosCol.doc as jest.Mock).mockReturnValue(docMock);

    const result = await repository.update('1', { nome: 'Updated Test User' });

    expect(result).toEqual(updatedUsuario);
    expect(usuariosCol.doc).toHaveBeenCalledWith('1');
    expect(docMock.update).toHaveBeenCalledWith(expect.objectContaining({ nome: 'Updated Test User' }));
  });

  it('should throw an error when updating usuario fails', async () => {
    const docMock = {
      get: jest.fn().mockResolvedValue({ exists: true }),
      update: jest.fn().mockRejectedValue(new Error("Erro ao atualizar usuario!")),
    };
    (usuariosCol.doc as jest.Mock).mockReturnValue(docMock);

    await expect(repository.update('1', { nome: 'Updated Test User' })).rejects.toThrow("Erro ao atualizar usuario!");
  });

  it('should throw an error when usuario to update is not found', async () => {
    (usuariosCol.doc as jest.Mock).mockReturnValue({
      get: jest.fn().mockResolvedValue({ exists: false }),
    });

    await expect(repository.update('1', { nome: 'Updated Test User' })).rejects.toThrow("Erro ao atualizar usuario!");
  });

  it('should delete an usuario', async () => {
    const docMock = {
      get: jest.fn().mockResolvedValue({ exists: true, data: () => ({ id: '1', nome: 'Test User', email: 'test@example.com', escopo: UsuarioEscopos.ADM,criadoEm: '2023-01-01T00:00:00Z', atualizadoEm: '2023-01-01T00:00:00Z', regAtivo: true }) }),
      update: jest.fn(),
    };
    (usuariosCol.doc as jest.Mock).mockReturnValue(docMock);

    await repository.delete('1');

    expect(usuariosCol.doc).toHaveBeenCalledWith('1');
    expect(docMock.update).toHaveBeenCalledWith(expect.objectContaining({ regAtivo: false, excluidoEm: expect.any(String) }));
  });

  it('should throw an error when deleting usuario fails', async () => {
    const docMock = {
      get: jest.fn().mockResolvedValue({ exists: true }),
      update: jest.fn().mockRejectedValue(new Error("Erro ao deletar usuario!")),
    };
    (usuariosCol.doc as jest.Mock).mockReturnValue(docMock);

    await expect(repository.delete('1')).rejects.toThrow("Erro ao deletar usuario!");
  });

  it('should throw an error when usuario to delete is not found', async () => {
    (usuariosCol.doc as jest.Mock).mockReturnValue({
      get: jest.fn().mockResolvedValue({ exists: false }),
    });

    await expect(repository.delete('1')).rejects.toThrow("Erro ao deletar usuario!");
  });
});
