const sectionCafeGrid = document.querySelector('.cafeGrid');

const generarGrid = (productList) => {
  if (productList == '') {
    const h2 = document.createElement('h2');
    h2.className = 'product-title';
    h2.innerText = `No hay resultados con los filtros seleccionados.`;
    sectionCafeGrid.append(h2);
  }

  productList.forEach((product) => {
    const article = document.createElement('article');
    article.className = 'product';

    const img = document.createElement('img');
    img.src = product.image;

    img.alt = product.name;
    img.className = 'product-img';

    const div = document.createElement('div');
    div.className = 'product-text-container';

    const h2 = document.createElement('h2');
    h2.className = 'product-title';
    h2.innerText = product.name;

    const p = document.createElement('p');
    p.className = 'product-text';
    p.innerText = product.description;

    const price = document.createElement('h2');
    price.className = 'product-title';
    price.innerText = `Precio: ${product.price} €`;

    div.append(img, h2, p, price);

    article.append(div);
    sectionCafeGrid.append(article);
  });
};

const limpiarGrid = () => {
  sectionCafeGrid.innerHTML = '';
};

export { generarGrid, limpiarGrid };
