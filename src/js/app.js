// TODO: write your code here
import sum from './basic';
import fetchData from './http';

let players = [
  {name: 'мечник', health: 10},
  {name: 'маг', health: 100},
  {name: 'лучник', health: 80},
]

export let listPlayers  = players.sort((a,b) => b.health - a.health)

let object = {name: 'Маг', health: 90}

export default function stausHealthPlayer (object) {
    const data = object;
    const health  = data.health;
    let healthStatus = "";

    if (health > 50) {
    healthStatus = "green";
    } 
    else if (health > 15) {
        healthStatus = "yellow";
    } 
    else {
        healthStatus = "red";
    }

    return healthStatus
}

export function getLevel(userId) {
  const response = fetchData(`https://server/user/${userId}`);
  
  // TODO: логика обработки
  if (response.status === 'ok') {
     return `Ваш текущий уровень: ${response.level}`; 
  }
  
  return `Информация об уровне временно недоступна`;
}

console.log(stausHealthPlayer (object));

console.log('worked');

console.log(sum([1, 2]));
