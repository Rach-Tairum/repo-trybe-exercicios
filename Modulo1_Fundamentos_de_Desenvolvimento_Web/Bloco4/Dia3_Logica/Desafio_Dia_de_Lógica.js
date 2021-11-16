// 1 - Transformar valor de Farenight para celcius -OK
function fahrenheit_to_celsius(temp_fahrenheit) {
    let temp = (temp_fahrenheit -32)/1.8;
    let celsius = temp.toFixed (1)  // devolve o valor com uma casa decimal
    return celsius;
}

console.log(fahrenheit_to_celsius(95))

// 2 - diferença entre 10 e um número sendo sempre positivo o valor de resultado - OK
function difference(x) {
    let diferenca = 0;
    if (x > 10){
        diferenca = x - 10;
    } else {
        diferenca = 10 - x;
    }
    return diferenca;
}

// 3 - Contagem regressiva: 10...9...8...7...6...5...4...3...2...1...0!!! - OK

// function count_down(x) {
//     let contagem = '';

//     for (let i = x; i >= 0; i -= 1){
//         if(x >= 1){
//             contagem = contagem + x[i] + '...';
//         } else {
//             contagem = contagem + x[i] + '!!!'
//         }
//     }
//  return contagem
// }

// console.log(count_down(10));

function count_down(x) {
    let contagem = '';
    
    for (i = 0; i <= x; i += 1){
        let regresso = x - i
        if(regresso >= 1){
            contagem = contagem + regresso + '...';
    } else {
        contagem = contagem + regresso + '!!!'
        }
    }
return contagem;
}
console.log(count_down(10));

// 4 - somar todos os números divisiveis por 3 e 5 que sejam menores q o valor dado - OK

function multiples_of_3_or_5(roof){
    let divisiveis = [];
    let sum = 0;
    for (let index = 2; index < roof; index += 1){
        if (index % 3 === 0 || [index] % 5 === 0) {
            divisiveis.push (index);
        };
    };

    for (let i = 0; i < divisiveis.length; i += 1){    
        sum = sum + divisiveis[i];
    }
    return sum
}

console.log(multiples_of_3_or_5(10))

// 5 - Soma dos números de fibonatti pares

function even_fibonacci_numbers(roof){

    let fibonacci = [1,2,3];
    for (let index = fibonacci[1]; index < roof; index += 1){
        fibonacci.push (index + fibonacci[fibonacci.length -1])
        console.log (fibonacci);
    }
}

console.log(even_fibonacci_numbers(10));

// 6 - números primos - OK

function nth_prime(n) {
    let array =[];
    
    for (let index = 2; index <= 1000; index += 1) {
        let divisao = [];

        for (let i = 1; i <= index; i += 1){
            let primo = index % i;
            if (primo === 0){
                divisao.push(i)
            }       
        }

        if (divisao.length <= 2){
            array.push (index);
        }
}
    return array[n - 1];
}


// 8 - caixa de merdado - OK

function caixa(values){
    let sum = [];
    for (let a = 0; a < values.length; a +=1){
        if (values[a] === 0){
            sum.pop()
        } else{
            sum.push(values[a]);
        }
    }
    let carrinho = 0;
    for (let i = 0; i < sum.length; i+=1){
        carrinho = carrinho + sum[i];
    }
    return carrinho;
}
console.log(caixa([1,3,5,4,0,0,7,0,0,6]))

// 10 - quadro da soma - soma dos quadrados - OK

function sum_square_difference(n){
    let sum = 0;
    for (let i = 0; i<= n; i+=1){
        sum = sum + i;
    }
    let quadradoDaSoma = sum ** 2;

    let sum2 = 0;
    for (let e = 0; e <=n; e +=1){
        let quadrado = e ** 2;
        sum2 = sum2 + quadrado; 
    }

    let diferenca = quadradoDaSoma - sum2;
    return diferenca
}
console.log (sum_square_difference(10))



// 13 - soma de dígitos
function digits_sum(number_s){
    let contador = 0;
    for (let o = 0; o <= 1000; o += 1){
        if (o <= 9){
            if (number_s === o){
                contador += 1
            }
        } else {
            let valor = 0;
            for (let a = 10; a<=1000; a+=1){
                valor = valor + a % 10;
            }
        }
    }
}


// 7 - Maior divisor primo de n - OK

function largest_prime_factor(number) {
    let array =[];
    
    for (let index = 2; index <= 700; index += 1) {
        let divisao = [];

        for (let i = 1; i <= index; i += 1){
            let primo = index % i;
            if (primo === 0){
                divisao.push(i);
            }       
        }

        if (divisao.length <= 2){
            array.push (index);
        }
}
    let divisor = [];
    for (let a = 0; a < array.length; a += 1){
        if (number % array[a] === 0.0000){
            divisor.push(array[a]);
        }
    }

    return divisor[divisor.length -1];
}
