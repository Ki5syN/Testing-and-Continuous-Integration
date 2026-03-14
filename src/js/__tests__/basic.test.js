import sum from '../basic';
import stausHealthPlayer from '../app';
import {listPlayers } from '../app';
import {getLevel} from '../app';
import fetchData from '../http';
jest.mock('../http');


test('should sum', () => {
  const result = sum([1, 2, 3]);

  expect(result).toBe(6);
});

test.each([
  [{name: "Mage", health: 51}, "green"],
  [{name: "Mage", health: 50}, "yellow"],
  [{name: "Mage", health: 16}, "yellow"],
  [{name: "Mage", health: 15}, "red"]
])('health state test', (player, statuse) => {
  expect(stausHealthPlayer(player)).toBe(statuse)
} )

 test('player list test', () => {
  expect(listPlayers).toEqual([
  {name: 'маг', health: 100},
  {name: 'лучник', health: 80},
  {name: 'мечник', health: 10},
  ])
 })

 beforeEach(() => {
  jest.resetAllMocks()
 });

 test('test url', () => {
    getLevel(1)
    expect(fetchData).toBeCalledWith(`https://server/user/1`)
 }) 

  
 test('response ', () => {
  fetchData.mockReturnValue(JSON.stringify({}));
  expect(getLevel()).toBe(`Информация об уровне временно недоступна`)
 }) 

 test('response ок ', () => {
  fetchData.mockReturnValue({ status:'ok', level:'3' });
  expect(getLevel()).toBe(`Ваш текущий уровень: 3`)
 }) 