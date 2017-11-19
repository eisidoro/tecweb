class Student {
  constructor(name, phone, registry) {
    this.name = name
    this.phone = phone
    this.registry = registry
  }
}

class Course extends Student {
  constructor(name, phone, registry, courseName, campus, shift) {
    super(name, phone, registry)
    this.courseName = courseName
    this.campus = campus
    this.shift = shift
  }
}

function register() {
  let name = document.getElementById('name').value
  let phone = document.getElementById('phone').value
  let shift = document.getElementById('shift').value
  let campus = document.getElementById('campus').value
  let registry = document.getElementById('registry').value
  let courseName = document.getElementById('courseName').value
  // let student = new Student(name, phone, registry)
  let student = new Course(name, phone, registry, courseName, campus, shift)
  console.log(student);
  let out = document.getElementById('outStudent')

  out.innerHTML = 'Nome: ' + student.name + '</br>Telefone: ' + student.phone + '</br> Matrícula: ' + student.registry + '</br> Nome do Curso: ' + student.courseName + '</br> Campus: ' + student.campus + '</br> Turno: ' + student.shift
  out.style.display = 'block'
}
