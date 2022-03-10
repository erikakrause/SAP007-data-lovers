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

//FILTRO DE SELECIONAR O TÍTULO POR DIRETOR
export const directorFilter = (animation, selectedValue) => {
  return animation.filter(films => films.director.includes(selectedValue));
}  


//FILTRO POR NOME DO PERSONAGEM

export const searchCharacter = (data, animantion) => 
data.filter(item => item.name.toUpperCase().includes(animantion.toUpperCase()))
console.log(searchCharacter);

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

// PORCENTAGEM 
export const calculator = (numberScore) => {
  const percentage = numberScore.reduce((aac, item) => {
    acc = acc + item;
    return percentage;
  },0);
  return percentage/numberScore.length
}