let contenedorDiv = document.querySelector("#contenedor")

class Person {
    constructor(name,age,genre){
    this.name = name
    this.age = age
    this.genre = genre
    }
    obtDetails(){
        contenedorDiv.innerHTML = `Me llamo ${this.name}, tengo ${this.age} y soy ${this.genre}`
    }
}

let miPersona = new Person("Alberto",26,"hombre")
miPersona.obtDetails()


class Student {
    constructor(name,age,genre,course,group){
    this.name = name
    this.age = age
    this.genre = genre
    this.course = course
    this.group = group
    }
    register(){
        contenedorDiv.innerHTML = `Me llamo ${this.name}, tengo ${this.age} y soy ${this.genre} del curso ${this.course} y grupo ${this.group}`
    }
}

let estudianteFluido = new Student("Joan",23,"fluido","3º primaria","B")
estudianteFluido.register()


class Teacher {
    constructor(name,age,genre,asignatura,level){
    this.name = name
    this.age = age
    this.genre = genre
    this.asignatura = asignatura
    this.level = level
    }
    assign(){
        contenedorDiv.innerHTML = `Me llamo ${this.name}, tengo ${this.age} y soy ${this.genre}, de la asignatura ${this.asignatura}, nivel ${this.level}`
    }
}

let profeGuay = new Teacher("Sofi",25,"mujer","conocimiento del medio","superalto")
profeGuay.assign()
