import './style.css';

const products = [
  {
    name: 'Chai Tea Latte',
    price: 3.35,
    description:
      'Bebida Baja en Calorías con Extracto de Café Verde y Refrescante Sabor a Lima.',
    image: 'assets/images/Classic-Chai-Tea-Latte.jpeg'
  },
  {
    name: 'ICED Chai Tea Latte',
    price: 4.5,
    description: 'Té negro chai, hielo y leche o bebida vegetal',
    image: 'assets/images/SBX-UK-MOP-IcedChaiTeaLatte.jpg'
  },
  {
    name: 'Matcha tea latte',
    price: 5.5,
    description: 'Leche o bebida vegetal con matcha con un sabor único',
    image: 'assets/images/Matcha-Green-Tea-Latte.jpeg'
  },
  {
    name: 'Iced Matcha tea latte',
    price: 6.5,
    description: 'Leche  o bebida vegetal, hielo y matcha con un sabor único',
    image: 'assets/images/Iced-Matcha-Green-Tea-Latte.jpeg'
  },
  {
    name: 'Iced lemon',
    price: 6.5,
    description: 'Bebida refrescante de limón hielo y limón liofilizado',
    image: 'assets/images/Iced-Green-Tea-Lemonade.jpeg'
  },
  {
    name: 'Teavana® Peach Citrus Green Tea Lemonade',
    price: 6.5,
    description: '',
    image: 'assets/images/SBX-UK-MOP-PeachIcedTea.jpg'
  },
  {
    name: 'Teavana® Green Tea Lemonade',
    price: 6.5,
    description:
      'Té Verde Frio con Melocotón y Limonada. Bien Agitado en Coctelera y Servido con Hielo',
    image: 'assets/images/SBX-UK-MOP-IcedGreenTeaLemonade.jpeg'
  },
  {
    name: 'Teavana® Black Tea Lemonade',
    price: 6.5,
    description:
      'Té Negro Frio con Limonada. Bien Agitado en Coctelera y Servido con Hielo',
    image: 'assets/images/Iced-Black-Tea-Lemonade.jpeg'
  },
  {
    name: 'Teavana® Hibiscus Tea Lemonade',
    price: 6.5,
    description:
      'Infusión de Hibiscus Frio con Limonada. Bien Agitado en Coctelera y Servido con Hielo',
    image: 'assets/images/Iced-Hibiscus-Tea-Lemonade.jpeg'
  },
  {
    name: 'Teavana® Green Tea',
    price: 6.5,
    description: 'Té Verde Frio Servido con Hielo',
    image: 'assets/images/Iced-Green-Tea.jpeg'
  },
  {
    name: 'Teavana® Black Tea',
    price: 6.5,
    description: 'Té Negro Frio Servido con Hielo',
    image: 'assets/images/Iced-Black-Tea.jpeg'
  },
  {
    name: 'Teavana® Hibiscus Infusion',
    price: 6.5,
    description: 'Infusión de Hibiscus con Hielo.',
    image: 'assets/images/SBX-UK-MOP-HibiscusBlend.jpeg'
  },
  {
    name: 'English Breakfast',
    price: 6.5,
    description: 'Té negro con cuerpo y ricos matices a roble y malta.',
    image: 'assets/images/English-Breakfast-Tea.jpeg'
  },
  {
    name: 'Earl Grey',
    price: 6.5,
    description: 'Te suave con aromáticos matices a bergamota y lavanda.',
    image: 'assets/images/Earl-Grey-Tea_0.jpeg'
  },
  {
    name: 'Chai',
    price: 6.5,
    description:
      'Infusión de canela picante, aroma de jengibre y toques de cardamomo.',
    image: 'assets/images/Chai-Tea.jpeg'
  },
  {
    name: 'Mint Citrus Green',
    price: 6.5,
    description:
      'Mezcla equilibrada de té verde con notas de hierbaluisa, hierba de limón y una pizca de menta.',
    image: 'assets/images/Mint-Citrus-Tea.jpeg'
  },
  {
    name: 'Mint Blend',
    price: 6.5,
    description: 'Hierbabuena, menta y un toque de hierbaluisa (sin cafeína)',
    image: 'assets/images/Mint-Herbal-Blend-Tea.jpeg'
  },
  {
    name: 'Emperor Cloud & Mist',
    price: 6.5,
    description:
      'Té verde puro de origen único con un sutil acabado ahumado-dulce.',
    image: 'assets/images/SBX-UK-MOP-EmperorsClouds&Mist.jpeg'
  },
  {
    name: 'Hibiscus',
    price: 6.5,
    description:
      'Toques tropicales de papaya y mango con hibisco, hierba de limón y un toque de canela (sin cafeína)',
    image: 'assets/images/Hibiscus-Herbal-Blend-Tea.jpeg'
  },
  {
    name: 'Youthberry',
    price: 6.5,
    description:
      'Té blanco con piña dulce, baya de acaí y un final floral a pétalos de rosa.',
    image: 'assets/images/Youthberry-Tea.jpeg'
  }
];

//añadir a .cafeGrid

const sectionCafeGrid = document.querySelector('.cafeGrid');

const generarGrid = (productList) => {
  productList.forEach((product) => {
    const article = document.createElement('article');
    article.className = 'product';

    const img = document.createElement('img');
    img.src = product.image;

    img.alt = product.name;
    img.className = 'product-img';

    console.log(img);

    const div = document.createElement('div');
    div.className = 'product-text-container';

    const h2 = document.createElement('h2');
    h2.className = 'product-title';
    h2.innerText = product.name;

    const p = document.createElement('p');
    p.className = 'product-text';
    p.innerText = product.description;

    div.append(h2, p);

    article.append(div);
    sectionCafeGrid.append(article);
  });
};

generarGrid(products);

/* <article class='product'>
  <img
    src='assets/images/SBX-UK-MOP-Latte.jpeg'
    alt='Cafe con
              leche'
    class='product-img'
  />
  <div class='product-text-container'>
    <h2 class='product-title'>Bebidas Espresso</h2>
    <p class='product-text'>
      Bebidas con los mejores granos de café 100% arábica, cuidadosamente
      seleccionados y tostados al más puro estilo Starbucks®.
    </p>
    <a href='#' class='product-button'>
      Mas Info
    </a>
  </div>
</article>; */
