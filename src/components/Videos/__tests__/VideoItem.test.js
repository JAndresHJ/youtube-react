import React from 'react';
import { render, screen } from '@testing-library/react';
import VideoItem from '../VideoItem/VideoItem';

const videoItemProps = {
  title: 'mocked title',
  publishTime: '2014-09-27T01:39:18Z',
  description: 'mocked description',
  thumbnails: {
    high: {
      url: 'https://yt3.ggpht.com/ytc/AAUvwnighSReQlmHl_S_vSfvnWBAG5Cw4A0YxtE0tm5OpQ=s800-c-k-c0xffffffff-no-rj-mo',
    },
  },
};

describe('VideoItem component', () => {
  it('displays the title of the video', () => {
    render(<VideoItem {...videoItemProps} />);

    const titleElement = screen.getByText(videoItemProps.title);

    expect(titleElement).toBeInTheDocument();
  });

  it('displays the description of the video', () => {
    render(<VideoItem {...videoItemProps} />);
    const descriptionElement = screen.getByText(videoItemProps.title);

    expect(descriptionElement).toBeInTheDocument();
  });

  it('displays the publish time of the video', () => {
    render(<VideoItem {...videoItemProps} />);

    const publishTime = screen.getByText('2014-09-27');

    expect(publishTime).toBeInTheDocument();
  });
});
