// youtubeAPI.js

import axios from 'axios';

const API_KEY = 'AIzaSyDGZrm1fYYDUQTlPL4Cgmkzc2wLdEO4bvs';
const YOUTUBE_API_BASE_URL = 'https://www.googleapis.com/youtube/v3';

export const getVideoLink = async (videoId) => {
  try {
    const response = await axios.get(
      `${YOUTUBE_API_BASE_URL}/videos?part=snippet&id=${videoId}&key=${API_KEY}`
    );

    // Assuming the response has a valid video object
    const videoUrl =
      response.data?.items?.[0]?.snippet?.thumbnails?.high?.url || null;
    return videoUrl;
  } catch (error) {
    console.log('Error fetching video link:', error);
    return null;
  }
};
