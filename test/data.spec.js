import { searchName, filterSort, movieRelease, directorFilter,
searchCharacter, filterSortPeople, genderFilter } from '../src/data.js';

const filmsTest = [
  {
    "title":"Castel in the Sky",
    "director":"Hayao Miyazaki",
    "release_date": "1986",
  },
  {
    "title":"The Tale of the Princess Kaguya",
    "director":"Isao Takahata",
    "release_date": "2013",
  },
  {
    "title":"From Up on Poppy Hill",
    "director":"Gorõ Miyazaki",
    "release_date": "2011",
  },
  {
    "title":"The Secret World of Arrietty",
    "director":"Hirosama Yonebayash",
    "release_date": "2011",
  },
]

const characters = [
  {
    "name": "Aiko",
    "gender":"Female",
},
  {
    "name": "Kiki",
    "gender":"Female"
  },
 {
   "name":"Pazu",
   "gender": "Male",
  },
   {
     "name":"Takashi Yamada",
     "gender": "Male",
    },
  ]

//test films
describe('searchName()', () => {
   
  it('should be a function', () => {
    expect(typeof searchName).toBe('function');
  });

  it('should return movies by title', () => {
    expect(searchName(filmsTest)).equal([
      {"title":"Castel in the Sky", "director":"Hayao Miyazaki", "release_date": "1986", },
      {"title":"The Tale of the Princess Kaguya", "director":"Isao Takahata", "release_date": "2013", },
      {"title":"From Up on Poppy Hill", "director":"Gorõ Miyazaki" ,"release_date": "2011", },
      {"title":"The Secret World of Arrietty", "director":"Hirosama Yonebayash", "release_date": "2010", },]);
  });
});


describe('filterSort()', () => {
  const nameMovie = [{"title": "Castel in the Sky"}, {"title": "Ponyo on the Cliff by the Sea"}, {"title": "Whisper of the Heart"}];
  
  it('should be a function', () => {
    expect(typeof filterSort).toBe('function');
  });

  it('should return title in alphabetic order', () => {
    expect(filterSort(nameMovie)).toEqual([{"title": "Castel in the Sky"}, {"title": "Ponyo on the Cliff by the Sea"}, {"title": "Whisper of the Heart"}]);
  });
});

describe('movieRelease()', () => {

  it('should be a function', () => {
    expect(typeof movieRelease).toBe('function');
  });

  it ('should return date release movie', () => {
    expect(movieRelease(filmsTest)).toEqual([
      {"title":"Castel in the Sky", "director":"Hayao Miyazaki", "release_date": "1986", },
      {"title":"The Tale of the Princess Kaguya", "director":"Isao Takahata", "release_date": "2013", },
      {"title":"From Up on Poppy Hill", "director":"Gorõ Miyazaki","release_date": "2011", },
      {"title":"The Secret World of Arrietty", "director":"Hirosama Yonebayash", "release_date": "2010", },]);
  });
});

describe('directorFilter()', () => {

  it('should be a function', () => {
    expect(typeof directorFilter).toBe('function');
  });

  it ('should return director movie', () => {
    expect(directorFilm(filmsTest)).toEqual([
      {"title":"Castel in the Sky", "director":"Hayao Miyazaki", "release_date": "1986", },
      {"title":"The Tale of the Princess Kaguya", "director":"Isao Takahata", "release_date": "2013", },
      {"title":"From Up on Poppy Hill", "director":"Gorõ Miyazaki", "release_date": "2011",},
      {"title":"The Secret World of Arrietty", "director":"Hirosama Yonebayash", "release_date": "2010", },]);
  });
});

//Test characters


describe('searchCharacter()',() => {
  expect(typeof searchCharacter).toBe('function');
});
  
  it('should return name character', () => {
    expect(typeof searchCharacter(characters)).toEqual([
      {"name": "Aiko", "gender":"Female", },
      {"name": "Kiki", "gender":"Female", },
      {"name":"Pazu", "gender": "Male", },
      {"name":"Takashi Yamada", "gender": "Male", },
    ]);
  });

  describe('filterSortPeople()', () =>{
    expect(typeof filterSortPeople).toBe('function');
  });

  it('should return character in alphabetic order', () => {
    expect(typeof filterSortPeople(characters)).toEqual([
      {"name": "Aiko", "gender":"Female"}, {"name": "Kiki", "gender":"Female"}, {"name":"Pazu", "gender":"Male"}, {"name":"Takashi Yamada", "gender":"Male"}
      ]);
  });

  describe('genderFilter()', () => {

    it('should be a function', () => {
      expect(typeof genderFilter).toBe('function');
    });
  
    it ('should return director movie', () => {
      expect(directorFilm(characters)).toEqual([
        {"name":"Aiko", "gender":"Female", },
        {"name":"Kiki", "gender":"Female", },
        {"name":"Pazu", "gender": "Male", },
        {"name":"Takashi Yamada", "gender":"Male", },]);
    });
  });