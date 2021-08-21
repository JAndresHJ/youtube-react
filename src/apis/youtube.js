import axios from 'axios';

const KEY = 'AIzaSyAAxVOZ2I0xv8T_H0rAN_4v--65Wfe5EKY';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 10,
    key: KEY,
  },
});
