import React from 'react';
import { render, screen } from '@testing-library/react';

// Components
import Videos from './Videos';

// Utils
import mockedVideos from '../../utils/youtube-videos-mock.json';

const { items } = mockedVideos;

describe('Video component', () => {
  it('displays the list of the videos', () => {
    render(<Videos />);

    const cardElements = screen.getAllByRole('button');

    expect(cardElements).toHaveLength(items.length);
  });
});
