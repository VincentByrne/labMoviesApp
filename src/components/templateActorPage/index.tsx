import React from "react"; 
import Grid from "@mui/material/Grid";
import {ActorDetails } from "../../types/interfaces";
import Avatar from "@mui/material/Avatar";
import ActorHeader from "../headerActor";
import Spinner from '../spinner';

const styles = {
  profileImage: {
    width: "100%",
    height: "auto",
  },
};

interface TemplateActorPageProps {
  actor: ActorDetails;
  children: React.ReactElement;
}

const TemplateActorPage: React.FC<TemplateActorPageProps> = ({ actor, children }) => {
  if (!actor) {
    return <Spinner />;
  }

  return (
    <>
      <ActorHeader {...actor} />

      <Grid container spacing={5} style={{ padding: "15px" }}>
        <Grid item xs={3}>
          <Avatar
            src={
              actor.profile_path
                ? `https://image.tmdb.org/t/p/w500/${actor.profile_path}`
                : undefined
            }
            alt={actor.name}
            sx={styles.profileImage}
            variant="square"
          />
        </Grid>

        <Grid item xs={9}>
          {children}
        </Grid>
      </Grid>
    </>
  );
};

export default TemplateActorPage;