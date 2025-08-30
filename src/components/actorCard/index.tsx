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
//import CalendarIcon from "@mui/icons-material/CalendarTodayTwoTone";
import StarRateIcon from "@mui/icons-material/StarRate";
import Grid from "@mui/material/Grid";
import img from '../../images/film-poster-placeholder.png';
import MaleIcon from "@mui/icons-material/Male";
import FemaleIcon from "@mui/icons-material/Female";
import TransgenderIcon from "@mui/icons-material/Transgender";
import { MoviesContext } from "../../contexts/moviesContext";
import { ActorDetails } from "../../types/interfaces"; 


const styles = {
  card: { maxWidth: 345 },
  media: { height: 500 },
  favouriteAvatar: {
    backgroundColor: "rgb(255, 0, 0)",
  },
};

const getGenderInfo = (gender: number) => {
  switch (gender) {
    case 1: return { label: "Female", icon: <FemaleIcon fontSize="small" /> };
    case 2: return { label: "Male", icon: <MaleIcon fontSize="small" /> };
    case 3: return { label: "Non-binary", icon: <TransgenderIcon fontSize="small" /> };
    default: return { label: "Unknown", icon: <StarRateIcon fontSize="small" /> };
  }
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
              {getGenderInfo(actor.gender).icon}
              {getGenderInfo(actor.gender).label}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h6" component="p">
              <StarRateIcon fontSize="small" />
              {"  "} {actor.popularity }{" "}
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