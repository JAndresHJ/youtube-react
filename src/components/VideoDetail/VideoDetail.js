import React from 'react';

// Material UI
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';

// Helpers
import { VideoDetailContainer, LoadingContainer } from './styled';

const VideoDetail = ({ video }) => {
  if (!video) {
    return (
      <LoadingContainer>
        <CircularProgress size={60} />
      </LoadingContainer>
    );
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <VideoDetailContainer>
      <iframe title="video" width="100%" height="500px" src={videoSrc} />
      <Typography gutterBottom variant="h5" component="h2">
        {video.snippet.title}
      </Typography>
      <Typography variant="body2" color="textSecondary" component="p">
        {video.snippet.description}
      </Typography>
    </VideoDetailContainer>
  );
};

export default VideoDetail;
