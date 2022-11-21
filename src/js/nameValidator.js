export default class Validator {
  validateUsername(name) {
    this.name = name.toLowerCase();
    if (!/^[a-z0-9-_]+$/.test(this.name) || /\s/.test(this.name)) {
      throw new Error('Допустимы только латинские буквы, символы тире -, подчёркивания _ и цифры (0-9)');
    }
    if (/\d{4,}/.test(this.name)) {
      throw new Error('Имя не должно содержать подряд более трёх цифр');
    }
    if ((/^[\d-_]/.test(this.name) || (/[\d-_]$/.test(this.name)))) {
      throw new Error('Имя не должно начинаться или заканчиваться цифрой, символом подчеркивания или тире');
    }
    return true;
  }
}
