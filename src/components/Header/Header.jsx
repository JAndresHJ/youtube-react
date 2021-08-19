// React libraries
import React from 'react';

// Material UI
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

// External Components
import DesktopMenu from './DesktopMenu';
import SearchInput from './SearchInput';
import BurgerMenu from './BurgerMenu';
import MobileMenu from './MobileMenu';

// Helpers
import { useStyles } from './styles';

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.grow}>
      <AppBar
        classes={{
          root: classes.appBar,
        }}
        position="static"
      >
        <Toolbar>
          <BurgerMenu />
          <SearchInput />
          <DesktopMenu />
          <MobileMenu />
        </Toolbar>
      </AppBar>
    </div>
  );
}
