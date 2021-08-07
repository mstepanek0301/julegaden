const MOD = 1000000009n

export const normalize = string => string
	.normalize('NFD')
	.toUpperCase()
	.split('')
	.filter(char => 64 < char.charCodeAt(0) && char.charCodeAt(0) < 91)
	.join('')

export const computeHash = string => Number([...string].reduce(
  (seed, char) => ((
    (seed + BigInt(char.charCodeAt(0))) % MOD * 826174285n
  ) % MOD + 478662297n) % MOD,
  618264994n
))
