const ref = 5
let value = 500000

function getRandomArbitrary (min, max, ref) {
  let arr = []
  for (let i = 0; i < ref; i++) {
    let temp = Math.random() * (max - min) + min
     arr.push(parseInt(temp))
  }
  return arr
}

function userSeq (arr, num) {
  arr.push(parseInt(num))
}

function verifyResult (arr1, arr2) {
  let countHit = 0
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j])
        countHit++
    }
  }
  return countHit
}

function rewards (matchs) {
  let percent
    if (matchs < 3) {
      percent = 0
    } else if (matchs == 3) {
      percent = 0.5
    } else if (matchs == 5) {
      percent = 0.75
    } else {
      percent = 1
    }
    return percent
}

function init () {
  let arr = []
  let count = 0

  while (count < ref) {
    userSeq(arr, prompt('digite o valor ' + count))
    count++
  }

  // teste
  // let result = getRandomArbitrary(0, 5, ref)
  let result = getRandomArbitrary(1, 100, ref)
  let hits   = verifyResult(arr, result)
  let reward = rewards(hits) * value

  console.log(result)
  console.log(arr)
  console.log(hits)
  alert('O valor do prêmio é de R$' + reward)
}

init()
