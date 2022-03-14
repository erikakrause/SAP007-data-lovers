import { searchCharacter, filterSortPeople, genderFilter, calculator }from './data.js'
import data from './data/ghibli/ghibli.js';

//////*SELETORES*/////
const namePerson= document.getElementById('searchPeople');
const peopleSortAz = document.getElementById('sortAlfa'); 
const gender = document.getElementById('genderPerson');
document.getElementById('btnClear').addEventListener('click', cleanFiltersChar);

 /////MOSTRAR PERSONAGEM NA TELA /////
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

///BUSCAR PELO NOME DO PERSONAGEM ///
  const filterName = () => {
    const typedName = namePerson.value
     const selectedCharacter = searchCharacter(arrCharacters, typedName); 
    showCharacter(selectedCharacter);
  };
  
///BUSCAR POR ORDEM ALFÁBETICA///
peopleSortAz.addEventListener('change',(event) => {
  const sortSelectPerson = event.target.value;
    const peopleAz = filterSortPeople(arrCharacters, sortSelectPerson);
showCharacter(peopleAz);
});

//MOSTRAR FILMES POR GÊNERO
  gender.addEventListener('change', (event) => {
  const optionGenderSelected = event.target.value;
    const selectedGender = genderFilter(arrCharacters, optionGenderSelected);
    return calculator(selectedGender, arrCharacters);
  //console.log(calculator(selectedGender, arrCharacters));
showCharacter(selectedGender);
});
namePerson.addEventListener('keypress', filterName);

///LIMPAR CAMPOS PARA RECOMEÇAR A PESQUISA///
 function cleanFiltersChar () {
  showCharacter(arrCharacters);
   namePerson.value ="";
   peopleSortAz.value ="";
   gender.value ="";
 };