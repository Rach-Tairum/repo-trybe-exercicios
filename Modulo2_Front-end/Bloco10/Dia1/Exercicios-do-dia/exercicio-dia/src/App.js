import React from 'react';

const Task = (value) => {
  return value.map((element) => <li key={element}>{element}</li>) 
}

const listaDeTarefas = ['jantar', 'Terminar exercicios', 'assistir Emily em Paris com a família', 'dormir']

function App() {
  return (
    <div className="App">
      <h3> Lista de tarefas:</h3>
      <ol>
        {Task(listaDeTarefas)}
      </ol>
    </div>
  );
}

export default App;
