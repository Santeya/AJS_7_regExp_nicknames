import Validator from '../nameValidator';

test('should throw errors for wrong name', () => {
  const player = new Validator();
  expect(() => player.validateUsername('Игрок1')).toThrowError('Допустимы только латинские буквы, символы тире -, подчёркивания _ и цифры (0-9)');
  expect(() => player.validateUsername('Player 1')).toThrowError('Допустимы только латинские буквы, символы тире -, подчёркивания _ и цифры (0-9)');
  expect(() => player.validateUsername('player9999')).toThrowError('Имя не должно содержать подряд более трёх цифр');
  expect(() => player.validateUsername('_champion')).toThrowError('Имя не должно начинаться или заканчиваться цифрой, символом подчеркивания или тире');
});

test('correct name', () => {
  const result = new Validator().validateUsername('player999-x');
  expect(result).toBe(true);
});
