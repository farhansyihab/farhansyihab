import FavoriteTeamIdb from '../../data/favorite-team-idb';
import { createTeamItemTemplate } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
      <div class="content">
        <h2 class="content__heading">Your Favorite Teams</h2>
        <div id="teams" class="teams">

        </div>
      </div>
    `;
  },

  async afterRender() {
    const teams = await FavoriteTeamIdb.getAllTeams();
    console.log(teams);
    const teamsContainer = document.querySelector('#teams');
    teams.forEach((team) => {
      teamsContainer.innerHTML += createTeamItemTemplate(team, true);
    });
  },
};

export default Favorite;
