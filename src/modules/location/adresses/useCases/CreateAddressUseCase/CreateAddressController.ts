import { Request, Response } from "express";
import { CreateAddressUseCase } from "./CreateAddressUseCase";

class CreateAddressController {
  constructor(private createAddressUseCase: CreateAddressUseCase) {}

  handle(req: Request, res: Response): Response {
    const { street, number, cep, city, state } = req.body;

    try {
      this.createAddressUseCase.execute({ street, number, cep, city, state });

      return res.status(201).send();
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
}

export { CreateAddressController };
