import { SetItem, GetItem } from "./local-storage.app.js";
import { LOCAL_STORAGE_KEYS } from "../configurations/keys.config.js";

//#region  Get User (R - Read - Leer)
function getSeminars() {
  return GetItem(LOCAL_STORAGE_KEYS.seminar);
}
//#endregion

//#region  Add User (A - Alta)
function createSeminar(title, description, date, time, picture, speakers) {
  let seminars = getArrayAndReplace({
    title,
    description,
    date,
    time,
    picture,
    speakers,
  });
  //guardamos el array en el local storage
  SetItem(LOCAL_STORAGE_KEYS.seminar, seminars);
}

function getArrayAndReplace(newSeminar) {
  let seminars = getSeminars();

  if (users === null) {
    seminars = [];
  }

  seminars.push(newSeminar);

  return seminars;
}

function updateSeminar(id, title, description, date, time, picture, speakers) {
  const seminars = getSeminars();
  if (seminars !== null && seminars.length > 0) {
    let index = serminars.findIndex(function (seminar) {
      return seminar.id === id;
    });
    let seminar = seminars[index];
    seminar.title = title;
    seminar.description = description;
    seminar.date = date;
    seminar.time = time;
    seminar.picture = picture;
    seminar.speakers = speakers;
    seminars[index] = seminar;
    SetItem(LOCAL_STORAGE_KEYS.seminar, seminars);
  }
}

function deleteSeminar(id) {
  const seminars = getSeminars();

  if (seminars !== null && seminars.length > 0) {
    let newSeminarsArray = seminars.filter(function (seminar) {
      return seminar.id !== id;
    });

    SetItem(LOCAL_STORAGE_KEYS.seminar, newSeminarsArray);
  }
}

function getSeminarById(id) {
  const seminars = getSeminars();
  return seminars.find((seminar) => seminar.id === id);
}

//#endregion
export {
  getSeminars,
  createSeminar,
  deleteSeminar,
  updateSeminar,
  getSeminarById,
};
