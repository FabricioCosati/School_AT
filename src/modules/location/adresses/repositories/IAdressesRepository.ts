import { Address } from "../model/Address";

interface ICreateAdressDTO {
  street: string;
  number: number;
  cep: string;
  city: string;
  state: string;
}

interface IAdressesRepository {
  create({ street, number, cep, city, state }: ICreateAdressDTO): void;
  list(): Address[];
  findById(id: string): Address;
}

export { IAdressesRepository, ICreateAdressDTO };
