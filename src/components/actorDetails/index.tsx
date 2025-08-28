import React, { useState } from "react";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import StarRate from "@mui/icons-material/StarRate";
import CakeIcon from "@mui/icons-material/Cake";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import WorkIcon from "@mui/icons-material/Work";
import Typography from "@mui/material/Typography";
import { ActorDetails } from "../../types/interfaces";

const styles = {
    chipSet: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        listStyle: "none",
        padding: 1.5,
        margin: 0,
    },
    chipLabel: {
        margin: 0.5,
    },
};

const ActorDetailsComponent: React.FC<ActorDetails> = (actor) => {
    return (
        <>
            <Typography variant="h5" component="h3">
                Biography
            </Typography>

            <Typography variant="h6" component="p">
                {actor.biography || "Not available."}
            </Typography>

            <Paper component="ul" sx={styles.chipSet}>
                <Chip 
                    icon={<CakeIcon />} 
                    label={`Born: ${actor.birthday || "Unknown"}`} 
                />
                {actor.deathday && (
                    <Chip 
                        icon={<CakeIcon />} 
                        label={`Died: ${actor.deathday}`} 
                    />
                )}
                {actor.place_of_birth && (
                    <Chip
                        icon={<LocationOnIcon />}
                        label={actor.place_of_birth}
                    />
                )}
                <Chip
                    icon={<WorkIcon />}
                    label={actor.known_for_department}
                />
                <Chip
                    icon={<StarRate />}
                    label={`Popularity: ${actor.popularity ? actor.popularity.toFixed(1) : "N/A"}`}
                />
            </Paper>
        </>
    );
};
export default ActorDetailsComponent;
