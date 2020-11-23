import UrlParser from '../../routes/url-parser';
import FavoriteTeamIdb from '../../data/favorite-team-idb';
import { createTeamEditTemplate } from '../templates/template-creator';
import Button from '../../utils/button-data';
import 'materialize-css';

const Edit = {
  async render() {
    return `
      <div id="team_edit" class="team_edit"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const idTeam = parseInt(url.id, 10);
    const team = await FavoriteTeamIdb.getTeam(idTeam);
    const editContainer = document.querySelector('#team_edit');
    editContainer.innerHTML = await createTeamEditTemplate(team);
    const btnSimpan = new Button('btnSimpan');
    const btnDelete = new Button('btnDelete');
    btnSimpan.addClickListener(() => {
      const item = {
        id: parseInt(document.getElementById('idTeam').value, 10),
        name: document.getElementById('namaTeam').value,
        phone: document.getElementById('phoneTeam').value,
        founded: document.getElementById('thnBerdiri').value,
        address: document.getElementById('alamatTeam').value,
        crestUrl: team.crestUrl,
      };
      FavoriteTeamIdb.putTeam(item);
      M.toast({ html: 'perubahan data sudah disimpan di lokal' });
    });
    btnDelete.addClickListener(() => {
      // const idTeam = parseInt(document.getElementById('idTeam').value, 10);
      FavoriteTeamIdb.deleteTeam(idTeam);
      M.toast({
        html: 'data sudah dihapus, Anda akan kembali ke jendela Favorite',
      });
      window.location.href = `${window.location.protocol}//${window.location.hostname}:${location.port}/#/favorite`;
    });
  },
};

export default Edit;
