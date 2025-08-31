import React, { useContext } from "react"
import PageTemplate from "../components/templateActorListPage";
import { MoviesContext } from "../contexts/moviesContext";
import { useQueries } from "react-query";
import { getActor } from "../api/tmdb-api";
import Spinner from "../components/spinner";
import RemoveFromFavouriteActors from "../components/cardIcons/removeFromFavouriteActors";


const FavouriteActorsPage: React.FC = () => {
  const { favouriteActors: actorIds } = useContext(MoviesContext);

  // Create an array of queries and run them in parallel.
  const favouriteActorQueries = useQueries(
    actorIds.map((actorId) => {
      return {
        queryKey: ["actor", actorId],
        queryFn: () => getActor(actorId.toString()),
      };
    })
    );


  // Check if any of the parallel queries is still loading
  const isLoading = favouriteActorQueries.find((a) => a.isLoading === true);

  if (isLoading) {
    return <Spinner />;
  }

 const allFavourites = favouriteActorQueries.map((q) => q.data).filter(Boolean);
return (
    <PageTemplate
      title="Favourite Actors"
      actors={allFavourites}
      action={(actor) => {
        return <RemoveFromFavouriteActors {...actor} />;
      }}
    />
  );
};

export default FavouriteActorsPage;
