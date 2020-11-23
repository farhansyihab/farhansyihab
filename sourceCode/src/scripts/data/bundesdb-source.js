import API_ENDPOINT from '../globals/api-endpoint';

class BundesDbSource {
  static async listTeams() {
    const response = await fetch(API_ENDPOINT.LIST_TEAM, {
      headers: { 'X-Auth-Token': API_ENDPOINT.TOKEN },
    });
    const responseJson = await response.json();
    return responseJson.teams;
  }

  static async detailTeam(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id), {
      headers: { 'X-Auth-Token': API_ENDPOINT.TOKEN },
    });
    return response.json();
  }
}

export default BundesDbSource;
