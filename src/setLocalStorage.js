export default function setLocalStorage(keys, values) {
  localStorage.setItem(keys, values);
}

export function getLocalStorage(key) {
  return localStorage.getItem(key);
}
