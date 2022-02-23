import { Address } from "../../model/Address";
import { IAdressesRepository, ICreateAdressDTO } from "../IAdressesRepository";

class AdressesRepository implements IAdressesRepository {
  private adressess: Address[];

  private static INSTANCE: AdressesRepository;

  private constructor() {
    this.adressess = [];
  }

  public static getInstance(): AdressesRepository {
    if (!AdressesRepository.INSTANCE) {
      AdressesRepository.INSTANCE = new AdressesRepository();
    }

    return AdressesRepository.INSTANCE;
  }

  create({ street, number, cep, city, state }: ICreateAdressDTO): void {
    const address = new Address();

    Object.assign(address, {
      street,
      number,
      cep,
      city,
      state,
      created_at: new Date(),
      updated_at: new Date(),
    });

    this.adressess.push(address);
  }
  list(): Address[] {
    return this.adressess;
  }
  findById(id: string): Address {
    return this.adressess.find((address) => address.id === id);
  }
}

export { AdressesRepository };
