import { Timestamp } from "firebase-admin/firestore";
import { AcolhimentoRepository } from "../acolhimentos/adapters/repositories/AcolhimentoRepository";
import { Acolhimento } from "../acolhimentos/domain/entities/Acolhimento";
import { executeListQuery, QueryOptions } from "../../utils/QueryUtils";
import { AcolhimentoStatus } from "../acolhimentos/domain/enums/AcolhimentoStatus";
import { acolhimentosCol } from "../../utils/FirestoreCollections";


jest.mock('../../utils/FirestoreCollections', () => ({
  acolhimentosCol: {
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

describe('AcolhimentoRepository', () => {
  let repository: AcolhimentoRepository;

  beforeEach(() => {
    repository = new AcolhimentoRepository();
  });

  it('should list acolhimentos', async () => {
    const mockAcolhimento: Acolhimento = { 
      id: '1', 
      nome: 'Test', 
      demandas: [], 
      status: AcolhimentoStatus.ATIVO 
    };

    (executeListQuery as jest.Mock).mockResolvedValue({
      data: [mockAcolhimento],
      lastDocRef: null,
    });

    const queryOptions: QueryOptions = { paginationOptions: { limit: 10 } };
    const result = await repository.list(queryOptions);

    expect(result).toEqual({ data: [mockAcolhimento], lastDocRef: null });
    expect(executeListQuery).toHaveBeenCalledWith(acolhimentosCol, queryOptions);
  });

  it('should throw an error when listing acolhimentos fails', async () => {
    (executeListQuery as jest.Mock).mockRejectedValue(new Error("Erro ao listar acolhimentos!"));

    const queryOptions: QueryOptions = { paginationOptions: { limit: 10 } };

    await expect(repository.list(queryOptions)).rejects.toThrow("Erro ao listar acolhimentos!");
  });

  it('should save a new acolhimento', async () => {
    const newAcolhimento: Acolhimento = { 
      nome: 'Test', 
      demandas: [], 
      status: AcolhimentoStatus.ATIVO 
    };
    (acolhimentosCol.add as jest.Mock).mockResolvedValue({ id: '1' });

    const result = await repository.save(newAcolhimento);

    expect(result).toEqual({ ...newAcolhimento, id: '1' });
    expect(acolhimentosCol.add).toHaveBeenCalledWith(expect.objectContaining(newAcolhimento));
  });

  it('should throw an error when saving acolhimento fails', async () => {
    const newAcolhimento: Acolhimento = { 
      nome: 'Test', 
      demandas: [], 
      status: AcolhimentoStatus.ATIVO 
    };
    (acolhimentosCol.add as jest.Mock).mockRejectedValue(new Error("Erro ao criar acolhimento!"));

    await expect(repository.save(newAcolhimento)).rejects.toThrow("Erro ao criar acolhimento!");
  });

  it('should find acolhimento by id', async () => {
    const mockAcolhimento: Acolhimento = { 
      id: '1', 
      nome: 'Test', 
      demandas: [], 
      status: AcolhimentoStatus.ATIVO 
    };
    (acolhimentosCol.doc as jest.Mock).mockReturnValue({
      get: jest.fn().mockResolvedValue({ exists: true, data: () => mockAcolhimento }),
    });

    const result = await repository.findById('1');

    expect(result).toEqual(mockAcolhimento);
    expect(acolhimentosCol.doc).toHaveBeenCalledWith('1');
  });

  it('should throw an error when acolhimento is not found by id', async () => {
    (acolhimentosCol.doc as jest.Mock).mockReturnValue({
      get: jest.fn().mockResolvedValue({ exists: false }),
    });

    await expect(repository.findById('1')).rejects.toThrow("Erro ao buscar acolhimento!");
  });

  it('should throw an error when findById fails', async () => {
    (acolhimentosCol.doc as jest.Mock).mockReturnValue({
      get: jest.fn().mockRejectedValue(new Error("Erro ao buscar acolhimento!")),
    });

    await expect(repository.findById('1')).rejects.toThrow("Erro ao buscar acolhimento!");
  });

  it('should update an acolhimento', async () => {
    const updatedAcolhimento: Acolhimento = { 
      id: '1', 
      nome: 'Updated Test', 
      demandas: [], 
      status: AcolhimentoStatus.ATIVO 
    };
    const docMock = {
      get: jest.fn().mockResolvedValue({ exists: true, data: () => updatedAcolhimento }),
      update: jest.fn(),
    };
    (acolhimentosCol.doc as jest.Mock).mockReturnValue(docMock);

    const result = await repository.update('1', { nome: 'Updated Test' });

    expect(result).toEqual(updatedAcolhimento);
    expect(acolhimentosCol.doc).toHaveBeenCalledWith('1');
    expect(docMock.update).toHaveBeenCalledWith(expect.objectContaining({ nome: 'Updated Test' }));
  });

  it('should throw an error when updating acolhimento fails', async () => {
    const docMock = {
      get: jest.fn().mockResolvedValue({ exists: true }),
      update: jest.fn().mockRejectedValue(new Error("Erro ao atualizar acolhimento!")),
    };
    (acolhimentosCol.doc as jest.Mock).mockReturnValue(docMock);

    await expect(repository.update('1', { nome: 'Updated Test' })).rejects.toThrow("Erro ao atualizar acolhimento!");
  });

  it('should throw an error when acolhimento to update is not found', async () => {
    (acolhimentosCol.doc as jest.Mock).mockReturnValue({
      get: jest.fn().mockResolvedValue({ exists: false }),
    });

    await expect(repository.update('1', { nome: 'Updated Test' })).rejects.toThrow("Erro ao atualizar acolhimento!");
  });

  it('should delete an acolhimento', async () => {
    const docMock = {
      get: jest.fn().mockResolvedValue({ exists: true, data: () => ({ id: '1', nome: 'Test', demandas: [], status: AcolhimentoStatus.ATIVO }) }),
      update: jest.fn(),
    };
    (acolhimentosCol.doc as jest.Mock).mockReturnValue(docMock);

    await repository.delete('1');

    expect(acolhimentosCol.doc).toHaveBeenCalledWith('1');
    expect(docMock.update).toHaveBeenCalledWith(expect.objectContaining({ regAtivo: false, status: AcolhimentoStatus.ENCERRADO, atualizadoEm: expect.any(String), excluidoEm: expect.any(String) }));
  });

  it('should throw an error when deleting acolhimento fails', async () => {
    const docMock = {
      get: jest.fn().mockResolvedValue({ exists: true }),
      update: jest.fn().mockRejectedValue(new Error("Erro ao deletar acolhimento!")),
    };
    (acolhimentosCol.doc as jest.Mock).mockReturnValue(docMock);

    await expect(repository.delete('1')).rejects.toThrow("Erro ao deletar acolhimento!");
  });

  it('should throw an error when acolhimento to delete is not found', async () => {
    (acolhimentosCol.doc as jest.Mock).mockReturnValue({
      get: jest.fn().mockResolvedValue({ exists: false }),
    });

    await expect(repository.delete('1')).rejects.toThrow("Erro ao deletar acolhimento!");
  });
});
