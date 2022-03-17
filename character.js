import { searchCharacter, filterSort, genderFilter, calculator }from './data.js'
import data from './data/ghibli/ghibli.js';

//////*SELETORES*/////
const namePerson= document.getElementById('searchPeople');
const peopleSortAz = document.getElementById('sortAlfa'); 
const gender = document.getElementById('genderPerson');
const genderPercent = document.getElementById('addedValue2');
document.getElementById('btnClear').addEventListener('click', cleanFiltersChar);

 /////MOSTRAR PERSONAGEM NA TELA /////
  const peopleImage = document.getElementById('cardsCharacter');
  function showCharacter(arrPeople) {    
    peopleImage.innerHTML = arrPeople.map((item) =>
     `
    <div class="cardChar">
      <div class="poster-card">
        <p class="name-card"><strong>${item.name}</strong></p>
        <img  class='img-card-people' src='${item.img}'alt="poster filmes"> 
      </div>
    <div class="poster-details">
    <p class="info"><strong>Gender: </strong>${item.gender}</p>
    <p class="info"><strong>Age: </strong>${item.age}</p>
    <p class="info"><strong>Specie:</strong> ${item.specie}</p>
    </div>
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
    const peopleAz = filterSort(arrCharacters, sortSelectPerson);
showCharacter(peopleAz);
});

//MOSTRAR FILMES POR GÊNERO
  gender.addEventListener('change', (event) => {
  const optionGenderSelected = event.target.value;
    const selectedGender = genderFilter(arrCharacters, optionGenderSelected);
      const percentGender = calculator(arrCharacters, optionGenderSelected)

showCharacter(selectedGender);
showPercentageChar(percentGender);
});
namePerson.addEventListener('keypress', filterName);

////PORCENTAGEM PERSONAGEM//////
function showPercentageChar(films) {
  genderPercent.innerHTML = `${films} está é a porcentagem pelo gênero selecionado.`}
///LIMPAR CAMPOS PARA RECOMEÇAR A PESQUISA///
 function cleanFiltersChar () {
  showCharacter(arrCharacters);
   namePerson.value ="";
   peopleSortAz.value ="";
   gender.value ="";
 }