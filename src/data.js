// FILTRO PARA BUSCAR PELO NOME DO FILME
export const searchName = (data, animantion) => 
data.filter(item => item.title.toUpperCase().includes(animantion.toUpperCase()))
console.log(searchName);


//FILTRO PARA BUSCAR O FILME POR ORDEM ALFABÉTICA
export const filterSort = (data, title) => {
  const newArrFilms = [...data]
  console.log(title);
  if(title === "a-z") {
    return newArrFilms.sort((a, b) => (a.title > b.title ? 1 : -1));
} else {
  return newArrFilms.sort((a, b) => (a.title > b.title ? -1 : 1));
  }
}

//FILTRO ANO DE LANÇAMENTO FILME
export const movieRelease = (animation, selectedValue) => {
  return animation.filter(films => films.release_date.includes(selectedValue));
}

//FILTRO DE SELECIONAR O TÍTULO POR DIRETOR
export const directorFilter = (animation, selectedValue) => {
  return animation.filter(films => films.director.includes(selectedValue));
}  

//////////////////////PERSONAGENS////////////////////
//FILTRO POR NOME DO PERSONAGEM

export const searchCharacter = (character, characterSelected) => 
character.filter(films => films.name.toUpperCase().includes(characterSelected.toUpperCase()));

// FILTRO ORDEM ALFABÉTICA PERSONAGEM
export const filterSortPeople = (data, name) => {
  const newArrChar = [...data]
  console.log(name);
  if(name === "a-z") {
    return newArrChar.sort((a, b) => (a.name > b.name ? 1 : -1));
} else {
  return newArrChar.sort((a, b) => (a.name > b.name ? -1 : 1));
  }
}

// FILTRO PELO GÊNERO
export const genderFilter = (animation, selectedValue) => {
  return animation.filter(films => films.gender.includes(selectedValue));
}  

// PORCENTAGEM 
export const calculator = (filterArrFilm, data) => {
  return filterArrFilm.length * 100/data.length;
  
 /* const percentage = numbersFilms.reduce((acc, item) => {
    acc = acc + item;
    return percentage;
      return percentage/numbersFilms.length;
  });*/
}