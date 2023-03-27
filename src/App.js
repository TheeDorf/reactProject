import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>This is a header</h1>
        <p>here is another p</p>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <ul>
          <li>item1</li>
          <li>item2</li>
          <li>item3</li>
        </ul>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
