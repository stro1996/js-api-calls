const BASE_URL = 'https://api.football-data.org/v2/';
const header = {
  'X-Auth-Token': '94113bc113d64460bbc2f444a2b2a6cb',
};

async function getTeams() {
  try {
    const data = await fetch(BASE_URL + 'teams', {
      headers: {...header},
      method: 'GET',
    });

    return await data.json();
  } catch (error) {
    return error;
  }
}


export { getTeams };
