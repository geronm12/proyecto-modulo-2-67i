import { getEmojiText } from "./helpers/string.helper.convert.js";
import {
  createSeminar,
  deleteSeminar,
  getSeminarById,
  updateSeminar,
  getSeminars,
} from "./services/seminars.app.js";
import { getUsers } from "./services/user.app.js";

//#region HTML  References
const usersTable = document.getElementById("users-table");
const seminarsTable = document.getElementById("seminars-table");
const deleteSeminarBtn = document.getElementById("deleteSeminar");
const createSeminarBtn= document.getElementById("addSeminar");
const titulo = document.getElementById("createTitle").value;
const descripcion = document.getElementById("createDescription").value;
const fecha = document.getElementById("createDate").value;
const hora = document.getElementById("createTime").value;
const imagen = document.getElementById("createPicture").value;
const dificultad = document.getElementById("createDifficult").value;
const estrellas = document.getElementById("createStars").value;
const updateSeminarBtn = document.getElementById("update");
const updatePicture = document.getElementById("picture");
const updateDifficult = document.getElementById("difficult");
const updateStars = document.getElementById("stars");
const updateDescription = document.getElementById("descriptionTxtArea");
const updateTitle = document.getElementById("title");

//#endregion HTML References

//#region  Variables

let data = {
  users: [],
  seminars: [],
};

let currents = {
  seminar: {},
  user: {},
};

let _updateTitle,
  _updateDifficult,
  _updateStars,
  _updatePicture,
  _updateDescriptionTextArea = "";

//variables de creacion

//#endregion Variables

//#region  Init Data
refresh(refreshUsers);
refresh(refreshSeminars);
//#endregion Init Data

//#region  Events
createSeminarBtn.addEventListener("click", () =>{
  createSeminar(
    titulo,
    descripcion,
    fecha,
    hora,
    imagen,
    dificultad,
    estrellas,
  );
} );
deleteSeminarBtn.addEventListener("click", () => {
  deleteSeminar(currents.seminar.id);
  window.location.reload();
});

updateSeminarBtn.addEventListener("click", () => {
  if (currents.seminar.id) {
    updateSeminar(
      currents.seminar.id,
      updateTitle.value,
      updateDescription.value,
      currents.seminar.date,
      currents.seminar.time,
      updatePicture.value,
      currents.seminar.difficult,  // Mantener la dificultad actual
      updateDifficult.value,       // Nueva dificultad
      currents.seminar.stars,       // Mantener las estrellas actuales
      updateStars.value            // Nuevas estrellas
    );
    // Actualizar la interfaz después de la modificación
    refresh(refreshSeminars);
  }
});
/*
// Obtén el formulario y escucha el evento de envío
const crearSeminarioForm = document.getElementById("crearSeminarioForm");

crearSeminarioForm.addEventListener("submit", function (event) {
  event.preventDefault();

  // Obtén los valores del formulario
  const titulo = document.getElementById("titulo").value;
  const fecha = document.getElementById("fecha").value;
  const hora = document.getElementById("hora").value;
  const descripcion = document.getElementById("descripcion").value;
  const imagen = document.getElementById("imagen").value;
  const dificultad = document.getElementById("dificultad").value;
  const estrellas = document.getElementById("estrellas").value;

  // Llama a la función createSeminar para agregar el nuevo seminario
  createSeminar(
    titulo,
    descripcion,
    fecha,
    hora,
    imagen,
    dificultad,
    estrellas
  );

  // Puedes realizar acciones adicionales después de agregar el seminario, si es necesario
  refresh(refreshSeminars);

  // Cierra el modal
  $("#crearSeminarioModal").modal("hide");
});
 */
//#endregion Events

//#region Functions
function refresh(callback) {
  callback();
}

function refreshUsers() {
  data.users = getUsers();
  if (data.users) {
    data.users.forEach((user) => {
      delete user.password;
    });
  }
}

function refreshSeminars() {
  seminarsTable.innerHTML = "";

  data.seminars = getSeminars();

  if (data.seminars) {
    data.seminars.forEach((seminar) => {
      let tr = document.createElement("tr");
      let tdTitle = document.createElement("td");
      let tdDate = document.createElement("td");
      let tdTime = document.createElement("td");
      let tdDifficult = document.createElement("td");
      let tdRank = document.createElement("td");
      let tdActions = document.createElement("td");

      tdActions.id = seminar.id;
      tdTitle.innerText = seminar.title;
      tdDate.innerText = seminar.date;
      tdTime.innerText = seminar.time;
      tdDifficult.innerText = getEmojiText(seminar.difficult, "⭐");
      tdRank.innerText = getEmojiText(seminar.stars, "⭐");
      tdActions.innerHTML = `<a id='${seminar.id}' href='#' style='color: black;' data-bs-toggle="modal" data-bs-target="#adminModal">
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-edit" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1" />
                                <path d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z" />
                                <path d="M16 5l3 3" /></svg>
                            </a>`;

      tr.appendChild(tdTitle);
      tr.appendChild(tdDate);
      tr.appendChild(tdTime);
      tr.appendChild(tdDifficult);
      tr.appendChild(tdRank);
      tr.appendChild(tdActions);
      seminarsTable.appendChild(tr);
    });

    data.seminars.forEach((seminar) => {
      const btnModify = document.getElementById(seminar.id);

      if (btnModify) {
        btnModify.addEventListener("click", (e) => {
          console.log(e.target.parentElement.id);
          currents.seminar = getSeminarById(e.target.parentElement.id);

          if (currents.seminar) {
            updateTitle.value = currents.seminar.title;
            updatePicture.value = currents.seminar.picture;
            updateDifficult.value = currents.seminar.difficult;
            updateStars.value = currents.seminar.stars;
            updateDescription.value = currents.seminar.description;
          } else {
            updateTitle.value = "";
            updatePicture.value = "";
            updateDifficult.value = "";
            updateStars.value = "";
            updateDescription.value = "";
          }
        });
      }
    });
  }
}

//#endregion Functions
