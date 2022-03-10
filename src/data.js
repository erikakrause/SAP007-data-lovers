// FILTRO PARA BUSCAR PELO NOME DO FILME
export const searchName = (data, animantion) => 
data.filter(item => item.title.toUpperCase().includes(animantion.toUpperCase()))
console.log(searchName);


//FILTRO PARA BUSCAR O FILME POR ORDEM ALFABÉTICA
export const filterSort = (data, title) => {
  console.log(title);
  if(title === "a-z") {
    return data.sort((a, b) => (a.title > b.title ? 1 : -1));
} else {
  return data.sort((a, b) => (a.title > b.title ? -1 : 1));
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
  console.log(name);
  if(name === "a-z") {
    return data.sort((a, b) => (a.name > b.name ? 1 : -1));
} else {
  return data.sort((a, b) => (a.name > b.name ? -1 : 1));
  }
}

// FILTRO PELO GÊNERO
export const genderFilter = (animation, selectedValue) => {
  return animation.filter(films => films.gender.includes(selectedValue));
}  

// PORCENTAGEM POR
export const calculator = (value1, percentageItem) => {
  const percentage = Math.round((percentageItem * 100) / value1);
  return percentage;
}