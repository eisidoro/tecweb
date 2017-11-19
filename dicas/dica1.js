const pageData = {
  teste: [],
  teste2: []
}

const add = (arr, num, callback) => {
  arr.push(num)
  if (callback) callback()
}

const print = (elId, arr) => {
  return () => {
    document.getElementById(elId).innerHTML = arr.join(' - ')
  }
}

const action = (input, target, arr) => {
  let data = pageData[arr]
  let val = document.getElementById(input).value
  add(data, val, print(target, data))
}
