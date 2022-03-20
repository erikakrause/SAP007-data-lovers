import { searchName, filterSort, movieRelease, directorFilter,
searchCharacter, genderFilter, calculator } from '../src/data.js';

const filmsTest = [
  {"title":"Castel in the Sky", "director":"Hayao Miyazaki","release_date": "1986"},
  {"title":"The Tale of the Princess Kaguya", "director":"Isao Takahata","release_date": "2013"},
  {"title":"From Up on Poppy Hill", "director":"Gorõ Miyazaki","release_date": "2011"},
  {"title":"The Secret World of Arrietty", "director":"Hirosama Yonebayash","release_date": "2011"},
]

const characters = [
  {"name": "Aiko", "gender":"Female"},
  {"name": "Kiki", "gender":"Female"},
  {"name":"Pazu", "gender": "Male"},
  {"name":"Takashi Yamada", "gender": "Male"},
  ]

//test films
//FILTRO PESQUISAR POR NOME DO TÍTULO//
describe('searchName', () => {
   
  it('should be a function', () => {
    expect(typeof searchName).toBe('function');
  });

  it('should return movies by title', () => {
    expect(searchName(filmsTest)).equal([
      {"title":"Castel in the Sky", "director":"Hayao Miyazaki", "release_date": "1986"},
      {"title":"The Tale of the Princess Kaguya", "director":"Isao Takahata", "release_date": "2013"},
      {"title":"From Up on Poppy Hill", "director":"Gorõ Miyazaki" ,"release_date": "2011"},
      {"title":"The Secret World of Arrietty", "director":"Hirosama Yonebayash", "release_date": "2010"},]);
  });
});

//PESQUISAR PELA ORDEM ALFÁBETICA//
describe('filterSort ', () => {
  const nameChar = [
    {"name": "Aiko", "gender": "Female"},
    {"name": "Kiki", "gender": "Female"},
    {"name": "Pazu", "gender": "Male"},
    {"name": "Takashi Yamada", "gender": "Male"}
  ]
  const nameMovie = [
    {"title": "Ponyo on the Cliff by the Sea"}, 
    {"title": "Whisper of the Heart"},
    {"title": "Castel in the Sky"}]
   
  
  it('should be a function', () => {
    expect(typeof filterSort).toBe('function');
  });

  it('return ``', () => {
    expect(filterSort(nameMovie, nameChar, "a-z")).toEqual([
      {"title": "Castel in the Sky"}, 
      {"title": "Ponyo on the Cliff by the Sea"},
      {"title": "Whisper of the Heart"},
      {"name": "Aiko", "gender": "Female"},
      {"name": "Kiki", "gender": "Female"},
      {"name": "Pazu", "gender": "Male"},
      {"name": "Takashi Yamada", "gender": "Male"}]);
  });
  it('return ``', () => {
    expect(filterSort(nameMovie, nameChar, "z-a")).toEqual([
      {"title": "Whisper of the Heart"},
      {"title": "Ponyo on the Cliff by the Sea"},
      {"title": "Castel in the Sky"},
      {"name": "Pazu", "gender": "Male"},
      {"name": "Kiki", "gender": "Female"},
      {"name": "Takashi Yamada", "gender": "Male"},
      {"name": "Aiki", "gender": "Female"}]);
  });
});

//TESTE DATA DE LANÇAMENTO//
describe('movieRelease', () => {

  it('should be a function', () => {
    expect(typeof movieRelease).toBe('function');
  });

  it ('should return date release movie', () => {
    expect(movieRelease(filmsTest)).toEqual([
      {"title":"Castel in the Sky", "director":"Hayao Miyazaki", "release_date": "1986"},
      {"title":"The Tale of the Princess Kaguya", "director":"Isao Takahata", "release_date": "2013"},
      {"title":"From Up on Poppy Hill", "director":"Gorõ Miyazaki","release_date": "2011"},
      {"title":"The Secret World of Arrietty", "director":"Hirosama Yonebayash", "release_date": "2010"},]);
  });
});

// TESTE FILTRO DIRETOR//
describe('directorFilter()', () => {

  it('should be a function', () => {
    expect(typeof directorFilter).toBe('function');
  });

  it ('should return director movie', () => {
    expect(directorFilter(filmsTest, "Hirosama Yonebayash")).toEqual([
      {"title":"Castel in the Sky", "director":"Hayao Miyazaki", "release_date": "1986"},
      {"title":"The Tale of the Princess Kaguya", "director":"Isao Takahata", "release_date": "2013"},
      {"title":"From Up on Poppy Hill", "director":"Gorõ Miyazaki", "release_date": "2011"},
      {"title":"The Secret World of Arrietty", "director":"Hirosama Yonebayash", "release_date": "2010"},]);
  });
});

//Test characters//
//FILTRO BUSCA NOME PERSONAGEM//
describe('searchCharacter()',() => {
  expect(typeof searchCharacter).toBe('function');
});
  
  it('should return name character', () => {
    expect(typeof searchCharacter(characters)).toEqual([
      {"name": "Aiko", "gender":"Female"},
      {"name": "Kiki", "gender":"Female"},
      {"name":"Pazu", "gender": "Male"},
      {"name":"Takashi Yamada", "gender": "Male"},
    ]);
  });

  //TESTE FILTRO GÊNERO//
  describe('genderFilter()', () => {

    it('should be a function', () => {
      expect(typeof genderFilter).toBe('function');
    });
  
    it ('should return director movie', () => {
      expect(genderFilter(characters, "Female")).toEqual([
        {"name":"Aiko", "gender":"Female"},
        {"name":"Kiki", "gender":"Female"},
        {"name":"Pazu", "gender":"Male"},
        {"name":"Takashi Yamada", "gender":"Male"},
      ]);
    });
  });

  //TESTE CÁLCULO AGREGADO//
 describe('calculator', () => {
   
    it('should be a function', () => {
      expect(typeof calculator).toBe('function');
    });
  
    it('should return percentage by object', () => {
      expect(calculator(filmsTest, characters)).equal(20, 329);
    });
 });
