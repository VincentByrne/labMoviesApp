import React from "react";
import PageTemplate from "../components/templateActorListPage"; // similar to templateMovieListPage
import { getPopularActors } from "../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import { ActorDetails } from "../types/interfaces";
import AddToFavouriteActorsIcon from "../components/cardIcons/addToFavouriteActors"; // optional, like movies

const ActorsPage: React.FC = () => {
  const { data, error, isLoading, isError } = useQuery<{ results: ActorDetails[] }, Error>(
    "popularActors",
    getPopularActors
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  const actors = data ? data.results : [];

  return (
    <PageTemplate
      title="Popular Actors"
      actors={actors}
      action={(actor: ActorDetails) => {
        return <AddToFavouriteActorsIcon {...actor} />;
      }}
    />
  );
};

export default ActorsPage;
