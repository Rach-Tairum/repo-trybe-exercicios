function encode(string) {
    let codificada = '';
  
    for (let index = 0; index < string.length; index += 1) {
      switch (string[index]) {
        case 'a':
          codificada += 1;
          break;
        case 'e':
          codificada += 2;
          break;
        case 'i':
          codificada += 3;
          break;
        case 'o':
          codificada += 4;
          break;
        case 'u':
          codificada += 5;
          break;
        default:
          codificada += string[index];
          break;
      }
    }
    return codificada;
  }
  
  function decode(codigo) {
    let decodificada = '';
    for (let index = 0; index < codigo.length; index += 1) {
      switch (codigo[index]) {
        case '1':
          decodificada += 'a';
          break;
        case '2':
          decodificada += 'e';
          break;
        case '3':
          decodificada += 'i';
          break;
        case '4':
          decodificada += 'o';
          break;
        case '5':
          decodificada += 'u';
          break;
        default:
          decodificada += codigo[index];
          break;
      }
    }
    return decodificada;
  }
  
  module.exports = {
    decode,
    encode,
  }