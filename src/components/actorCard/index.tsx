import React, {useContext} from "react";
import Avatar from "@mui/material/Avatar";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import CalendarIcon from "@mui/icons-material/CalendarTodayTwoTone";
import StarRateIcon from "@mui/icons-material/StarRate";
import Grid from "@mui/material/Grid";
import img from '../../images/film-poster-placeholder.png'; 
import { BaseMovieProps } from "../../types/interfaces"; 
import { MoviesContext } from "../../contexts/moviesContext";
import { ActorDetails } from "../../types/interfaces"; 


const styles = {
  card: { maxWidth: 345 },
  media: { height: 500 },
  favouriteAvatar: {
    backgroundColor: "rgb(255, 0, 0)",
  },
};

interface ActorCardProps {
  actor: ActorDetails;
  action: (a: ActorDetails) => React.ReactNode;
}

const ActorCard: React.FC<ActorCardProps> = ({ actor, action }) => {
  const { favouriteActors } = useContext(MoviesContext);

  const isFavourite = favouriteActors.find((id) => id === actor.id) ? true : false;  //NEw

  return (
    <Card sx={styles.card}>
      <CardHeader
        avatar={
           isFavourite ? (   
            <Avatar sx={styles.favouriteAvatar}>
              <FavoriteIcon />
            </Avatar>
          ) :null
        }
        title={
          <Typography variant="h5" component="p">
            {actor.name}
          </Typography>
        }
      />
      <CardMedia
        sx={styles.media}
        image={
          actor.profile_path
            ? `https://image.tmdb.org/t/p/w500/${actor.profile_path}`
            : img
        }
      />
      <CardContent>
        <Grid container>
          <Grid item xs={6}>
            <Typography variant="h6" component="p">
              <CalendarIcon fontSize="small" />
              {actor.birthday || "Unknown"}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h6" component="p">
              <StarRateIcon fontSize="small" />
              {"  "} {actor.popularity?.toFixed(1)}{" "}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions disableSpacing>
        {action(actor)}
        <Link to={`/actor/${actor.id}`}>
          <Button variant="outlined" size="medium" color="primary">
            More Info ...
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}

export default ActorCard;