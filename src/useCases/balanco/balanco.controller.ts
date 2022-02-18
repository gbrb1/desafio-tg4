import { Request, Response } from "express";
import { Erro } from "../../error/error";
import { BalancoService } from "./balanco.service";

export class BalancoController {
  constructor(private balancoService: BalancoService, private error: Erro) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const data: any = request.body;

    try {
      const resposta = await this.balancoService.execute(data);
      return response.status(201).json(resposta);
    } catch (e) {
      await this.error.erro(e, response);
    }
  }
}
