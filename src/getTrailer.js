import axios from 'axios';

const YT_API_KEY = 'AIzaSyAfEh4b1g1W5v5NBZPxLzZ6Hgo2CbeaLNU';

const getTrailer = async (title) => {
  const query = `${title} official trailer`;
  const url = 'https://www.googleapis.com/youtube/v3/search';

  try {
    const response = await axios.get(url, {
      params: {
        part: 'snippet',
        q: query,
        key: YT_API_KEY,
        maxResults: 1,
        type: 'video',
      },
    });

    const videoId = response.data.items[0]?.id?.videoId;
    return videoId ? `https://www.youtube.com/embed/${videoId}` : null;
  } catch (error) {
    console.error('Error fetching trailer:', error);
    return null;
  }
};

export default getTrailer;

