import { normalize, computeHash } from './hash.js'
import { saveKey } from './save.js'

const submitForm = document.getElementById('submit-box')

submitForm.addEventListener('submit', event => {
  event.preventDefault()
  const input = document.getElementById('submit-input')
  const key = normalize(input.value)
  const hash = computeHash(key)
  const correct = Number(submitForm.dataset.key)

  if (hash === correct) {
    saveKey(input.value)
    window.alert('Výborne, vyriešili ste šifru!')
    window.location.href += '/../..'
  } else {
    window.alert('Bohužiaľ, toto nie je správne riešenie.')
  }

  input.value = ''
  input.blur()
})
