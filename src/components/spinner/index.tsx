import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';

const styles = {
  root: {
    display: 'flex',
    justifyContent: "center",
    '& > * + *': {
      marginLeft: 2,
    },
  },
};

const CircularIndeterminate: React.FC = ()=> {

    return (
        <div style={styles.root}>
            <CircularProgress />
            <CircularProgress />
        </div>
    );
}

export default CircularIndeterminate;

export interface GenreData {
  genres: {
    id: string;
    name: string
  }[];
}

export interface DiscoverMovies {
  page: number;	
  total_pages: number;
  total_results: number;
  results: BaseMovieProps[];
}
