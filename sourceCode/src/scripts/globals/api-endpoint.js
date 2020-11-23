import CONFIG from './config';

const API_ENDPOINT = {
  LIST_TEAM: `${CONFIG.BASE_URL}v2/competitions/2002/teams`,
  DETAIL: (id) => `${CONFIG.BASE_URL}v2/teams/${id}`,
  TOKEN: CONFIG.KEY,
};

export default API_ENDPOINT;
