const axios = require('axios');

const FACEBOOK_API_URL = 'https://graph.facebook.com/v12.0';
const YOUTUBE_API_URL = 'https://www.googleapis.com/youtube/v3';

const getFacebookData = async (endpoint, accessToken) => {
    try {
        const response = await axios.get(`${FACEBOOK_API_URL}/${endpoint}`, {
            params: {
                access_token: accessToken
            }
        });
        return response.data;
    } catch (error) {
        throw new Error(`Error fetching data from Facebook: ${error.message}`);
    }
};

const postToFacebook = async (endpoint, data, accessToken) => {
    try {
        const response = await axios.post(`${FACEBOOK_API_URL}/${endpoint}`, data, {
            params: {
                access_token: accessToken
            }
        });
        return response.data;
    } catch (error) {
        throw new Error(`Error posting data to Facebook: ${error.message}`);
    }
};

const getYouTubeData = async (endpoint, apiKey) => {
    try {
        const response = await axios.get(`${YOUTUBE_API_URL}/${endpoint}`, {
            params: {
                key: apiKey
            }
        });
        return response.data;
    } catch (error) {
        throw new Error(`Error fetching data from YouTube: ${error.message}`);
    }
};

const postToYouTube = async (endpoint, data, apiKey) => {
    try {
        const response = await axios.post(`${YOUTUBE_API_URL}/${endpoint}`, data, {
            params: {
                key: apiKey
            }
        });
        return response.data;
    } catch (error) {
        throw new Error(`Error posting data to YouTube: ${error.message}`);
    }
};

module.exports = {
    getFacebookData,
    postToFacebook,
    getYouTubeData,
    postToYouTube
};