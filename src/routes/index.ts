import { Router } from "express";
const routes = Router();

import { adressesRoutes } from "./adresses.routes";

routes.use("/adresses", adressesRoutes);

export { routes };
