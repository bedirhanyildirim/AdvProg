class Course {
    constructor(code, time, date, rooms) {
        this.code = code || ''
        this.time = time || ''
        this.date = date || ''
        this.rooms = rooms || []
    }

    toString () {
        return this.code
    }
}
class Student {
    constructor () {

    }
    toString () {
        return
    }
}


class Database {
    constructor () {
        this.courses = new Map()
        this.students = new Map()
        this.readCourses()
    }

    readCourses () {
        var url = "https://maeyler.github.io/JS/data/Courses.txt"
        fetch(url)
        .then(res => res.text()) 
        .then(res => [
            this.addStudents(res)
        ]) 
        
    }
    toString (txt) {
        return console.log(txt)
    }

    addStudents(txt) {
        let msg = txt.length+" chars, ";
        let a = txt.split("\n");
        msg += a.length+" lines, ";
        const courseList = a.map(item => {
            let bla = item.split('\t')
            const courses = new Course(bla[0], bla[1], bla[2], bla.slice(3))
            const a = ['code', bla[0]]
            this.courses.set('code', bla[0])
            this.courses.set('time', bla[1])
            this.courses.set('date', bla[2])
            this.courses.set('rooms', bla.slice(3))
            console.log(this.courses)
            return courses
        })

        return courseList
    }
}