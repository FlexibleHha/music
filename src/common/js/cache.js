import storage from 'good-storage'

const SEARCH_KEY = '__search__'

export function loadSearch() {
  return storage.get(SEARCH_KEY, [])
}
