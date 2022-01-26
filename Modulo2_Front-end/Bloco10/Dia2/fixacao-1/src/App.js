import './App.css';
import Image from './Image';

function App() {
  const X = 'https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg'
  return (
    <div className="App">
      <header className="App-header">
        <Image source= {X} alternativeText='Cute cat staring' />
      </header>
    </div>
  );
}

export default App;
