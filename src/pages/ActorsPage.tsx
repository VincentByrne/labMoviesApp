import React from "react";
import PageTemplate from "../components/templateActorListPage"; 
import { getPopularActors } from "../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import { ActorDetails } from "../types/interfaces";
import AddToFavouriteActorsIcon from "../components/cardIcons/addToFavouriteActors"; 
import useFiltering from "../hooks/useFiltering";
import ActorFilterUI, {
  nameFilter,
  genderFilter,
} from "../components/actorFilterUI";

const nameFiltering = {
  name: "name",
  value: "",
  condition: nameFilter,
};

const genderFiltering = {
  name: "gender",
  value: "0",
  condition: genderFilter,
};

const ActorsPage: React.FC = () => {
  const { data, error, isLoading, isError } = useQuery<{ results: ActorDetails[] }, Error>(
    "popularActors",
    getPopularActors
  );

  const { filterValues, setFilterValues, filterFunction } = useFiltering(
    [nameFiltering, genderFiltering]
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  const changeFilterValues = (type: string, value: string) => {
    const changedFilter = { name: type, value: value };
    const updatedFilterSet =
      type === "name"
        ? [changedFilter, filterValues[1]]
        : [filterValues[0], changedFilter];
    setFilterValues(updatedFilterSet);
  };

  const actors = data ? data.results : [];
  const displayedActors = filterFunction(actors);

    return (
    <>
      <PageTemplate
        title="Popular Actors"
        actors={displayedActors}
        action={(actor: ActorDetails) => {
          return <AddToFavouriteActorsIcon {...actor} />;
        }}
      />
      <ActorFilterUI
        onFilterValuesChange={changeFilterValues}
        nameFilter={filterValues[0].value}
        genderFilter={filterValues[1].value}
      />
    </>
  );
};

export default ActorsPage;
