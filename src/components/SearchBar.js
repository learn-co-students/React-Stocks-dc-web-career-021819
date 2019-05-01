import React from 'react';
import { AppBar, Toolbar, Typography, Radio, RadioGroup, FormControl, FormControlLabel, FormLabel, Select, MenuItem, InputLabel } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  rightSideSearchBar: {
    textAlign: "right",
    float: "right",
    width: "100%",
  },
  sortSearchBar: {
    margin: "auto",
    padding: 5,
    display: "inline-flex",
    flexDirection: "row",
  },
  sortButtons: {
    flexDirection: "row",
  },
  searchBarAll: {
    width: "100%",
  },
  searchBarTitle: {
    color: "white",
    width: "100%"
  },
})

const SearchBar = (props) => {
  const { classes, sortChangeHandler, filterChangeHandler } = props;
  return (
    <AppBar className={classes.searchBarAll}>
      <Toolbar>
        <Typography variant="h5" className={classes.searchBarTitle}>
          Flatiron Stock Exchange
        </Typography>

        <div className={classes.rightSideSearchBar}>
          <span className={classes.sortSearchBar} >
            <FormLabel>Sort by:</FormLabel>
            <FormControl className={classes.sortButtons}>
              <RadioGroup className={classes.sortButtons} aria-label="Gender" onChange={sortChangeHandler}>
                <FormControlLabel value="Alphabetically" control={<Radio />} label="Alphabetically" />
                <FormControlLabel value="Price" control={<Radio />} label="Price" />
              </RadioGroup>
            </FormControl>
          </span>

          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="demo-controlled-open-select">Filter</InputLabel>
            <Select onChange={filterChangeHandler} >
              <MenuItem value="None">
                <em>None</em>
              </MenuItem>
              <MenuItem value="Tech">Tech</MenuItem>
              <MenuItem value="Sportswear">Sportswear</MenuItem>
              <MenuItem value="Finance">Finance</MenuItem>
            </Select>
          </FormControl>


        </div>

      </Toolbar>
    </AppBar>
  );
}


export default withStyles(styles)(SearchBar);
