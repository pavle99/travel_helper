import React from "react";
import GoogleMapReact from "google-map-react";

import useStyles from "./styles.js";
import { Rating } from "@material-ui/lab";
import { Paper, Typography, useMediaQuery } from "@material-ui/core";

const Map = ({ setCoordinates, setBounds, coordinates, places, weatherData, setChildClicked }) => {
  const styles = useStyles();

  const isDesktop = useMediaQuery("(min-width:600px)");

  return (
    <div className={styles.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }}
        defaultCenter={{ lat: 0, lng: 0 }}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={{ disableDefaultUI: true, zoomControl: true, styles: "" }}
        onChange={(e) => {
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
          setCoordinates({ lat: e.center.lat, lng: e.center.lng });
        }}
        onChildClick={(child) => setChildClicked(child)}
      >

        {places?.map((place, i) => (
          <div className={styles.markerContainer}
               lat={Number(place.latitude)}
               lng={Number(place.longitude)}
               key={i}
          >
            {
              !isDesktop ? (<LocationOnOutlinedIcon color="primary" fontSize="large"/>
              ) : (
                <Paper elevation={3} className={styles.paper}>
                  <Typography className={styles.typography} variant="subtitle2" gutterBottom>
                    {place.name}
                  </Typography>
                  <img
                    className={styles.pointer}
                    src={place.photo ? place.photo.images.large.url : "https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg"}
                    alt={place.name}
                  />
                  <Rating size="small" value={Number(place.rating)} readOnly/>
                </Paper>
              )
            }
          </div>
        ))}
        {weatherData?.list?.map((data, i) => (
          <div key={i} lat={data.coord.lat} lng={data.coord.lon}>
            <img height={100} src={`https://openweathermap.org/img/w/${data.weather[0].icon}.png`} alt="Weather"/>
          </div>
        ))}
      </GoogleMapReact>
    </div>
  );
};

export default Map;