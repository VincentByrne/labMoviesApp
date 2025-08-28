import React from "react"
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { getActor } from "../api/tmdb-api";
import Spinner from "../components/spinner";
import { ActorDetails } from "../types/interfaces";
import ActorDetailsComponent from "../components/actorDetails";
import PageTemplate from "../components/templateActorPage";

const ActorDetailsPage: React.FC = () => {
    const { id } = useParams();
    const { data: actor, error, isLoading, isError } = useQuery<ActorDetails, Error>(
    ["actor", id],
    () => getActor(id || "")
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

    return (
    <>
      {actor ? (
        <PageTemplate actor={actor}>
          <ActorDetailsComponent {...actor} />
        </PageTemplate>
      ) : (
        <p>Waiting for actor details</p>
      )}
    </>
  );
};

export default ActorDetailsPage;
