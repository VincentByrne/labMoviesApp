import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Avatar from "@mui/material/Avatar";
import { ActorDetails } from "../../types/interfaces";

const styles = {
  root: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexWrap: "wrap",
    padding: 1.5,
  },
  avatar: {
    backgroundColor: "rgb(255, 0, 0)",
  },
};

const ActorHeader: React.FC<ActorDetails> = (actor) => {
  const isFavourite = () => {
    const favouritesString = localStorage.getItem("favouriteActors");
    if (!favouritesString) return false;

    const favourites = JSON.parse(favouritesString);
    return favourites.some((fav: any) => fav.id === actor.id);
  };

  return (
    <Paper component="div" sx={styles.root}>
      <IconButton aria-label="go back">
        <ArrowBackIcon color="primary" fontSize="large" />
      </IconButton>

      {isFavourite() && (
        <Avatar sx={styles.avatar}>
          <FavoriteIcon />
        </Avatar>
      )}

      <Typography variant="h4" component="h3">
        {actor.name}
        <br />
        <span>{`Born: ${actor.birthday || "Unknown"} ${
          actor.place_of_birth ? "in " + actor.place_of_birth : ""
        }`}</span>
      </Typography>

      <IconButton aria-label="go forward">
        <ArrowForwardIcon color="primary" fontSize="large" />
      </IconButton>
    </Paper>
  );
};

export default ActorHeader;
