import React from "react";
import useSWR from "swr";
import { Grid } from "@mui/material";
import HeadTitle from "../../components/HeadTitle";
import { getSWRFetcher } from "../../utils/swr/getFetcher";
import MovieList from "../../components/Movies/MovieList";

const Home = () => {
  const { data, error } = useSWR("/movie/popular", getSWRFetcher);

  console.log({ data, error });

  return (
    <Grid container justifyContent="center">
      <HeadTitle pageName="Popular movies" />
      {data && <MovieList movies={data?.data.results} />}
    </Grid>
  );
};

export default Home;
