import './style.css';
import { products } from './src/list';
import { generarGrid } from './src/grid';
import { generaFiltros } from './src/filter';

const initApp = () => {
  generarGrid(products);

  const buttonFilter = document.querySelector('#filterButton');

  buttonFilter.addEventListener('click', () => {
    generaFiltros();
  });
};

initApp();
