import { useState, useEffect } from 'react';
import youtube from '../apis/youtube';

const useVideos = (defaultSearchTerm) => {
  const [videos, setVideos] = useState([]);

  const search = async (term) => {
    try {
      const response = await youtube.get('/search', {
        params: {
          q: term,
        },
      });
      setVideos(response.data.items);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    search(defaultSearchTerm);
  }, [defaultSearchTerm]);

  return { videos, search };
};

export default useVideos;
