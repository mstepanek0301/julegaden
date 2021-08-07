import { load } from './storage.js'

const year = document.getElementById('year').innerText;

[...document.getElementsByClassName('puzzle-link')].forEach(elem => {
    const id = elem.id.substr(7) // "puzzle-..."
    const key = load(`${year}/${id}`)
    if (key !== undefined) elem.innerHTML += ` (vyriešené, heslo ${key})`
})
