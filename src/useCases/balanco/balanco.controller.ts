import { Request, Response } from "express";
import { BalancoService } from "./balanco.service";

export class BalancoController {
  constructor(private balancoService: BalancoService) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { pedidos }: any = request.body;

    try {
      const resposta = await this.balancoService.execute(pedidos);
      return response.status(201).json(resposta);
    } catch (e) {
      console.log("LOG DE ERRO:");
      console.log(e);
      response.status(e.status).send(e.message);
    }
  }
}
