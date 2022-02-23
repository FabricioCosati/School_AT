import { AdressesRepository } from "../../repositories/implementations/AdressesRepository";
import { ImportAdressesController } from "./ImportAdressesController";
import { ImportAdressesUseCase } from "./ImportAdressesUseCase";

const adressesRepository = AdressesRepository.getInstance();

const importAdressesUseCase = new ImportAdressesUseCase(adressesRepository);

const importAdressesController = new ImportAdressesController(
  importAdressesUseCase
);

export { importAdressesController };
