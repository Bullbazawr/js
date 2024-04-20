
/*
###Задание 1
Создайте обычный объект "Музыкальная коллекция", который можно итерировать. 
Каждая итерация должна возвращать следующий альбом из коллекции. Коллекция 
альбомов - это массив внутри нашего объекта (создать несколько альбомов самому).
Каждый альбом имеет следующую структуру:
{
  title: "Название альбома",
  artist: "Исполнитель",
  year: "Год выпуска"
}
Используйте цикл for...of для перебора альбомов в музыкальной коллекции и 
вывода их в консоль в формате:
"Название альбома - Исполнитель (Год выпуска)"
*/

const inThisMomentAlbum = {
  title: "Black Widow",
  artist: "In This Moment",
  year: "2014"
}
const bulletForMyValentineAlbum = {
  title: "Bullet For My Valentine",
  artist: "The Poison",
  year: "2005"
}

const riseAgainstAlbum = {
  title: "The Sufferer & The Witness",
  artist: "Rise Against",
  year: "2006"
}

const illNinoAlbum = {
  title: "Revolution Revolucion",
  artist: "Ill Niño",
  year: "2001"
}

const musicColection = {
  albums: [
    inThisMomentAlbum,
    bulletForMyValentineAlbum,
    riseAgainstAlbum,
    illNinoAlbum
  ],
  *[Symbol.iterator](){
    for (let i = 0; i < this.albums.length; i++) {
      yield this.albums[i]
    }
  }
}

for (const album of musicColection) {
    console.log(album)
}