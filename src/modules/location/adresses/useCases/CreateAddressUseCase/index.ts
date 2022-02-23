import { AdressesRepository } from "../../repositories/implementations/AdressesRepository";
import { CreateAddressController } from "./CreateAddressController";
import { CreateAddressUseCase } from "./CreateAddressUseCase";

const adressessRepository = AdressesRepository.getInstance();

const createAddressUseCase = new CreateAddressUseCase(adressessRepository);

const createAddressController = new CreateAddressController(
  createAddressUseCase
);

export { createAddressController };
