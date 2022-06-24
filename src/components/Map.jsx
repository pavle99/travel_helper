import React from "react";
import GoogleMapReact from "google-map-react";

import useStyles from "./styles.js";

const Map = ({setCoordinates, setBounds, coordinates,}) => {
  const styles = useStyles();

  return (
    <div className={styles.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }}
        defaultCenter={{lat:0, lng:0}}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={{ disableDefaultUI: true, zoomControl: true, styles: "" }}
        onChange={(e) => {
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
          setCoordinates({ lat: e.center.lat, lng: e.center.lng });
        }}
      >
        
      </GoogleMapReact>
    </div>
  );
};

export default Map;