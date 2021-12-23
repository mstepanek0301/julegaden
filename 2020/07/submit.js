import { normalize, computeHash } from '/julegaden/js/hash.js'
import { saveKey } from '/julegaden/js/save.js'
import table from './table.js'

const textScore = n =>
  n == 1 ? '1 zlý bod' : n < 5 ? `${n} zlé body` : `${n} zlých bodov`

const submitForm = document.getElementById('submit-box')
const chatBox = document.getElementById('chat-box')

submitForm.addEventListener('submit', event => {
  event.preventDefault()
  const input = document.getElementById('submit-input')
  if (input.value == '') return

  const key = normalize(input.value)
  const hash = computeHash(key)
  const correct = Number(submitForm.dataset.key)

  if (hash === correct) {
    saveKey(input.value)
    window.alert('Výborne, vyriešili ste šifru!')
    window.location.href += '/../..'
  } else {
    const chatQuery = document.createElement('p')
    chatQuery.innerText = input.value

    const chatResponse = document.createElement('div')
    chatResponse.classList.add('highlight')

    const value = table[hash]
    chatResponse.innerText =
      value === undefined
        ? 'Také slovo nepoznám.'
        : value === 0
        ? 'Toto slovo sa mi páči. Nedávam mu žiadne zlé body.'
        : `Toto slovo poznám, ale nepáči sa mi. Dávam mu ${textScore(value)}.`

    chatQuery.append(chatResponse)
    chatBox.append(chatQuery)

    input.value = ''
    input.focus()
    input.scrollIntoView(true)
  }
})
