import React from "react";
import { Grid, Card, CardContent } from "@mui/material";
import MovieTitle from "./MovieTitle";
import { MovieProps } from "../../utils/commonTypes";

const Movie = (props: MovieProps) => {
  const { title, poster_path, release_date, vote_average } = props;
  return (
    <Grid container>
      <Card>
        <CardContent>
          <MovieTitle title={title} />
        </CardContent>
      </Card>
    </Grid>
  );
};

export default Movie;
