import { save } from './storage.js'

export const saveKey = key => {
  const year = Number(document.getElementById('year').innerText)
  const puzzleId = Number(document.getElementById('number').innerText)
  save(`${year}/${puzzleId}`, key)
}
