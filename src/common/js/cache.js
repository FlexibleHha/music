import storage from 'good-storage'

const SEARCH_KEY = '__search__'

export function loadSearch() {
  return storage.get(SEARCH_KEY, [])
}

export function saveSearch() {
  return storage.set(SEARCH_KEY, [])
}

export function clearSearch() {
  return storage.remove(SEARCH_KEY)
}

export function deleteSearch() {
  return storage.remove(SEARCH_KEY)
}
