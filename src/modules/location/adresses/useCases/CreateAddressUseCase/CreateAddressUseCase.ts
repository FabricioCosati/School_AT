import { IAdressesRepository } from "../../repositories/IAdressesRepository";

interface IRequest {
  street: string;
  number: number;
  cep: string;
  city: string;
  state: string;
}

class CreateAddressUseCase {
  constructor(private adressessRepository: IAdressesRepository) {}

  execute({ street, number, cep, city, state }: IRequest): void {
    this.adressessRepository.create({ street, number, cep, city, state });
  }
}

export { CreateAddressUseCase };
