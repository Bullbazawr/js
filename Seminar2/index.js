//----------------------TASK2-----------------//
class BankAccount {
    #balance = 0
    getBalance() {
        return Math.round(this.#balance * 100) / 100
    }

    deposit(amount) {
        this.#amountIsCorrect(amount)
        this.#balance += amount
    }
    withdraw(amount) {
        this.#amountIsCorrect(amount)
        if (amount > this.#balance) {
            throw new Error('Not enough money')
        }
        this.#balance -= amount
    }
    #amountIsCorrect(amount) {
        if (!Number.isFinite(amount)) {
            throw new Error('amount must be a number')
        }
        if (amount <= 0) {
            throw new Error('amount must be greater than 0')
        }
        const amountString = amount.toString().split('.')
        if (amountString[1]?.length > 2) {
            throw new Error('the fractional part must be less than 2')
        }
    }
}
//----------------------TASK2-----------------//

class User {
    constructor(name, surname) {
        if (this.constructor === User) {
            throw new Error('Cannot instantiate abstract class User')
        }
        this.name = name
        this.surname = surname
    }
}

class PremiumUser extends User {
    constructor(name, surname, premiumExpiration) {
        super(name, surname)
        this.premiumExpiration = premiumExpiration
    }
}

class RegularUser extends User {

}

const getAccountInfo = (user) => {
    if (user instanceof PremiumUser) {
        console.log(`User ${user.name} ${user.surname} is a premium user. For ${user.premiumExpiration} year.`)
    } else {
        console.log(`User ${user.name} ${user.surname} is a regular user.`)
    }
}

//----------------------TASK3-----------------//

// const inputEl = document.querySelector('.number__input')
// const buttonEl = document.querySelector('.check__button')
// const message = document.querySelector('.message')

// buttonEl.addEventListener('click', () => {
//     try {
//         if (inputEl.value === '' || !Number.isFinite(+inputEl.value)) {
//             throw new Error('Is not a number')
//         }
//         message.textContent = 'Is number'
//     }catch(error){
//         message.textContent = error.message
//     }
// })

//----------------------TASK4-----------------//

const userInputEl = document.querySelector('.user__input')
const messageEl = document.querySelector('.error__message')
const listEl = document.querySelector('.item__list')
const buttonEl = document.querySelector('.add__button')

buttonEl.addEventListener('click', function (e) {
    const userInput  = userInputEl.value
    if(userInput.length < 3 ||  userInput.length > 10) {
        messageEl.textContent = 'Input must be between 3 and 10 characters'
    }else{
        const liEl = document.createElement('li')
        liEl.textContent = userInput
        listEl.append(liEl)
        userInputEl.value = ''
        messageEl.textContent = ''
    }
})
