import { metas } from "./metas.mock";

export function calculaComissao(balanco) {
  const response = balanco.map((vendasVendedorNoMes) => {
    let totalVendasNoMes = 0;
    let comissaoDeVenda = 0;
    let valorComissao = 0;

    vendasVendedorNoMes.vendas.forEach((venda) => {
      totalVendasNoMes += venda.valor;
    });
    if (totalVendasNoMes <= 300) comissaoDeVenda = 1;

    if (totalVendasNoMes > 300 && totalVendasNoMes <= 1000) comissaoDeVenda = 3;

    if (totalVendasNoMes > 1000) comissaoDeVenda = 5;

    valorComissao += (totalVendasNoMes * comissaoDeVenda) / 100;
    console.log(valorComissao);
    const meta = metas.find((el) => el.mes == vendasVendedorNoMes.mes);

    if (vendasVendedorNoMes.vendas.length >= meta.qtd) {
      valorComissao *= 1.03;
    }

    console.log(balanco.idVendedor);
    return {
      vendedor: vendasVendedorNoMes.idVendedor,
      mes: vendasVendedorNoMes.mes,
      valor: valorComissao.toFixed(2).replace(".", ","),
    };
  });

  return response;
}
