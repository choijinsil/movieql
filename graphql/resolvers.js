import {getmovies, getById, addMovie, deletemovie} from "./db"

const resolvers ={
    Query:{
        movies:() =>getmovies(),
        movie:(_, {id}) => getById(id)
    },
    Mutation:{
        addMovie: (_, {name, score})=> addMovie(name, score),
        deletemovie: (_, {id}) => deletemovie(id)
    }
};

export default resolvers;