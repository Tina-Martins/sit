import { Request, Response } from "express";
import { IAcolhimentoService } from "../../../domain/interfaces/IAcolhimentoService";

export class AcolhimentoController {
  constructor(private acolhimentoService: IAcolhimentoService) {}

  createAcolhimento = async (req: Request, res: Response): Promise<void> => {
    try {
      const acolhimento = await this.acolhimentoService.create(req.body);
      res.status(201).json(acolhimento);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  };

  getAcolhimentoById = async (req: Request, res: Response): Promise<void> => {
    try {
      const acolhimento = await this.acolhimentoService.getById(req.params.id);
      if (acolhimento) {
        res.json(acolhimento);
      } else {
        res.status(404).json({ message: "Acolhimento not found" });
      }
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  };

  getAcolhimentoByNome = async (req: Request, res: Response): Promise<void> => {
    try {
      const acolhimento = await this.acolhimentoService.getByNome(
        req.params.nome
      );
      if (acolhimento) {
        res.json(acolhimento);
      } else {
        res.status(404).json({ message: "Acolhimento not found" });
      }
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  };

  getAcolhimentoByTipoDemanda = async (
    req: Request,
    res: Response
  ): Promise<void> => {
    try {
      const acolhimento = await this.acolhimentoService.getByTipoDemanda(
        req.params.tipoDemanda
      );
      if (acolhimento) {
        res.json(acolhimento);
      } else {
        res.status(404).json({ message: "Acolhimento not found" });
      }
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  };
}
