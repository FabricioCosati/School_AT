import { AdressesRepository } from "../../repositories/implementations/AdressesRepository";
import { ListAdressesController } from "./ListAdressesController";
import { ListAdressesUseCase } from "./ListAdressesUseCase";

const adressesRepository = AdressesRepository.getInstance();

const listAdressesUseCase = new ListAdressesUseCase(adressesRepository);

const listAdressesController = new ListAdressesController(listAdressesUseCase);

export { listAdressesController };
