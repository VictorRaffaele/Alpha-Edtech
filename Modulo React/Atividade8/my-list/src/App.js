import logo from './logo.svg';
import './App.css';

function App({children}) {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Prod List</h1>
      </header>
      {children}
    </div>
  );
}

export default App;