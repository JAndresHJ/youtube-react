import React from 'react';

// Components
import VideoItem from './VideoItem/VideoItem';

// Utils
import mockedVideos from '../../utils/youtube-videos-mock.json';

const Videos = () => {
  const { items } = mockedVideos;

  return items.map((video, idx) => (
    // The first element of the mockedVideos does not have a videoId, that's
    // why is being validated when assigning to the key prop.
    <VideoItem
      key={video.id.videoId ? video.id.videoId : `${video.snippet.title}-${idx}`}
      description={video.snippet.description}
      title={video.snippet.title}
      publishTime={video.snippet.publishTime}
      thumbnails={video.snippet.thumbnails}
    />
  ));
};

export default Videos;
