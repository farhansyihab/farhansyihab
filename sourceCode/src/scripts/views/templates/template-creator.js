// import CONFIG from '../../globals/config';

const createTeamDetailTemplate = (team) => `
  <h2 class="team__title">${team.name}</h2>
  <img class="team__poster" src="${team.crestUrl}" alt="${team.name}" />
  <div class="team__info">
    <h4>Venue</h4>
    <p>${team.venue}</p>
    <h4>Address</h4>
    <p>${team.address}</p>
    <h4>Founded</h4>
    <p>${team.founded} minutes</p>
    <h4>Club Colors</h4>
    <p>${team.clubColors}</p>
  </div>
`;

const createTeamEditTemplate = (team) => `
<div class="container">
<h2 id="judulForm">Edit Data Team</h2>
<div id="frmTeam" class="row" style="display: block; margin-top: 16px">
  <div class="col s12">
    <div class="row">
      <div class="input-field col s6">
        <input id="idTeam" type="text" class="validate" value="${team.id}" readonly />
        <label class="active" for="idTeam">Id Team</label>
      </div>
      <div class="input-field col s6">
        <input id="namaTeam" type="text" class="validate" value="${team.name}"/>
        <label class="active" for="namaTeam">Nama Team</label>
      </div>
    </div>
    <div class="row">
      <div class="input-field col s6">
        <input id="phoneTeam" type="text" class="validate" value="${team.phone}"/>
        <label class="active" for="phoneTeam">No Telp</label>
      </div>
      <div class="input-field col s6">
        <input id="thnBerdiri" type="text" class="validate" value="${team.founded}"/>
        <label class="active" for="thnBerdiri">Tahun Berdiri</label>
      </div>
    </div>
    <div class="row">
      <div class="input-field col s11">
        <input id="alamatTeam" type="text" class="validate" value="${team.address}"/>
        <label class="active" for="alamatTeam">Alamat</label>
      </div>
    </div>
    <div class="row">
      <button id="btnSimpan" class="btn waves-effect waves-light">
        <i class="material-icons right">save</i>Simpan
      </button>
      <button id="btnDelete" class="btn waves-effect waves-light">
        <i class="material-icons right">delete</i>Hapus
      </button>
    </div>
  </div>
</div>
</div>
`;

const createTeamItemTemplate = (team, edit = false) => `
    <div class="row">
      <div>
      <img class="team-item__header__poster" alt="${team.name}" src="${
  team.crestUrl
    ? team.crestUrl
    : 'https://picsum.photos/id/666/800/450?grayscale'
}">
      </div>
    <strong><a style="font-size:15px" href="${`/#/detail/${team.id}`}">${
  team.name
}</a></strong>
<div>${edit ? `<a href="#/edit/${team.id}" id="editTeam" class="waves-effect waves-light btn"><i class="material-icons left">edit</i>Edit</a>` : ''}</div>
    </div>
  `;

const createLikeButtonTemplate = () => `
  <button aria-label="like this movie" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this team" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

const getSquad = (team) => {
  const squads = team.squad;
  const teamTable = `<table class="responsive-table striped">
  <thead>
    <tr>
      <th>Id</th>
      <th>Name</th>
      <th>Position</th>
    </tr>
  </thead>
  <tbody id="dataPemain">`;
  const endOfTable = '</tbody></table>';
  let tableContent;
  squads.forEach((squad) => {
    tableContent += `<tr><td>${squad.id}</td><td>${squad.name}</td><td>${squad.position}</td></tr>`;
  });
  return teamTable + tableContent + endOfTable;
};

export {
  createTeamItemTemplate,
  createTeamDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
  getSquad,
  createTeamEditTemplate,
};
