/// FILTRO PARA BUSCAR PELO NOME DO FILME///
export const searchName = (data, animantion) => 
data.filter(item => item.title.toUpperCase().includes(animantion.toUpperCase()))

///FILTRO PARA BUSCAR O FILME POR ORDEM ALFABÉTICA///
export const filterSort = (data, title) => {
  const newArrFilms = [...data]
  if(title === "a-z") {
    return newArrFilms.sort((a, b) => (a.title > b.title ? 1 : -1)); 
} else {
  return newArrFilms.sort((a, b) => (a.title > b.title ? -1 : 1));
  }
}

///FILTRO ANO DE LANÇAMENTO FILME///
export const movieRelease = (animation, selectedValue) => {
  return animation.filter(films => films.release_date.includes(selectedValue));
}

///FILTRO DE SELECIONAR O TÍTULO POR DIRETOR///
export const directorFilter = (animation, selectedValue) => {
  return animation.filter(films => films.director.includes(selectedValue));
}  

///FILTRO POR NOME DO PERSONAGEM///
export const searchCharacter = (character, characterSelected) => 
character.filter(films => films.name.toUpperCase().includes(characterSelected.toUpperCase()));

///FILTRO ORDEM ALFABÉTICA PERSONAGEM///
export const filterSortPeople = (data, name) => {
  const newArrChar = [...data]  
  if(name === "a-z") { 
    return newArrChar.sort((a, b) => (a.name > b.name ? 1 : -1)); 
} else {
  return newArrChar.sort((a, b) => (a.name > b.name ? -1 : 1)); 
  }
}

///FILTRO PELO GÊNERO///
export const genderFilter = (animation, selectedValue) => {
  return animation.filter(films => films.gender.includes(selectedValue));
}  

///PORCENTAGEM CÁLCULO AGREGADO/// 
export const calculator = (filterArrFilm, data) => {
  return filterArrFilm.length * 100/data.length;
}