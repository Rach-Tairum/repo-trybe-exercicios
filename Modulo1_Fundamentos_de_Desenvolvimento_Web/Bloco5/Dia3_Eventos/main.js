const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');


// 1. Copie esse arquivo e edite apenas ele;
// 1.1. Antes de começar os exercícios, use o LiveServer para dar uma olhada em como está a página no navegador.
// 1.2. Note que uma das caixas está um pouco acima das outras. Por que isso ocorre?

// R: Por causa do transform: TranslateY

// 2. Crie uma função que adicione a classe 'tech' ao elemento `li` quando for clicado.
// 2.1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?
// 3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech';

firstLi.classList.remove('tech');

    firstLi.addEventListener('click',function(){
        firstLi.className = 'tech';
        secondLi.classList.remove('tech');
        thirdLi.classList.remove('tech');

        firstLi.addEventListener('dblclick',function(){
            firstLi.classList.remove ("tech");
        });

        if (firstLi.className === 'tech'){
            function tecnologia1(){
                firstLi.innerHTML = input.value
            }

            input.addEventListener('change', tecnologia1);
        }
    });

    secondLi.addEventListener('click',function(){
        firstLi.classList.remove('tech');
        secondLi.className = 'tech';
        thirdLi.classList.remove('tech');
        

        secondLi.addEventListener('dblclick',function(){
            secondLi.classList.remove('tech');
        });

        if (secondLi.className === 'tech'){
            function tecnologia2(){
                secondLi.innerHTML = input.value
            }
        
            input.addEventListener('change', tecnologia2);
        }
    });

    thirdLi.addEventListener('click',function(){
        firstLi.classList.remove('tech'); 
        secondLi.classList.remove('tech'); 
        thirdLi.className = 'tech';
        
        thirdLi.addEventListener('dblclick',function(){
            thirdLi.classList.remove('tech');
            
        });

        if (thirdLi.className === 'tech'){
            function tecnologia3(){
                thirdLi.innerHTML = input.value
            }
        
            input.addEventListener('change', tecnologia3);
        }
    });





 if (thirdLi.className === 'tech'){
    function tecnologia3(){
        thirdLi.innerHTML = input.value
    }

    input.addEventListener('change', tecnologia3);
}




// 4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;
// 4.1. Que tal redirecionar para seu portifólio?

    myWebpage.addEventListener('dblclick', function(){
        window.location.href = 'https://rach-tairum.github.io/';
    })

// 5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;

myWebpage.addEventListener('mouseover', function(){
    myWebpage.style.color = 'rgb(251, 0, 138)';
});

myWebpage.addEventListener('mouseleave', function(){
    myWebpage.style.color = 'white';
});


// Segue abaixo um exemplo do uso de event.target:


// function resetText(event) {
//   // O Event é passado como um parâmetro para a função.
//   event.target.innerText = 'Opção reiniciada';
//   // O event possui várias propriedades, porém a mais usada é o event.target,
//   // que retorna o objeto que disparou o evento.
// }

//firstLi.addEventListener('dblclick', resetText);

// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'firstLi'.