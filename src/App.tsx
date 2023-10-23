import React from 'react';
import logo from './logo.svg';
import './App.css';
import FetchCompanyData from './data-access-queries/fetchCompanyData';

function App() {
  return (    
    <div className="App">
      <div>
        <header className="App-header">
          <h1>Company ABC</h1>
        </header>
      </div>
      <div>
        <form>
          <label>
            City
            <input />
          </label>
          <label>
            State
            <input />
          </label>
        </form>

        <div>
          <FetchCompanyData/>
        </div>
      </div>
    </div>
  );
}

export default App;
