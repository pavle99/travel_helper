import React from "react";
import { AppBar, Box, InputBase, Toolbar, Typography } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";

import SearchIcon from "@material-ui/icons/Search";

import useStyles from "./styles.js";

const Header = () => {
  const styles = useStyles();

  return (
    <AppBar position="static">
      <Toolbar className={styles.toolbar}>
        <Typography variant="h5" className={styles.title}>
          Travel Advisor
        </Typography>
        <Box display="flex">
          <Typography variant="h6" className={styles.title}>
            Explore new places
          </Typography>
          {/*<Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>*/}
            <div className={styles.search}>
              <div className={styles.searchIcon}>
                <SearchIcon/>
              </div>
              <InputBase
                placeholder="Search…"
                classes={{ root: styles.inputRoot, input: styles.inputInput }}
              />
            </div>
          {/*</Autocomplete>*/}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;