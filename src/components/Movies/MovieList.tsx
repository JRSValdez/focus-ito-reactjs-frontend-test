import React from "react";
import { Grid } from "@mui/material";
import Movie from "./Movie";

import { MovieProps } from "../../utils/commonTypes";

interface MovieListProps {
  movies: MovieProps[];
}

const MovieList = ({ movies }: MovieListProps) => {
  return (
    <Grid container>
      {movies.map((movie) => (
        <Grid item xs={6} md={4}>
          <Movie {...movie} />
        </Grid>
      ))}
    </Grid>
  );
};

export default MovieList;
