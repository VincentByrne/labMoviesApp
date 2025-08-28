import React from "react";
import PageTemplate from '../components/templateMovieListPage';
import { BaseMovieProps } from "../types/interfaces";
import { getPopularMovies } from "../api/tmdb-api";
import { DiscoverMovies } from "../types/interfaces";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import AddToFavouritesIcon from "../components/cardIcons/addToFavourites";

const PopularMoviesPage: React.FC = () => { 
  const { data, error, isLoading, isError } = useQuery<DiscoverMovies, Error>(
    "popular", 
    getPopularMovies
  );

    if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

   return (
    <PageTemplate
      title="Popular Movies"
      movies={data?.results || []}
      action={(movie: BaseMovieProps) => {
        return <AddToFavouritesIcon  {...movie} />
      }}
    />
  );
};

export default PopularMoviesPage;