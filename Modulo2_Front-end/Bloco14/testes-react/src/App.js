import './App.css';

function App() {
  return (
      <div className="App">
      <label htmlFor="id-email">
        Email
        <input id="id-email" type="email" />
      </label>
      <button id="btn-send" data-testid="id-send" type="button">Enviar</button>
      <input id="btn-back" type="button" value="Voltar" />
    </div>
  );
}

export default App;
