import React, {  ChangeEvent  } from "react";
import { FilterOption } from "../../types/interfaces";
import { SelectChangeEvent } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import SortIcon from '@mui/icons-material/Sort';
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const styles = {
  root: {
    maxWidth: 345,
  },
  formControl: {
    margin: 1,
    minWidth: 220,
    backgroundColor: "rgb(255, 255, 255)",
  },
};

interface FilterActorsCardProps {
  onUserInput: (f: FilterOption, s: string) => void;
  nameFilter: string;
  genderFilter: string;
}

const FilterActorsCard: React.FC<FilterActorsCardProps> = ({ nameFilter, genderFilter, onUserInput }) => {
  const genders = [
    { id: "0", label: "All" },
    { id: "1", label: "Female" },
    { id: "2", label: "Male" },
    { id: "3", label: "Non-binary" },
  ];

  const handleChange = (e: SelectChangeEvent, type: FilterOption, value: string) => {
    e.preventDefault();
    onUserInput(type, value);
  };

  const handleTextChange = (e: ChangeEvent<HTMLInputElement>) => {
    handleChange(e, "name", e.target.value);
  };

  const handleGenderChange = (e: SelectChangeEvent) => {
    handleChange(e, "gender", e.target.value);
  };

  return (
    <>
      <Card sx={styles.root} variant="outlined">
        <CardContent>
          <Typography variant="h5" component="h1">
            <FilterAltIcon fontSize="large" />
            Filter the actors.
          </Typography>
          <TextField
            sx={styles.formControl}
            id="filled-search"
            label="Search by name"
            type="search"
            value={nameFilter}
            variant="filled"
            onChange={handleTextChange}
          />
          <FormControl sx={styles.formControl}>
            <InputLabel id="gender-label">Gender</InputLabel>
            <Select
              labelId="gender-label"
              id="gender-select"
              value={genderFilter}
              onChange={handleGenderChange}
            >
              {genders.map((gender) => (
                <MenuItem key={gender.id} value={gender.id}>
                  {gender.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </CardContent>
      </Card>

      <Card sx={styles.root} variant="outlined">
        <CardContent>
          <Typography variant="h5" component="h1">
            <SortIcon fontSize="large" />
            Sort the actors.
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default FilterActorsCard;
