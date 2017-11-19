function showSpoiler (e) {
  let el = e.target
  let target = el.dataset.toggle
  let inner = document.getElementById(target)
  if (inner.style.display == "none") {
    inner.style.display = "block";
  } else {
    inner.style.display = "none";
  }
}

function init() {
  let buttons = document.querySelectorAll('[data-toggle]')
  for (var i = 0; i < buttons.length; i++) {
    let btn = buttons[i]
    btn.addEventListener("click", showSpoiler)
  }
}

init()
