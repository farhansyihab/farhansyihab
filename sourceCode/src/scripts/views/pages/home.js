import BundesDbSource from '../../data/bundesdb-source';
import { createTeamItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
      <div class="content">
        <h2 class="content__heading">Team yang berlaga di BundesLiga</h2>
        <div id="teams" class="teams">

        </div>
      </div>
    `;
  },

  async afterRender() {
    const teams = await BundesDbSource.listTeams();
    const teamsContainer = document.querySelector('#teams');
    teams.forEach((team) => {
      teamsContainer.innerHTML += createTeamItemTemplate(team);
    });
  },
};

export default Home;
