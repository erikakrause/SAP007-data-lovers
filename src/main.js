import {searchName, filterSort, directorFilter, movieRelease , calculator }from './data.js'
import data from './data/ghibli/ghibli.js';

const films = data.films;

//MOSTRAR FILMES NA TELA
/*   <div class="back-card">
      <p class="name-director">${item.director}</p>
      <p class="name-producer">${item.producer}</p>
      <p class="title-card">${item.release_date}</p>
      <p class="title-card">${item.rt_score}</p>
    <div>
    </</div>*/
function showFilms(data){
  document.getElementById('cards').innerHTML = data.map((item) => `

  <div class="card">
    <div class="flip-card">
      <p class="title-card"><strong>${item.title}</strong></p>
      <img  class='img-card' src='${item.poster}'alt="poster filmes"> 
      </div>
  </div>
`).join('');  
}

showFilms(data.films);

//SELETORES
const sortAz = document.getElementById('sortAlfa');  
const title = document.getElementById('searchTitle');
const movieDate = document.getElementById('releaseDate');
const directorSelect = document.getElementById('director');
document.getElementById('btnClear').addEventListener('click', cleanFilters);

//BUSCAR PELO TÍTULO DO FILME
title.addEventListener('keyup', ( ) => {
  const typedTitle = document.querySelector('#searchTitle').value;
  console.log(document.querySelector('#searchTitle').value);
    const selectedMovie = searchName(films, typedTitle);
    console.log(selectedMovie);

  showFilms(selectedMovie);
});

//BUSCAR POR ORDEM ALFÁBETICA
sortAz.addEventListener('change',(event)=> {
  const sortSelect = event.target.value;
  console.log(event.target.value);

  const titleAz = filterSort(films, sortSelect);
  console.log(titleAz);
 
showFilms(titleAz);
});

// MOSTRAR FILMES POR DATA
movieDate.addEventListener('change',(event)=> {
  const dateSelected = event.target.value;

  const selectedFilmDate = movieRelease(films, dateSelected);
  showFilms(selectedFilmDate);

})

//MOSTRAR FILMES POR DIRETOR
directorSelect.addEventListener('change', (event) => {
  const optionSelected = event.target.value;
  console.log(event.target.value);

  const selectedFilmDirector = directorFilter(films, optionSelected);
  console.log(selectedFilmDirector);

  console.log(calculator(selectedFilmDirector, films))
showFilms(selectedFilmDirector);
});

//LIMPAR CAMPOS PARA RECOMEÇAR A PESQUISA
 function cleanFilters () {
   showFilms(data.films);
   title.value ="";
   sortAz.value ="";
   directorSelect.value ="";
 }

 //CALCULO 
