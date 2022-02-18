import { Router } from "express";
import { balancoController } from "./useCases/balanco/balanco.index";

const router = Router();

router.post("/api/balanco", (request, response) => {
  return balancoController.handle(request, response);
});

export { router };
