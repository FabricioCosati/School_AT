import { Router } from "express";
import multer from "multer";

import { listAdressesController } from "../modules/location/adresses/useCases/ListAdressessUseCase";
import { createAddressController } from "../modules/location/adresses/useCases/CreateAddressUseCase";
import { importAdressesController } from "../modules/location/adresses/useCases/ImportAdressesUseCase";

const adressesRoutes = Router();

const upload = multer({
  dest: "./tmp",
});

adressesRoutes.post("/", (req, res) => {
  createAddressController.handle(req, res);
});

adressesRoutes.post("/import", upload.single("file"), (req, res) => {
  importAdressesController.handle(req, res);
});

adressesRoutes.get("/", (req, res) => {
  listAdressesController.handle(req, res);
});

export { adressesRoutes };
