import React from 'react';

// Material UI
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

// Styles
import { useStyles } from './styles';

const BurgerMenu = () => {
  const classes = useStyles();

  return (
    <IconButton
      edge="start"
      className={classes.menuButton}
      color="inherit"
      aria-label="open drawer"
    >
      <MenuIcon data-testid="menu-icon" />
    </IconButton>
  );
};

export default BurgerMenu;
