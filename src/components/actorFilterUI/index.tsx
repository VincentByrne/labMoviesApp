import React, { useState } from "react";
import FilterActorsCard from "../filterActorsCard";
import Fab from "@mui/material/Fab";
import Drawer from "@mui/material/Drawer";
import { ActorDetails } from "../../types/interfaces";

export const nameFilter = (actor: ActorDetails, value: string): boolean => {
    return actor.name.toLowerCase().search(value.toLowerCase()) !== -1;
};

export const genderFilter = (actor: ActorDetails, value: string) => {
    if (value === "0") return true; // check all the values of gender.
    return actor.gender?.toString() === value;
};

const styles = {
    root: {
        backgroundColor: "#bfbfbf",
    },
    fab: {
        marginTop: 8,
        position: "fixed",
        top: 20,
        right: 2,
    },
};

interface ActorFilterUIProps {
    onFilterValuesChange: (f: string, s: string) => void;
    nameFilter: string;
    genderFilter: string;
}


const ActorFilterUI: React.FC<ActorFilterUIProps> = ({ onFilterValuesChange, nameFilter, genderFilter }) => {
    const [drawerOpen, setDrawerOpen] = useState(false);

    return (
        <>
            <Fab
                color="secondary"
                variant="extended"
                onClick={() => setDrawerOpen(true)}
                sx={styles.fab}
            >
                Filter
            </Fab>
            <Drawer
                anchor="left"
                open={drawerOpen}
                onClose={() => setDrawerOpen(false)}
            >
                <FilterActorsCard
                    onUserInput={onFilterValuesChange}
                    nameFilter={nameFilter}
                    genderFilter={genderFilter}
                />
            </Drawer>
        </>
    );
};

export default ActorFilterUI;