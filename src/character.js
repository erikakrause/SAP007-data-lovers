import {searchCharacter, filterSortPeople, genderFilter}from './data.js'
import data from './data/ghibli/ghibli.js';

const films = data.films;

 //MOSTRAR PERSONAGEM NA TELA 
  const peopleImage = document.getElementById('cardsCharacter');
  function showCharacter(arrPeople) {    
    peopleImage.innerHTML = arrPeople.map((item) =>
     `
    <div class="card">
      <div class="flip-card">
        <p class="name-card"><strong>${item.name}</strong></p>
        <img  class='img-card' src='${item.img}'alt="poster filmes"> 
      </div>
    </div>
`).join('');
}
const characters = data.films.map(arrPeople => arrPeople.people)
const arrCharacters = [].concat.apply([], characters);

showCharacter(arrCharacters);

/*SELETORES*/
const namePerson= document.getElementById('nameCharacter');
const peopleSortAz = document.getElementById('sortAlfa'); 
const gender = document.getElementById('genderPerson')
const clear = document.getElementById('btnClear').addEventListener('click', cleanFilters);
//const calculator = document.getElementById('addedValue')

//BUSCAR PELO NOME DO PERSONAGEM 
/*
nameCharacter.addEventListener('keyup', ( ) => {
  const typedName = document.querySelector('#searchPeople').value;
  console.log(document.querySelector('#searchPeople').value);

    const selectedCharacter = searchCharacter(people, typedName);
    console.log(selectedCharacter);

 showCharacter(selectedCharacter);
});*/

//BUSCAR POR ORDEM ALFÁBETICA
peopleSortAz.addEventListener('change',(event) => {
  const sortSelectPerson = event.target.value;
  const peopleAz = filterSortPeople(arrCharacters, sortSelectPerson);
 
showCharacter(peopleAz);
});

//MOSTRAR FILMES POR GÊNERO
  gender.addEventListener('change', (event) => {
  const optionGenderSelected = event.target.value;
  const selectedGender = genderFilter(arrCharacters, optionGenderSelected);

showCharacter(selectedGender);
});

//IMPAR CAMPOS PARA RECOMEÇAR A PESQUISA
 function cleanFilters () {
   namePerson.value ="";
   peopleSortAz.value ="";
   gender.value ="";
 }