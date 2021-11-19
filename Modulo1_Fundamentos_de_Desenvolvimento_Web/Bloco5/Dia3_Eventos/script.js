function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.

/* 1. O array dezDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro. Desenvolva uma função que crie dinamicamente cada dia do calendário e os adicione como filhos/filhas da tag <ul> com ID "days" . Note que os dias 29 e 30 de novembro estão no array pois representam respectivamente Domingo e Segunda-feira.

    - Os dias devem estar contidos em uma tag <li> , e todos devem ter a classe day . Ex: <li class="day">3</li>

    - Os dias 24, 25 e 31 são feriados e, além da classe day , devem conter também a classe holiday . Ex: <li class="day holiday">24</li>

    - Os dias 4, 11, 18 e 25 são Sexta-feira. Eles devem conter a classe day e a classe friday . Ex: <li class="day friday">4</li> */

  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

  function daysOfMonth (){
      const dias = document.getElementById('days');
      
      for (let i = 0; i < dezDaysList.length; i += 1){
          const semanas = document.createElement('li');
          semanas.innerHTML = dezDaysList[i];
          semanas.className = 'day';

          if(semanas.innerHTML === '24' || semanas.innerHTML === '31'){
            semanas.classList.add ('holiday');
        } else if (semanas.innerHTML === '4' || semanas.innerHTML === '11' || semanas.innerHTML === '18'){
            semanas.classList.add ('friday');
        } else if (semanas.innerHTML === '25'){
            semanas.classList.add ('friday');
            semanas.classList.add ('holiday');
        }

          dias.appendChild(semanas);
      }
 
  }
  daysOfMonth();


/* 2. Implemente uma função que receba como parâmetro a string "Feriados" e crie dinamicamente um botão com o nome "Feriados".
    - Adicione a este botão a ID "btn-holiday" .
    
    - Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .*/


    function eFeriado(nomeBotao){
        let botoes = document.querySelector('.buttons-container');
        let botaoMaravilha = document.createElement('botton');
        botaoMaravilha.innerText = nomeBotao;
        botaoMaravilha.id = 'btn-holiday'

        botoes.appendChild (botaoMaravilha);
        
    }
        
    eFeriado('Feriados');

/* 3. Implemente uma função que adicione ao botão "Feriados" um evento de "click" que muda a cor de fundo dos dias que possuem a classe "holiday" .

    - É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial com a cor "rgb(238,238,238)" .*/

    function destaqueFeriado(){
        let feriadao = document.getElementById('btn-holiday');
        let feriado = document.getElementsByClassName('holiday')
        let corOriginal = 'rgb(238,238,238)';
        let destaque = 'rgb(116, 248, 116)'

        feriadao.addEventListener('click', function(){

        for(let index = 0; index < feriado.length; index += 1){
        
            if (feriado[index].style.backgroundColor === destaque){
                feriado[index].style.backgroundColor = corOriginal;
            } else {
                feriado[index].style.backgroundColor = destaque;
            }
            
        }
        })
    
    };

    destaqueFeriado()

/* 4. Implemente uma função que receba como parâmetro a string "Sexta-feira" e crie dinamicamente um botão com o nome "Sexta-feira".
    - Adicione a este botão o ID "btn-friday" .
    
    - Adicione este botão como filho/filha da tag <div> com classe "buttons-container" . */

    function sextou(dia){
        let botoes = document.querySelector('.buttons-container');
        let melhorDia = document.createElement('botton');
        melhorDia.innerText = dia;
        melhorDia.id = 'btn-friday';

        botoes.appendChild (melhorDia);
        
    }

    sextou('Sexta-Feira');

/* 5. Implemente uma função que adicione ao botão "Sexta-feira" um evento de "click" que modifica o texto exibido nos dias que são Sexta-feira.
    - É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial exibindo os dias.*/

    function escreveSexta(original){
        let botaoSexta = document.getElementById('btn-friday');
        let dias = document.getElementsByClassName('friday');
        let eSexta = 'Sextou!';

        botaoSexta.addEventListener('click', function(){
            for (let i = 0; i < dias.length; i += 1){
                if(dias[i].innerText !== eSexta){
                    dias[i].innerText = eSexta;
                } else {
                    dias[i].innerText = original[i];
                }

            }
        })
    }
let diasOriginais = [ 4, 11, 18, 25 ];
escreveSexta(diasOriginais);

/* 6. Implemente duas funções que criem um efeito de "zoom". Ao passar o ponteiro do mouse em um dia do mês no calendário, o texto desse dia deve aumentar e, quando o ponteiro do mouse sair do dia, o texto deve retornar ao tamanho original.*/

const dias = document.querySelectorAll('.day');

function zoomIn(){
for (let index = 0; index < dias.length; index += 1){
    dias[index].addEventListener('mouseover', function(event){
        event.target.style.fontSize = '190%'
    })
}
}

function zoomOut(){
    for (let index = 0; index < dias.length; index += 1){
        dias[index].addEventListener('mouseleave', function(event){
            event.target.style.fontSize = '20px'
        })
    }
    }
zoomIn()
zoomOut()

/* 7. Implemente uma função que adiciona uma tarefa personalizada ao calendário. A função deve receber como parâmetro a string com o nome da tarefa (ex: "cozinhar") e criar dinamicamente um elemento com a tag <span> contendo a tarefa.
    - O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks". */

    function tarefas(novaTarefa){
        let tasks = document.querySelector('.my-tasks');
        let novaTask = document.createElement('span');
        novaTask.innerHTML = novaTarefa;

        tasks.appendChild(novaTask);
    }

tarefas('Dias de projeto');


/* 8. Implemente uma função que adiciona uma legenda com cor para a tarefa criada no exercício anterior. Esta função deverá receber como parâmetro uma string ("cor") e criar dinamicamente um elemento de tag <div> com a classe task .
    - O parâmetro cor deverá ser utilizado como cor de fundo da <div> criada.
    - O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks". */

    function newTaskDiv(cor){
        let tasks = document.querySelector('.my-tasks');
        let novaLegenda = document.createElement('div');

        novaLegenda.className = 'task'
        novaLegenda.style.backgroundColor = cor;

        tasks.appendChild(novaLegenda);

    }

    newTaskDiv('rgb(150, 120, 233)');

    //teste
    tarefas('faxina');
    newTaskDiv('pink')

/* 9. Implemente uma função que adiciona um evento que, ao clicar no elemento com a tag <div> referente a cor da sua tarefa, atribua a este elemento a classe task selected , ou seja, quando sua tarefa possuir a classe task selected , ela estará selecionada.
    - Ao clicar novamente no elemento, a sua classe deverá voltar a ser somente task , ou seja, esta tarefa está deixando de ser uma tarefa selecionada.*/

    function selecionaTarefa(){
        let task = document.querySelectorAll('.task');
        let selectedTask = document.getElementsByClassName('task selected');

        for (let i = 0; i < task.length; i += 1){
            task[i].addEventListener('click', function(){
                if (selectedTask.length === 0) {
                    task[i].className = 'task selected';
                    
                  } else {
                    task[i].className = 'task';
                  }
            })
        }
    }

    selecionaTarefa();

/* 10. Implemente uma função que adiciona um evento que, ao clicar em um dia do mês no calendário, atribua a este dia a cor da legenda da sua tarefa selecionada.
    - Ao clicar novamente no dia com a cor da legenda, a sua cor deverá voltar à configuração inicial rgb(119,119,119) .*/

    
