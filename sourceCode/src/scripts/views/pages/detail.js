import UrlParser from '../../routes/url-parser';
import BundesDbSource from '../../data/bundesdb-source';
import {
  createTeamDetailTemplate,
  getSquad,
} from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';

const Detail = {
  async render() {
    return `
      <div id="team" class="team"></div>
      <div id="squad"></div>
      <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const team = await BundesDbSource.detailTeam(url.id);
    const teamContainer = document.querySelector('#team');
    const squad = getSquad(team);
    const squadContainer = document.querySelector('#squad');
    teamContainer.innerHTML = createTeamDetailTemplate(team);
    squadContainer.innerHTML = `<strong>List of Squad</strong> ${squad}`;
    const contentSquad = squadContainer.innerHTML;
    const resultContent = contentSquad.replace(' undefined', '');
    squadContainer.innerHTML = resultContent;

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      team: {
        id: team.id,
        name: team.name,
        address: team.address,
        crestUrl: team.crestUrl,
        phone: team.phone,
        founded: team.founded,
      },
    });
  },
};

export default Detail;
