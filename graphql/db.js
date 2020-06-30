let movies=[
    {
        id:0,
        name:"Star Wars - The new one",
        score: 1
    },
    {
        id:1,
        name:"Avengers - The new one",
        score: 8
    },
    {
        id:2,
        name:"The Godfather I",
        score: 99
    },
    {
        id:3,
        name:"Logan",
        score: 2
    },
];

export const getmovies =() => movies;

export const getById = id => {
    const filteredMovies = movies.filter(movie => movie.id === id)
    return filteredMovies[0];
    // onst filteredPeople = people.filter(person => person.id === id)
    // return filteredPeople[0];
}

export const deletemovie = (id) =>{
    const cleanMovies = movies.filter(movie => movie.id !== id)
    if(movies.length > cleanMovies.length){
        movies = cleanMovies; // 내꺼 제외한 나머지를 값을 넣어줌
        return true;
    }else{
        return false;
    }
}

export const addMovie = (name, score) =>{
    const newMovie={
        id: `${movies.length +1}`,
        name,
        score
    };
    movies.push(newMovie)
    return newMovie;
}