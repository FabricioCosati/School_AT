import { IAdressesRepository } from "../../repositories/IAdressesRepository";
import { parse } from "csv-parse";
import fs from "fs";

interface IImportAdresses {
  street: string;
  number: number;
  cep: string;
  city: string;
  state: string;
}

class ImportAdressesUseCase {
  constructor(private adressesRepository: IAdressesRepository) {}

  loadFiles(file: Express.Multer.File): Promise<IImportAdresses[]> {
    return new Promise((resolve, reject) => {
      const adresses: IImportAdresses[] = [];

      const stream = fs.createReadStream(file.path);

      const parser = parse();

      stream.pipe(parser);

      parser
        .on("data", (line) => {
          let [street, number, cep, city, state] = line;
          number = Number(number);

          adresses.push({
            street,
            number,
            cep,
            city,
            state,
          });
        })
        .on("end", () => {
          fs.promises.unlink(file.path);
          resolve(adresses);
        })
        .on("error", (err) => {
          reject(err);
        });
    });
  }

  async execute(file: Express.Multer.File): Promise<void> {
    const adresses = await this.loadFiles(file);

    adresses.forEach((address) => {
      const { street, number, cep, city, state } = address;

      this.adressesRepository.create({ street, number, cep, city, state });
    });
  }
}

export { ImportAdressesUseCase };
