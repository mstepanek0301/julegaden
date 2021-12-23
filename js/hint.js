const hintButton = document.getElementById('hint-button')

if (hintButton)
  hintButton.addEventListener('click', () => {
    const hint = document.getElementById('hint')
    if (hint.classList.contains('hidden')) {
      hint.classList.remove('hidden')
      hint.scrollIntoView()
    } else hint.classList.add('hidden')
  })
