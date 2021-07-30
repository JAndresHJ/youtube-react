import React from 'react';

// Components
import VideoList from '../../components/Videos';

import { MainContainer, StyledTypography } from './styled';

const Home = () => {
  return (
    <MainContainer>
      <StyledTypography variant="h2" gutterBottom>
        Welcome to the Challenge!
      </StyledTypography>
      <VideoList />
    </MainContainer>
  );
};

export default Home;
