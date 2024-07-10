import { Acolhimento } from "../acolhimentos/domain/entities/Acolhimento";
import { AcolhimentoStatus } from "../acolhimentos/domain/enums/AcolhimentoStatus";
import { AcolhimentoService } from "../acolhimentos/domain/services/AcolhimentoService";
import { IAcolhimentoRepository } from "../acolhimentos/ports/out/IAcolhimentoRepository";


describe('AcolhimentoService', () => {
  let acolhimentoService: AcolhimentoService;
  let acolhimentoRepository: jest.Mocked<IAcolhimentoRepository>;

  beforeEach(() => {
    acolhimentoRepository = {
      save: jest.fn(),
      findById: jest.fn(),
      update: jest.fn(),
      delete: jest.fn(),
      list: jest.fn(),
    } as unknown as jest.Mocked<IAcolhimentoRepository>;

    acolhimentoService = new AcolhimentoService(acolhimentoRepository);
  });

  it('should create a new acolhimento', async () => {
    const newAcolhimento: Acolhimento = { 
      nome: 'Test', 
      demandas: [], 
      status: AcolhimentoStatus.ATIVO 
    };
    const savedAcolhimento = { ...newAcolhimento, id: '1' };

    acolhimentoRepository.save.mockResolvedValue(savedAcolhimento);

    const result = await acolhimentoService.create(newAcolhimento);

    expect(result).toEqual(savedAcolhimento);
    expect(acolhimentoRepository.save).toHaveBeenCalledWith(newAcolhimento);
  });

  it('should get acolhimento by id', async () => {
    const acolhimento: Acolhimento = { 
      id: '1', 
      nome: 'Test', 
      demandas: [], 
      status: AcolhimentoStatus.ATIVO 
    };

    acolhimentoRepository.findById.mockResolvedValue(acolhimento);

    const result = await acolhimentoService.getById('1');

    expect(result).toEqual(acolhimento);
    expect(acolhimentoRepository.findById).toHaveBeenCalledWith('1');
  });

  it('should update an acolhimento', async () => {
    const updatedAcolhimento: Acolhimento = { 
      id: '1', 
      nome: 'Updated Test', 
      demandas: [], 
      status: AcolhimentoStatus.ATIVO 
    };

    acolhimentoRepository.update.mockResolvedValue(updatedAcolhimento);

    const result = await acolhimentoService.update('1', { nome: 'Updated Test' });

    expect(result).toEqual(updatedAcolhimento);
    expect(acolhimentoRepository.update).toHaveBeenCalledWith('1', { nome: 'Updated Test' });
  });

  it('should delete an acolhimento', async () => {
    await acolhimentoService.delete('1');

    expect(acolhimentoRepository.delete).toHaveBeenCalledWith('1');
  });
});
