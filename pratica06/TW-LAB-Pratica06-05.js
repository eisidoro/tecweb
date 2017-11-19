function sumLim () {
  let limMin = parseInt(prompt('limite inferior'))
  let limMax = parseInt(prompt('limite superior'))
  let result = 0

  for (limMax; limMax >=limMin; limMax--) {
			 result += limMax
  }

  alert(result)
}

sumLim()
