import FavoriteTeamIdb from '../data/favorite-team-idb';
import {
  createLikeButtonTemplate,
  createLikedButtonTemplate,
} from '../views/templates/template-creator';

const LikeButtonInitiator = {
  async init({ likeButtonContainer, team }) {
    this._likeButtonContainer = likeButtonContainer;
    this._team = team;

    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._team;

    if (await this._isTeamExist(id)) {
      this._renderLiked();
    } else {
      this._renderLike();
    }
  },

  async _isTeamExist(id) {
    const team = await FavoriteTeamIdb.getTeam(id);
    return !!team;
  },

  _renderLike() {
    this._likeButtonContainer.innerHTML = createLikeButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await FavoriteTeamIdb.putTeam(this._team);
      this._renderButton();
    });
  },

  _renderLiked() {
    this._likeButtonContainer.innerHTML = createLikedButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await FavoriteTeamIdb.deleteTeam(this._team.id);
      this._renderButton();
    });
  },
};

export default LikeButtonInitiator;
