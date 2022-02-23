import { Request, Response } from "express";
import { ImportAdressesUseCase } from "./ImportAdressesUseCase";

class ImportAdressesController {
  constructor(private importAdressesUseCase: ImportAdressesUseCase) {}

  handle(req: Request, res: Response): Response {
    const { file } = req;

    try {
      this.importAdressesUseCase.execute(file);

      return res.status(201).send();
    } catch (error) {
      return res.status(500).json({
        error: error.message,
      });
    }
  }
}

export { ImportAdressesController };
