import {searchName, filterSort, directorFilter, movieRelease , calculator }from './data.js'
import data from './data/ghibli/ghibli.js';

const films = data.films;

//MOSTRAR FILMES NA TELA

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
 /*
  <div class="info-card">
    <p class="name-director">${item.director}</p>
    <p class="name-producer">${item.producer}</p>
    <p class="title-card">${item.release_date}</p>
    <p class="title-card">${item.rt_score}</p
  </div>*/

showFilms(data.films);

//SELETORES
const sortAz = document.getElementById('sortAlfa');  
const title = document.getElementById('searchTitle');
const movieDate = document.getElementById('releaseDate');
const directorSelect = document.getElementById('director');
const directorPercent =document.getElementById('addedValue1');
document.getElementById('btnClear').addEventListener('click', cleanFilters);

//BUSCAR PELO TÍTULO DO FILME
title.addEventListener('keyup', ( ) => {
  const typedTitle = document.querySelector('#searchTitle').value;
    const selectedMovie = searchName(films, typedTitle);
  showFilms(selectedMovie);
});

//BUSCAR POR ORDEM ALFÁBETICA
sortAz.addEventListener('change',(event)=> {
  const sortSelect = event.target.value;
    const titleAz = filterSort(films, sortSelect);
showFilms(titleAz);
});

// MOSTRAR FILMES POR DATA
movieDate.addEventListener('change',(event)=> {
  const dateSelected = event.target.value;
    const selectedFilmDate = movieRelease(films, dateSelected);
  showFilms(selectedFilmDate);
});

//MOSTRAR FILMES POR DIRETOR
directorSelect.addEventListener('change', (event) => {
  const optionSelected = event.target.value;
    const selectedFilmDirector = directorFilter(films, optionSelected);
      const percentDirector = calculator(films, optionSelected);

showFilms(selectedFilmDirector);
showPercentage(percentDirector);
});

///IMPRIMIR PORCENTAGEM NA TELA////////
function showPercentage(films) {
  directorPercent.innerHTML = ` ${films} está é a porcentagem de filmes por diretor.`
}

//LIMPAR CAMPOS PARA RECOMEÇAR A PESQUISA
 function cleanFilters () {
   showFilms(data.films);
   title.value ="";
   sortAz.value ="";
   movieDate.value = "";
   directorSelect.value ="";
 }