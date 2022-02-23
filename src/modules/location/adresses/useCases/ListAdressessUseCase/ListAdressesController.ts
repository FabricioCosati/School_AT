import { Request, Response } from "express";
import { ListAdressesUseCase } from "./ListAdressesUseCase";

class ListAdressesController {
  constructor(private listAdressesUseCase: ListAdressesUseCase) {}

  handle(req: Request, res: Response): Response {
    try {
      const adresses = this.listAdressesUseCase.execute();

      return res.status(200).json(adresses);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
}

export { ListAdressesController };
