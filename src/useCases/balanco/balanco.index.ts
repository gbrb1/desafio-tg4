import { BalancoController } from "./balanco.controller";
import { BalancoService } from "./balanco.service";

const balancoService = new BalancoService();

const balancoController = new BalancoController(balancoService);

export { balancoController };
