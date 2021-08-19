import React from 'react';

// Material UI
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';

// Helpers
import { useStyles } from './styles';

const SearchInput = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.search}>
        <div className={classes.searchIcon}>
          <SearchIcon />
        </div>
        <InputBase
          placeholder="Search…"
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          inputProps={{ 'aria-label': 'search' }}
        />
      </div>
      <div className={classes.grow} />
    </>
  );
};

export default SearchInput;
