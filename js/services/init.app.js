import { LOCAL_STORAGE_KEYS } from "../configurations/keys.config.js";

import { INITIAL_ROLES } from "../configurations/seed.js";

import { LocalStorageLength, SetItem } from "./local-storage.app.js";

if (LocalStorageLength === 0) {
  SetItem(LOCAL_STORAGE_KEYS.roles, INITIAL_ROLES);
  //lo que está abajo es para probar la seguridad "hardcodeado"
  SetItem(LOCAL_STORAGE_KEYS.activeUser, {
    username: "admin",
    theme: "white",
    rol: INITIAL_ROLES.find((x) => x.id === 3),
  });
}
