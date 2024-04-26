import { Request, Response } from "express";
import { IAcolhimentoService } from "../../../domain/interfaces/IAcolhimentoService";

export class AcolhimentoController {
  constructor(private service: IAcolhimentoService) {}

  getByFilter = async (req: Request, res: Response): Promise<void> => {
    try {
      const { filters, orders, limit, lastDocId } = req.body;
      const paginationOptions = {
        pageSize: limit || 20,
        lastDocId: lastDocId || null,
      };

      const { data, lastDocRef } = await this.service.getByFilter(
        filters,
        orders,
        paginationOptions
      );
      res.json({ data, lastDocId: lastDocRef });
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };

  getAcolhimentoById = async (req: Request, res: Response): Promise<void> => {
    try {
      const acolhimento = await this.service.getById(req.params.id);
      if (acolhimento) {
        res.json(acolhimento);
      } else {
        res.status(404).json({ message: "Acolhimento não encontrado" });
      }
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };

  createAcolhimento = async (req: Request, res: Response): Promise<void> => {
    try {
      const acolhimento = await this.service.create(req.body);
      if (acolhimento) {
        res.status(201).json(acolhimento);
      } else {
        res.status(500).json({ message: "Erro ao criar acolhimento" });
      }
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };

  updateAcolhimento = async (req: Request, res: Response): Promise<void> => {
    try {
      const acolhimento = await this.service.update(req.params.id, req.body);
      if (acolhimento) {
        res.json(acolhimento);
      } else {
        res.status(404).json({ message: "Acolhimento não encontrado" });
      }
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };

  deleteAcolhimento = async (req: Request, res: Response): Promise<void> => {
    try {
      await this.service.delete(req.params.id);
      res.status(204).send();
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  };
}
