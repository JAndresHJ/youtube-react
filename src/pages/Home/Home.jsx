import React, { useEffect, useState } from 'react';

// Components
import VideoList from '../../components/Videos';
import VideoDetail from '../../components/VideoDetail/VideoDetail';

import { MainContainer, StyledTypography } from './styled';

const Home = ({ videos }) => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    setSelectedVideo(videos[0]);
  }, [videos]);

  return (
    <MainContainer>
      <StyledTypography variant="h2" gutterBottom>
        Welcome to the Challenge!
      </StyledTypography>
      <VideoDetail video={selectedVideo} />
      <VideoList videos={videos} onVideoSelect={setSelectedVideo} />
    </MainContainer>
  );
};

export default Home;
