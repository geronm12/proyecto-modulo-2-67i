//verificar si el usuario loggeado
//es admin o no
import { LOCAL_STORAGE_KEYS } from "../configurations/keys.config.js";
import { ROLES_VALUES } from "../configurations/seed.js";
import { GetItem } from "./local-storage.app.js";

const userLogged = GetItem(LOCAL_STORAGE_KEYS.activeUser);
const adminItem = document.getElementById("admin-item");

if (userLogged !== null) {
  if (userLogged.rol.id === ROLES_VALUES.ADMIN) {
    adminItem.style.display = "block";
  } else {
    adminItem.style.display = "none";
  }
} else {
  adminItem.style.display = "none";
}
