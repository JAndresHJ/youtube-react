import { renderHook } from '@testing-library/react-hooks';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import useVideos from '../useVideos';

describe('useVideos hook', () => {
  test('useVideos performs GET request', async () => {
    const initialValue = 'wizeline';
    const maxResults = 10;
    const mock = new MockAdapter(axios);

    const mockData = 'response';
    const url = 'http://mock';
    mock.onGet(url).reply(200, mockData);

    const { result, waitForNextUpdate } = renderHook(() => useVideos(initialValue));
    expect(result.current.videos).toEqual([]);

    await waitForNextUpdate();

    expect(result.current.videos.length).toEqual(maxResults);
  });
});
