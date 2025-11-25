import logo from './logo.svg';
import './App.css';
import Meme from './meme';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Meme Component - React</h1>
      </header>
      <Meme
        url="https://i.imgflip.com/1bij.jpg"
        captionTop="One Does Not Simply"
        captionBottom="Write Beautiful Javascript"
      />
      <Meme
        url="https://i.imgflip.com/7r7lb.jpg"
        captionTop="Callbacks"
        captionBottom="Callbacks Everywher"
      />
      <Meme
        url="https://i.imgflip.com/80dgly.png"
        captionTop="Kudos"
        captionBottom="Now"
      />
    </div>
  );
}

export default App;
