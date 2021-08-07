const STORAGE = window.localStorage
const VERSION = '2021/8/6/0'

if (STORAGE.version !== VERSION) {
  STORAGE.clear()
  STORAGE.version = VERSION
}

export const save = (key, value) => STORAGE[key] = value
export const load = key => STORAGE[key]
