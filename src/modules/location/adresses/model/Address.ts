import { v4 as uuidv4 } from "uuid";

class Address {
  id?: string;
  street: string;
  number: number;
  cep: string;
  city: string;
  state: string;

  created_at: Date;
  updated_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidv4();
    }
  }
}

export { Address };
