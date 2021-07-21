import React from 'react';

// Components
import Videos from '../../components/Videos';

import { MainContainer, StyledTypography } from './styled';

const Home = () => {
  return (
    <MainContainer>
      <StyledTypography variant="h2" gutterBottom>
        Welcome to the Challenge!
      </StyledTypography>
      <Videos />
    </MainContainer>
  );
};

export default Home;
