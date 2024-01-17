// src/App.jsx
import './App.css';
import List from './components/List/List.jsx';

function App() {
  return (
    <div className="App">

      <div className="first-part">
        <div className="top-icons">
          <img class="ironhack-logo" src="/ironhack-logo-xs.png" alt='ironhack-logo' />
          <img class="menu-logo" src="/menu-top-xs.png" alt='menu-top' />
        </div>
        <div className="main-title">Say hello to ReactSJ</div>
        <div className="main-paragraph">
          You will learn how to use the most popular frontend library, and become a super Ninja developer.
        </div>
        <div className="main-button">
          <button>Awesome!</button>
        </div>
      </div>

      <List />

    </div>
  );
}

export default App;
