import React, { useEffect, useState } from "react";
import { CssBaseline, Grid } from "@material-ui/core";


import Header from "./components/Header";
import List from "./components/List";
import Map from "./components/Map";

const App = () => {

  const [type, setType] = useState("restaurants");
  const [rating, setRating] = useState("");

  const [coordinates, setCoordinates] = useState({});
  const [bounds, setBounds] = useState({});

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
      setCoordinates({ lat: latitude, lng: longitude });
    });
  }, []);

  return (
    <>
      <CssBaseline/>
      <Header />
      <Grid container spacing={3} style={{ width: "100%" }}>
        <Grid item xs={12} md={4}>
          <List
            type={type}
            setType={setType}
            rating={rating}
            setRating={setRating}
          />
        </Grid>
        <Grid
          item
          xs={12}
          md={8}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Map
            setCoordinates={setCoordinates}
            setBounds={setBounds}
            coordinates={coordinates}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default App;