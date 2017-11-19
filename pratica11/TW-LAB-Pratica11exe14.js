function verifyAge () {
    let age = document.getElementById('age')
    let ageInt = parseInt(age.value) 

    if (ageInt >= 18 ) {
        document.getElementById('estado').disabled = false
        document.getElementById('pais').disabled = false
        document.getElementById('btnSend').disabled = false
    } else {
        document.getElementById('estado').disabled = true
        document.getElementById('pais').disabled = true
        document.getElementById('btnSend').disabled = true
    }
}