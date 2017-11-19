function Log() {

  let x = document.getElementById("x").value
  let b = document.getElementById("b").value

  function resultX (x,b) {
    return Math.log(x) / Math.log(b)
  }

  document.getElementById("out").innerHTML = resultX(x,b)
}
