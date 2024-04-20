"use strict";

/*
###Задание 2
Вы управляете рестораном, в котором работают разные повара, специализирующиеся 
на определенных блюдах. Клиенты приходят и делают заказы на разные блюда.
Необходимо реализовать функцию newOrder. Создавать вспомогательные функции, 
коллекции, не запрещается. Старайтесь использовать коллекции Map/Set, где это 
актуально. Представленный ниже код должен работать.

Повара и их специализации:
Олег - специализация: Пицца.
Андрей - специализация: Суши.
Анна - специализация: Десерты.

Блюда, которые могут заказать посетители:
Пицца "Маргарита"
Пицца "Пепперони"
Пицца "Три сыра"
Суши "Филадельфия"
Суши "Калифорния"
Суши "Чизмаки"
Суши "Сеякемаки"
Десерт Тирамису
Десерт Чизкейк
*/
//Повора
const pizzaChef = {
  name: "Олег",
  age: 25,
  specialization: "pizza"
}

const sushiChef = {
  name: "Андрей",
  age: 35,
  specialization: "sushi"
}

const dessertChef = {
  name: "Анна",
  age: 21,
  specialization: "dessert"
}

//блюда
const pizzaMargarita = {
  name: "Маргарита",
  cook: pizzaChef
}

const pizzaPepperoni = {
  name: "Пепперони",
  cook: pizzaChef
}

const pizzaTri = {
  name: "Три сыра",
  cook: pizzaChef
}

const sushiFila = {
  name: "Филадельфия",
  cook: sushiChef
}

const sushiCalif = {
  name: "Калифорния",
  cook: sushiChef
}

const sushiChiz = {
  name: "Чизмаки",
  cook: sushiChef
}

const sushiSea = {
  name: "Сеякемаки",
  cook: sushiChef
}

const dessertTi = {
  name: "Тирамису",
  cook: dessertChef
}

const dessertChiz = {
  name: "Чизкейк",
  cook: dessertChef
}



const menu = new Map()
menu.set(pizzaMargarita.name, pizzaMargarita)
menu.set(pizzaPepperoni.name, pizzaPepperoni)
menu.set(pizzaTri.name, pizzaTri)
menu.set(sushiFila.name, sushiFila)
menu.set(sushiCalif.name, sushiCalif)
menu.set(sushiChiz.name, sushiChiz)
menu.set(sushiSea.name, sushiSea)
menu.set(dessertTi.name, dessertTi)
menu.set(dessertChiz.name, dessertChiz)


// Посетитель ресторана.
class Client {
  constructor(firstname, lastname) {
    this.firstname = firstname
    this.lastname = lastname
  }
}


// Вам необходимо реализовать класс, который управляет заказами и поварами.
class Manager {
  constructor(client) {
    this.client = client
  }
  newOrder(client, ...args) {
    const order = []
    args.forEach(element => {
      if (menu.has(element.name)) {
        order.push({
          name: element.name,
          quantity: element.quantity,
          cook: menu.get(element.name).cook,
          type: element.type
        })
      } else {
        throw new Error('нет в меню!')
      }
    })
    console.log(`Клиент ${client.firstname} заказал:`)
    order.forEach(element => {
      console.log(`${element.type} ${element.name} - ${element.quantity} Готовит:${element.cook.name}`)
    })
  }
}

// Можно передать внутрь конструктора что-либо, если необходимо.
const manager = new Manager();

// Вызовы ниже должны работать верно, менять их нельзя, удалять тоже.
manager.newOrder(
  new Client("Иван", "Иванов"),
  { name: "Маргарита", quantity: 1, type: "Пицца" },
  { name: "Пепперони", quantity: 2, type: "Пицца" },
  { name: "Чизкейк", quantity: 1, type: "Десерт" },
);
// Вывод:
// Клиент Иван заказал: 
// Пицца "Маргарита" - 1; готовит повар Олег
// Пицца "Пепперони" - 2; готовит повар Олег
// Десерт "Чизкейк" - 1; готовит повар Анна

// ---

const clientPavel = new Client("Павел", "Павлов");
manager.newOrder(
  clientPavel,
  { name: "Филадельфия", quantity: 5, type: "Суши" },
  { name: "Калифорния", quantity: 3, type: "Суши" },
);
// Вывод:
// Клиент Павел заказал: 
// Суши "Филадельфия" - 5; готовит повар Андрей
// Суши "Калифорния" - 3; готовит повар Андрей

manager.newOrder(
  clientPavel,
  { name: "Калифорния", quantity: 1, type: "Суши" },
  { name: "Тирамису", quantity: 2, type: "Десерт" },
);
// Вывод:
// Клиент Павел заказал: 
// Суши "Филадельфия" - 5; готовит повар Андрей
// Суши "Калифорния" - 4; готовит повар Андрей
// Десерт "Тирамису" - 2; готовит повар Анна

manager.newOrder(
  clientPavel,
  { name: "Филадельфия", quantity: 1, type: "Суши" },
  { name: "Трубочка с вареной сгущенкой", quantity: 1, type: "Десерт" },
);
// Ничего не должно быть добавлено, должна быть выброшена ошибка:
// Десерт "Трубочка с вареной сгущенкой" - такого блюда не существует.