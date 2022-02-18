import { Erro } from "../../error/error";
import { BalancoController } from "./balanco.controller";
import { BalancoService } from "./balanco.service";

const erro = new Erro();

const balancoService = new BalancoService();

const balancoController = new BalancoController(balancoService, erro);

export { balancoController };
