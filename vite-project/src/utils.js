import { products } from './list';

const eliminarDuplicados = (param) => {
  for (let i = 0; i < param.length; i++) {
    const primerPuntero = param[i];
    for (let j = i + 1; j < param.length; j++) {
      const segundoPuntero = param[j];
      if (primerPuntero === segundoPuntero) {
        param.splice(j, 1);
        j--;
      }
    }
  }
};

const extraerIngredientes = (productList) => {
  const ingredientes = [];
  productList.forEach((product) => {
    for (let i = 0; i < product.ingredientes.length; i++) {
      ingredientes.push(product.ingredientes[i]);
    }
  });
  eliminarDuplicados(ingredientes);
  return ingredientes;
};

const ingredientes = extraerIngredientes(products);

export { ingredientes };
