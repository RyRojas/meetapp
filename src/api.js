import axios from 'axios';
import NProgress from 'nprogress';
import { mockData } from './mock-data';

//Takes an events array and returns an array of location with duplicates excluded
export const extractLocations = (events) => {
  const extractLocations = events.map((event) => event.location);
  const locations = [...new Set(extractLocations)];

  return locations;
};

const checkToken = async (accessToken) => {
  const result = await fetch(
    `https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=${accessToken}`
  )
    .then((res) => res.json())
    .catch((error) => error);

  return result;
};

const removeQuery = () => {
  const path = window.history.pushState && window.location.pathname;
  const newUrl =
    window.location.protocol + '//' + window.location.host + path
      ? window.location.pathname
      : '';

  window.history.pushState('', '', newUrl);
};

export const getEvents = async () => {
  if (window.location.href.startsWith('http://localhost')) {
    return mockData;
  }

  if (!navigator.onLine) {
    const data = localStorage.getItem('lastEvents');
    NProgress.done();
    return data ? JSON.parse(data).events : [];
  }

  const token = await getAccessToken();

  if (token) {
    NProgress.start();
    removeQuery();

    const url =
      'https://mj84us3vwj.execute-api.us-west-2.amazonaws.com/dev/api/get-events' +
      '/' +
      token;
    const result = await axios.get(url);

    if (result.data) {
      localStorage.setItem('lastEvents', JSON.stringify(result.data));
    }

    NProgress.done();
    return result.data.events;
  }
};

export const getAccessToken = async () => {
  const accessToken = localStorage.getItem('access_token');
  const tokenCheck = accessToken && (await checkToken(accessToken));

  if (!accessToken || tokenCheck.error) {
    await localStorage.removeItem('access_token');
    const searchParams = new URLSearchParams(window.location.search);
    const code = await searchParams.get('code');
    if (!code) {
      const results = await axios.get(
        'https://mj84us3vwj.execute-api.us-west-2.amazonaws.com/dev/api/get-auth-url'
      );
      const { authUrl } = results.data;
      return (window.location.href = authUrl);
    }
    return code && getToken(code);
  }
  return accessToken;
};

const getToken = async (code) => {
  const encodeCode = encodeURIComponent(code);
  const { access_token } = await fetch(
    `https://mj84us3vwj.execute-api.us-west-2.amazonaws.com/dev/api/token/${encodeCode}`
  )
    .then((res) => res.json())
    .catch((err) => err);

  access_token && localStorage.setItem('access_token', access_token);

  return access_token;
};
