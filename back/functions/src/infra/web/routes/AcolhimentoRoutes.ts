import { Router } from 'express';
import { AcolhimentoController } from '../controllers/AcolhimentoController';
import { AcolhimentoRepository } from '../../persistence/repositories/AcolhimentoRepository';
import { AcolhimentoService } from '../../../domain/services/AcolhimentoService';


const router = Router();

const repository = new AcolhimentoRepository();
const service = new AcolhimentoService(repository);
const controller = new AcolhimentoController(service);

router.get('/', controller.listAcolhimentos);
router.get('/:id', controller.getAcolhimentoById);
router.post('/', controller.createAcolhimento);
router.patch('/:id', controller.updateAcolhimento);
router.delete('/:id', controller.deleteAcolhimento);

export default router;