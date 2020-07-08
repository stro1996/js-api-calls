import axios from 'axios';
const BASE_URL = 'https://api.football-data.org/v2/';
const GENERAL_ERROR = 'somethin went wrong';
const header = {
  'content-type': 'application/json',
  'X-Auth-Token': '94113bc113d64460bbc2f444a2b2a6cb',
};

const getTeams = async () => {
  const data = await axios.get(`${BASE_URL}/teams`, {
    headers: {...header}
  });

  if (data.status === 200) {
    return data.data.teams;
  } else {
    throw GENERAL_ERROR;
  }
};

const getTeam = async (id) => {
  const data = await axios.get(`${BASE_URL}teams/${id}`, {
    headers: {...header}
  });

  if (data.status === 200) {
    return data.data;
  } else {
    throw GENERAL_ERROR;
  }
};

const getUpcomingMatches = async (id) => {
  const data = await axios.get(`${BASE_URL}teams/${id}/matches?status=SCHEDULED`, {
    headers: {...header}
  });


  if (data.status === 200) {
    return data.data.matches;
  } else {
    throw GENERAL_ERROR;
  }
};

export {getTeams, getTeam, getUpcomingMatches};
