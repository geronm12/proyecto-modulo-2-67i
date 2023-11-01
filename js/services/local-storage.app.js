const LocalStorageLength = localStorage.length;

function GetItem(key) {
  const element = localStorage.getItem(key);
  return JSON.parse(element);
}

function SetItem(key, item) {
  localStorage.setItem(key, JSON.stringify(item));
}

export { LocalStorageLength, GetItem, SetItem };
