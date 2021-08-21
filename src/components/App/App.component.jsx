import React from 'react';
import useVideos from '../../hooks/useVideos';

// Components
import Home from '../../pages/Home/Home';
import Header from '../Header';

function App() {
  const { videos, search } = useVideos('wizeline');

  return (
    <>
      <Header search={search} />
      <Home videos={videos} />
    </>
  );
}

export default App;
