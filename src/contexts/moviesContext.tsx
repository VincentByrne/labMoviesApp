import React, { useState, useCallback } from "react";
import { BaseMovieProps, Review, ActorDetails } from "../types/interfaces";

interface MovieContextInterface {
    favourites: number[];
    favouriteActors: number[];  // NEW
    mustWatch: number[];
    addToFavourites: ((movie: BaseMovieProps) => void);
    addToFavouriteActors: ((actor: ActorDetails) => void);  // NEW
    removeFromFavourites: ((movie: BaseMovieProps) => void);
    removeFromFavouriteActors: ((actor: ActorDetails) => void); 
    addToMustWatch: ((movie: BaseMovieProps) => void);  
    addReview: ((movie: BaseMovieProps, review: Review) => void);  
}
const initialContextState: MovieContextInterface = {
    favourites: [],
    favouriteActors: [],  // NEW
    mustWatch: [],  
    addToFavourites: () => {},
    addToFavouriteActors: () => {},  // NEW
    removeFromFavourites: () => {},
    removeFromFavouriteActors: () => {},
    addToMustWatch: () => {},  
    addReview: (movie, review) => { movie.id, review},
};

export const MoviesContext = React.createContext<MovieContextInterface>(initialContextState);

const MoviesContextProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
    const [myReviews, setMyReviews] = useState<Review[]>( [] )
    const [favourites, setFavourites] = useState<number[]>([]);
    const [favouriteActors, setFavouriteActors] = useState<number[]>([]);  // NEW
    const [mustWatch, setMustWatch] = useState<number[]>([]); 

    const addToFavourites = useCallback((movie: BaseMovieProps) => {
        setFavourites((prevFavourites) => {
            if (!prevFavourites.includes(movie.id)) {
                return [...prevFavourites, movie.id];
            }
            return prevFavourites;
        });
    }, []);

    const addToFavouriteActors = useCallback((actor: ActorDetails) => {  // NEW
        setFavouriteActors((prevFavourites) => {
            if (!prevFavourites.includes(actor.id)) {
                return [...prevFavourites, actor.id];
            }
            return prevFavourites;
        });
    }, []);

    const removeFromFavourites = useCallback((movie: BaseMovieProps) => {
        setFavourites((prevFavourites) => prevFavourites.filter((mId) => mId !== movie.id));
    }, []);

    const removeFromFavouriteActors = useCallback((actor: ActorDetails) => {  // ADD THIS FUNCTION
        setFavouriteActors((prevFavourites) => prevFavourites.filter((aId) => aId !== actor.id));
    }, []);

    const addReview = (movie:BaseMovieProps, review: Review) => {  
        setMyReviews( {...myReviews, [movie.id]: review } )
      };
    
    const addToMustWatch = useCallback((movie: BaseMovieProps) => {
        setMustWatch((prevMustWatch) => {
            if (!prevMustWatch.includes(movie.id)) {
                console.log("Must Watch List:", [...prevMustWatch, movie.id]);  // Console log as requested
                return [...prevMustWatch, movie.id];
            }
            return prevMustWatch;
        });
    }, []);

 return (
        <MoviesContext.Provider
            value={{
                favourites,
                favouriteActors,  // NEW
                addToFavourites,
                addToFavouriteActors,  // NEW
                removeFromFavourites,
                removeFromFavouriteActors,
                addReview,
                mustWatch,
                addToMustWatch,
            }}
        >
            {children}
        </MoviesContext.Provider>
    );
};

export default MoviesContextProvider;
