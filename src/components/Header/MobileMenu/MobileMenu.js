import React, { useState } from 'react';

// Material UI
import MoreIcon from '@material-ui/icons/MoreVert';
import IconButton from '@material-ui/core/IconButton';

// Components
import MobileMenuItems from './MobileMenuItems';

// Styles
import { useStyles } from './styles';

const mobileMenuId = 'primary-search-account-menu-mobile';

const MobileMenu = () => {
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const classes = useStyles();
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  return (
    <>
      <div className={classes.sectionMobile}>
        <IconButton
          aria-label="show more"
          aria-controls={mobileMenuId}
          aria-haspopup="true"
          onClick={handleMobileMenuOpen}
          color="inherit"
        >
          <MoreIcon />
        </IconButton>
      </div>
      <MobileMenuItems
        mobileMoreAnchorEl={mobileMoreAnchorEl}
        open={isMobileMenuOpen}
        handleMobileMenuClose={handleMobileMenuClose}
        handleMobileMenuOpen={handleMobileMenuOpen}
      />
    </>
  );
};

export default MobileMenu;
