//--------------------------TASK1------------------------//
const reviewSymbol = Symbol('review')
const ratingSymbol = Symbol('rating')
const tagsSymbol = Symbol('tags')

class Book {
    constructor(title, author) {
        this.title = title
        this.author = author
    }
    addMetadata(metadataType, data) {
        if (!this[metadataType]) {
            this[metadataType] = []
        }
        this[metadataType].push(data)
    }

    getMetadata(metadataType) {
        if (!this[metadataType]) {
            return []
        }
        return this[metadataType]
    }
    getAverageRating() {
        const ratingArray = this.getMetadata(ratingSymbol)
        if (!ratingArray) {
            return null
        }
        let averageRating = 0
        for (let i = 0; i < ratingArray.length; i++) {
            averageRating += ratingArray[i]
        }
        return Math.round((averageRating / ratingArray.length) * 10) / 10
    }
    hasTag(tagName) {
        const tagsArray = this.getMetadata(tagsSymbol)
        if (!tagsArray) {
            return false
        }
        return tagsArray.includes(tagName)
    }

    reviewsCount() {
        const reviewsCount = this.getMetadata(reviewsCount)
        if (!reviewsCount) {
            return 0
        }
        return reviewsCount.length
    }
}

//--------------------------TASK2------------------------//
const books = [
    { title: '1985', author: 'George Orwell' },
    { title: 'Golden fish', author: 'Alex Pushkin' },
    { title: 'War and Peas', author: 'Lew Tolstoy' },
    { title: '1212388', author: 'George Orwell' },
    { title: '198900000000', author: 'George Orwell' },
    { title: '2222220', author: 'George Orwell' },
]

const library = {
    books,
    *[Symbol.iterator]() {
        for (let i = 0; i < this.books.length; i++) {
            yield this.books[i]
        }
    }   
}

// const library = {
//     books,
//     [Symbol.iterator]() {
//         let index = 0
//         return {
//             next: () => {
//                 if (index < this.books.length) {
//                     return {
//                         value: this.books[index++],
//                         done: false
//                     }
//                 } else {
//                     return {
//                         value: undefined,
//                         done: true
//                     }
//                 }
//             }
//         }
//     }
// }

//--------------------------TASK3------------------------//

const divEls = document.querySelectorAll('div')

const divArray = Array.from(divEls)

const filtredDivArr = divArray.filter((elem) => {
    return elem.hasAttribute('data-active')
})

console.log(filtredDivArr)

//--------------------------TASK4------------------------//

const lessonTeacher = new Map()
const studentLesson = new Map()

const ivan = {
    name: 'Ivan',
    age: 25
}

const evgen = {
    name: 'Evgen',
    age: 31
}

const teacherMath = {
    name: 'Dina',
    age: 40
}

const teacherHistory = {
    name: 'Max',
    age: 50
}

const lessonMath = 'Math'
const lessonHistory = 'History'

lessonTeacher.set(lessonMath, teacherMath).set(lessonHistory, teacherHistory)

studentLesson.set(ivan, new Set([lessonMath, lessonHistory])).set(evgen, new Set([lessonMath]))


// console.log(`Math teacher: ${lessonTeacher.get(lessonMath).name}`)



console.log(`Ivans lessons: ${[...studentLesson.get(ivan)].join(', ')}`)