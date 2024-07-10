import { Timestamp } from "firebase-admin/firestore";
import { EventoRepository } from "../calendario/adapters/repositories/EventoRepository";
import { Evento } from "../calendario/domain/entities/Evento";
import { executeListQuery, QueryOptions } from "../../utils/QueryUtils";
import { eventosCol } from "../../utils/FirestoreCollections";


jest.mock('../../utils/FirestoreCollections', () => ({
  eventosCol: {
    add: jest.fn(),
    doc: jest.fn(() => ({
      get: jest.fn(),
      update: jest.fn(),
    })),
    where: jest.fn(() => ({
      get: jest.fn(),
    })),
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

describe('EventoRepository', () => {
  let repository: EventoRepository;

  beforeEach(() => {
    repository = new EventoRepository();
  });

  it('should list eventos', async () => {
    const mockEvento: Evento = { 
      id: '1', 
      titulo: 'Test Event', 
      data: '2023-01-01', 
      diaTodo: false, 
      local: 'Test Location', 
      criadoEm: '2023-01-01T00:00:00Z', 
      atualizadoEm: '2023-01-01T00:00:00Z', 
      regAtivo: true 
    };

    (executeListQuery as jest.Mock).mockResolvedValue({
      data: [mockEvento],
      lastDocRef: null,
    });

    const queryOptions: QueryOptions = { paginationOptions: { limit: 10 } };
    const result = await repository.list(queryOptions);

    expect(result).toEqual({ data: [mockEvento], lastDocRef: null });
    expect(executeListQuery).toHaveBeenCalledWith(eventosCol, queryOptions);
  });

  it('should throw an error when listing eventos fails', async () => {
    (executeListQuery as jest.Mock).mockRejectedValue(new Error("Erro ao listar eventos!"));

    const queryOptions: QueryOptions = { paginationOptions: { limit: 10 } };

    await expect(repository.list(queryOptions)).rejects.toThrow("Erro ao listar eventos!");
  });

  it('should find evento by id', async () => {
    const mockEvento: Evento = { 
      id: '1', 
      titulo: 'Test Event', 
      data: '2023-01-01', 
      diaTodo: false, 
      local: 'Test Location', 
      criadoEm: '2023-01-01T00:00:00Z', 
      atualizadoEm: '2023-01-01T00:00:00Z', 
      regAtivo: true 
    };
    (eventosCol.doc as jest.Mock).mockReturnValue({
      get: jest.fn().mockResolvedValue({ exists: true, data: () => mockEvento }),
    });

    const result = await repository.findById('1');

    expect(result).toEqual(mockEvento);
    expect(eventosCol.doc).toHaveBeenCalledWith('1');
  });

  it('should throw an error when evento is not found by id', async () => {
    (eventosCol.doc as jest.Mock).mockReturnValue({
      get: jest.fn().mockResolvedValue({ exists: false }),
    });

    await expect(repository.findById('1')).rejects.toThrow("Erro ao buscar evento!");
  });

  it('should throw an error when findById fails', async () => {
    (eventosCol.doc as jest.Mock).mockReturnValue({
      get: jest.fn().mockRejectedValue(new Error("Erro ao buscar evento!")),
    });

    await expect(repository.findById('1')).rejects.toThrow("Erro ao buscar evento!");
  });

  it('should throw an error when evento to update is not found', async () => {
    (eventosCol.doc as jest.Mock).mockReturnValue({
      get: jest.fn().mockResolvedValue({ exists: false }),
    });

    await expect(repository.update('1', { titulo: 'Updated Test Event' })).rejects.toThrow("Evento não encontrado!");
  });

  it('should delete an evento', async () => {
    const docMock = {
      get: jest.fn().mockResolvedValue({ exists: true, data: () => ({ id: '1', titulo: 'Test Event', data: '2023-01-01', diaTodo: false, local: 'Test Location', criadoEm: '2023-01-01T00:00:00Z', atualizadoEm: '2023-01-01T00:00:00Z', regAtivo: true }) }),
      update: jest.fn(),
    };
    (eventosCol.doc as jest.Mock).mockReturnValue(docMock);

    await repository.delete('1');

    expect(eventosCol.doc).toHaveBeenCalledWith('1');
    expect(docMock.update).toHaveBeenCalledWith(expect.objectContaining({ regAtivo: false, excluidoEm: expect.any(String) }));
  });

  it('should throw an error when deleting evento fails', async () => {
    const docMock = {
      get: jest.fn().mockResolvedValue({ exists: true }),
      update: jest.fn().mockRejectedValue(new Error("Erro ao deletar evento!")),
    };
    (eventosCol.doc as jest.Mock).mockReturnValue(docMock);

    await expect(repository.delete('1')).rejects.toThrow("Erro ao deletar evento!");
  });

  it('should throw an error when evento to delete is not found', async () => {
    (eventosCol.doc as jest.Mock).mockReturnValue({
      get: jest.fn().mockResolvedValue({ exists: false }),
    });

    await expect(repository.delete('1')).rejects.toThrow("Erro ao deletar evento!");
  });
});
