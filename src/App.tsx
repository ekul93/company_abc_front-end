import React, { useState } from 'react';
import './App.css';
import FetchCompanyData from './data-access-queries/fetchCompanyData';

function App() {
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zip, setZip] = useState('');

  const handleCityChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setCity(event.target.value);
  };

  const handleStateChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setState(event.target.value);
  };

  const handleZipChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setZip(event.target.value);
  };
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
            <input value={city} onChange={handleCityChange}/>
          </label>
          <label>
            State
            <input value={state} onChange={handleStateChange} />
          </label>
          <label>
            Radius
            <input value={zip} onChange={handleZipChange} />
          </label>
        </form>

        <div>
          <FetchCompanyData city={city} state={state} zip={zip}/>
        </div>
      </div>
    </div>
  );
}

export default App;
