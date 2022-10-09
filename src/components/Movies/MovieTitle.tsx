import React from "react";
import { Grid } from "@mui/material";

interface MovieTtileProps {
  title: string;
}

const MovieTitle = ({ title }: MovieTtileProps) => {
  return (
    <Grid container justifyContent="center">
      <h3>{title}</h3>
    </Grid>
  );
};

export default MovieTitle;
