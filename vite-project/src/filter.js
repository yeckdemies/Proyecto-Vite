import { ingredientes } from './utils';

const select = document.querySelector('#selectIngredientes');

const generaFiltros = () => {
  select.innerHTML = '';
  ingredientes.forEach((ingrediente) => {
    const option = document.createElement('option');
    option.innerText = ingrediente;
    select.append(option);
  });

  select.selectedIndex = -1;

  const filter = document.querySelector('#filter');
  filter.classList.toggle('hidden');
};

select.addEventListener('change', () => {
  console.log(select.value);
});

export { generaFiltros };
