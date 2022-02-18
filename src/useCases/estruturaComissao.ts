export function estruturaComissao(pedidos) {
  let balanco = [];

  let setIdVendedor = new Set();

  pedidos.forEach((el) => {
    setIdVendedor.add(el.vendedor);
  });

  setIdVendedor.forEach((idVendedor) => {
    const vendasVendedor = pedidos.filter(
      (item) => item.vendedor == idVendedor
    );

    let setMes = new Set();

    vendasVendedor.map((venda) => {
      const date = new Date(venda.data);
      const mes = date.getUTCMonth() + 1;
      setMes.add(mes);
    });

    setMes.forEach((mes) => {
      const vendasNoMesDoVendedor = vendasVendedor.filter(
        (venda) => new Date(venda.data).getUTCMonth() + 1 == mes
      );
      balanco.push({
        idVendedor: vendasNoMesDoVendedor[0].vendedor,
        mes: mes,
        vendas: vendasNoMesDoVendedor.map((venda) => ({
          data: venda.data,
          valor: venda.valor,
        })),
      });
    });
  });

  return balanco;
}
