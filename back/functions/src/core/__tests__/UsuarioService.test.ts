import { Evento } from "../calendario/domain/entities/Evento";
import { EventoService } from "../calendario/domain/services/EventoService";
import { IEventoRepository } from "../calendario/ports/out/IEventoRepository";


describe('EventoService', () => {
  let eventoService: EventoService;
  let eventoRepository: jest.Mocked<IEventoRepository>;

  beforeEach(() => {
    eventoRepository = {
      save: jest.fn(),
      findById: jest.fn(),
      update: jest.fn(),
      delete: jest.fn(),
      list: jest.fn(),
    } as unknown as jest.Mocked<IEventoRepository>;

    eventoService = new EventoService(eventoRepository);
  });

  it('should create a new evento', async () => {
    const newEvento: Evento = { 
      titulo: 'Test Event', 
      data: '2023-01-01', 
      diaTodo: false, 
      local: 'Test Location', 
      criadoEm: '2023-01-01T00:00:00Z',
      atualizadoEm: '2023-01-01T00:00:00Z',
      regAtivo: true,
    };
    const savedEvento = { ...newEvento, id: '1' };

    eventoRepository.save.mockResolvedValue(savedEvento);

    const result = await eventoService.create(newEvento);

    expect(result).toEqual(savedEvento);
    expect(eventoRepository.save).toHaveBeenCalledWith(newEvento);
  });

  it('should get evento by id', async () => {
    const evento: Evento = { 
      id: '1', 
      titulo: 'Test Event', 
      data: '2023-01-01', 
      diaTodo: false, 
      local: 'Test Location', 
      criadoEm: '2023-01-01T00:00:00Z',
      atualizadoEm: '2023-01-01T00:00:00Z',
      regAtivo: true,
    };

    eventoRepository.findById.mockResolvedValue(evento);

    const result = await eventoService.getById('1');

    expect(result).toEqual(evento);
    expect(eventoRepository.findById).toHaveBeenCalledWith('1');
  });

  it('should update an evento', async () => {
    const updatedEvento: Evento = { 
      id: '1', 
      titulo: 'Updated Test Event', 
      data: '2023-01-01', 
      diaTodo: false, 
      local: 'Test Location', 
      criadoEm: '2023-01-01T00:00:00Z',
      atualizadoEm: '2023-01-01T00:00:00Z',
      regAtivo: true,
    };

    eventoRepository.update.mockResolvedValue(updatedEvento);

    const result = await eventoService.update('1', { titulo: 'Updated Test Event' });

    expect(result).toEqual(updatedEvento);
    expect(eventoRepository.update).toHaveBeenCalledWith('1', { titulo: 'Updated Test Event' });
  });

  it('should delete an evento', async () => {
    await eventoService.delete('1');

    expect(eventoRepository.delete).toHaveBeenCalledWith('1');
  });
});
