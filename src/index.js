const BASE_URL = 'https://api.football-data.org/v2/';
const GENERAL_ERROR = 'somethin went wrong';
const header = {
  'X-Auth-Token': '94113bc113d64460bbc2f444a2b2a6cb',
};

async function getTeams() {
  try {
    const data = await fetch(`${BASE_URL}teams`, {
      headers: {...header},
      method: 'GET',
    });

    if (data.ok) {
      const allData = await data.json();
      return allData.teams;
    } else {
      throw GENERAL_ERROR
    }
  } catch (error) {
    if (typeof error === string) {
      throw error;
    } else {
      throw GENERAL_ERROR
    }
  }
}

async function getTeam(id) {
  try {
    const data = await fetch(`${BASE_URL}teams/${id}`, {
      headers: {...header},
      method: 'GET',
    });

    if (data.ok) {
      return await data.json();
    } else {
      throw GENERAL_ERROR
    }
  } catch (error) {
    if (typeof error === string) {
      throw error;
    } else {
      throw GENERAL_ERROR
    }
  }
}

async function getUpcomingMatches(id) {
  try {
    const data = await fetch(`${BASE_URL}teams/${id}/matches?status=SCHEDULED`, {
      headers: {...header},
      method: 'GET',
    });

    if (data.ok) {
      const allData = await data.json();

      return allData.matches;
    } else {
      throw GENERAL_ERROR
    }
  } catch (error) {
    if (typeof error === string) {
      throw error;
    } else {
      throw GENERAL_ERROR
    }
  }
}



export {getTeams, getTeam, getUpcomingMatches};
