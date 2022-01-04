const names = [
    'Aanemarie', 'Adervandes', 'Akifusa',
    'Abegildo', 'Adicellia', 'Aladonata',
    'Abeladerco', 'Adieidy', 'Alarucha',
  ];

/* Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra 'a' maiúscula ou minúscula. */

function containsA() {
   const separa = names.reduce((cont, elemento) => {
     const letras = elemento.split('')
     return cont.concat(letras)
   }, []);

    const letrasA = separa.reduce((cont, elementos) => {
      if (elementos === 'A' || elementos === 'a') {
             cont = cont + 1
      }
    return cont
    }, 0)
    return letrasA
}


console.log(containsA())