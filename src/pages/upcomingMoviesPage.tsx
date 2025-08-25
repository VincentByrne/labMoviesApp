import React from "react";
import PageTemplate from '../components/templateMovieListPage';
import { BaseMovieProps } from "../types/interfaces";
import { getUpcomingMovies } from "../api/tmdb-api";
import { DiscoverMovies } from "../types/interfaces";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import AddToFavouritesIcon from '../components/cardIcons/addToFavourites';

const UpcomingMoviesPage: React.FC = () => {
  const { data, error, isLoading, isError } = useQuery<DiscoverMovies, Error>(
    "upcoming", 
    getUpcomingMovies
  );

    if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

   return (
    <PageTemplate
      title="Upcoming Movies"
      movies={data?.results || []}
      action={(movie: BaseMovieProps) => {
        return <AddToFavouritesIcon {...movie} />
      }}
    />
  );
};

export default UpcomingMoviesPage;