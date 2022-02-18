import { calculaComissao } from "./calculaComissao";
import { estruturaComissao } from "../estruturaComissao";

export class BalancoService {
  constructor() {}

  async execute(pedidos: any) {
    const balanco = estruturaComissao(pedidos);

    return calculaComissao(balanco);
  }
}
