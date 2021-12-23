const mapWidth = 50
const mapHeight = (mapWidth * map.offsetHeight) / map.offsetWidth
const arrowSize = 5
const rightBound = 0.99

const frame = document.getElementById('map')
const card = document.getElementById('card')

const clamp = (low, value, high) =>
  value < low ? low : value < high ? value : high

const setCardPosition = (gridX, gridY) => {
  const x = (gridX + 0.5) / mapWidth
  const y = (gridY + 0.5) / mapHeight

  let cardX = x - card.offsetWidth / frame.offsetWidth / 2
  let cardY = y - card.offsetHeight / frame.offsetHeight

  let arrowOffset = 0.5 - arrowSize / frame.offsetWidth
  if (cardX < 0) {
    const correction = -cardX
    cardX += correction
    arrowOffset -= (correction * frame.offsetWidth) / card.offsetWidth
  }
  if (cardX + card.offsetWidth / frame.offsetWidth >= 0.99) {
    const correction = cardX + card.offsetWidth / frame.offsetWidth - 0.99
    cardX -= correction
    arrowOffset += (correction * frame.offsetWidth) / card.offsetWidth
  }

  card.style.top = `${cardY * 100}%`
  card.style.left = `${cardX * 100}%`
  arrow.style.left = `${arrowOffset * 100}%`
}

const setCardContent = (name, value) => {
  document.getElementById('card-name').innerText = name
  document.getElementById('card-value').innerText = value
}

const putCard = (x, y) => {
  const city = data[`${x}@${y}`]
  let text1 = ''
  let text2 = ''
  if (city) {
    text1 = city.name
    text2 = `${city.value * 10} km od cieľa`
  } else {
    text1 = 'tu žiadne'
    text2 = 'mesto nepoznám'
  }

  card.style.visibility = 'hidden'
  card.style.top = '0'
  card.style.left = '0'

  setCardContent(text1, text2)
  setCardPosition(x, y)
  card.style.visibility = 'visible'
}

frame.addEventListener('click', event => {
  const boundingRect = frame.getBoundingClientRect()
  const coef = mapWidth / frame.offsetWidth
  const x = Math.floor(
    clamp(0, (event.clientX - boundingRect.left) * coef, mapWidth - 1)
  )
  const y = Math.floor(
    clamp(0, (event.clientY - boundingRect.top) * coef, mapHeight)
  )

  putCard(x, y)
})

const data = {
  '0@32': {
    name: 'Lisabon',
    value: 2,
  },
  '5@31': {
    name: 'Toledo',
    value: 66,
  },
  '7@27': {
    name: 'Logroño',
    value: 63,
  },
  '8@21': {
    name: 'Nantes',
    value: 5,
  },
  '8@28': {
    name: 'Zaragoza',
    value: 38,
  },
  '9@17': {
    name: 'Le Havre',
    value: 0,
  },
  '10@17': {
    name: 'Rouen',
    value: 11,
  },
  '10@20': {
    name: 'Tours',
    value: 25,
  },
  '11@20': {
    name: 'Orléans',
    value: 37,
  },
  '11@18': {
    name: 'Paríž',
    value: 35,
  },
  '14@23': {
    name: 'Lyon',
    value: 34,
  },
  '14@25': {
    name: 'Avignon',
    value: 9,
  },
  '15@22': {
    name: 'Ženeva',
    value: 45,
  },
  '16@15': {
    name: 'Kolín',
    value: 34,
  },
  '17@16': {
    name: 'Koblenz',
    value: 44,
  },
  '17@19': {
    name: 'Strasbourg',
    value: 76,
  },
  '17@20': {
    name: 'Bazilej',
    value: 89,
  },
  '17@24': {
    name: 'Turín',
    value: 55,
  },
  '18@16': {
    name: 'Wiesbaden',
    value: 53,
  },
  '18@17': {
    name: 'Mannheim',
    value: 61,
  },
  '18@18': {
    name: 'Karlsruhe',
    value: 67,
  },
  '19@11': {
    name: 'Hamburg',
    value: 11,
  },
  '19@19': {
    name: 'Ulm',
    value: 269,
  },
  '19@24': {
    name: 'Piacenza',
    value: 33,
  },
  '20@18': {
    name: 'Ingolstadt',
    value: 256,
  },
  '21@13': {
    name: 'Magdeburg',
    value: 42,
  },
  '21@18': {
    name: 'Linz',
    value: 224,
  },
  '21@24': {
    name: 'Ferrara',
    value: 9,
  },
  '23@15': {
    name: 'Drážďany',
    value: 74,
  },
  '23@19': {
    name: 'Linz',
    value: 224,
  },
  '24@11': {
    name: 'Szczecin',
    value: 7,
  },
  '25@13': {
    name: 'Zielona Góra',
    value: 36,
  },
  '25@19': {
    name: 'Viedeň',
    value: 201,
  },
  '26@15': {
    name: 'Wrocław',
    value: 58,
  },
  '26@19': {
    name: 'Bratislava',
    value: 195,
  },
  '27@15': {
    name: 'Opole',
    value: 68,
  },
  '27@17': {
    name: 'Ostrava',
    value: 68,
  },
  '28@11': {
    name: 'Grudziądz',
    value: 11,
  },
  '28@12': {
    name: 'Toruń',
    value: 21,
  },
  '28@13': {
    name: 'Włocławek',
    value: 27,
  },
  '28@20': {
    name: 'Budapešť',
    value: 168,
  },
  '29@13': {
    name: 'Płock',
    value: 31,
  },
  '29@16': {
    name: 'Kraków',
    value: 85,
  },
  '29@24': {
    name: 'Novi Sad',
    value: 129,
  },
  '30@13': {
    name: 'Varšava',
    value: 43,
  },
  '30@24': {
    name: 'Belehrad',
    value: 120,
  },
  '35@26': {
    name: 'Ruse',
    value: 53,
  },
  '37@23': {
    name: 'Galaţi',
    value: 20,
  },
  '40@9': {
    name: 'Orša',
    value: 169,
  },
  '40@10': {
    name: 'Mogilev',
    value: 160,
  },
  '40@16': {
    name: 'Kyjev',
    value: 90,
  },
  '41@17': {
    name: 'Čerkasy',
    value: 70,
  },
  '42@21': {
    name: 'Cherson',
    value: 4,
  },
  '43@18': {
    name: 'Kremenčuk',
    value: 57,
  },
  '44@20': {
    name: 'Nikopol',
    value: 23,
  },
  '45@19': {
    name: 'Dnipro',
    value: 42,
  },
  '45@20': {
    name: 'Záporožie',
    value: 31,
  },
}

putCard(26, 19)
