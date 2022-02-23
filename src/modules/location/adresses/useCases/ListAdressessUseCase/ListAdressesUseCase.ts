import { Address } from "../../model/Address";
import { IAdressesRepository } from "../../repositories/IAdressesRepository";

class ListAdressesUseCase {
  constructor(private adressesRepository: IAdressesRepository) {}

  execute(): Address[] {
    const adresses = this.adressesRepository.list();

    return adresses;
  }
}

export { ListAdressesUseCase };
