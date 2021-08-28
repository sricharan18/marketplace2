import './App.css';
import { BrowserRouter, } from 'react-router-dom';

import Page from './components/page';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Page />
      </div>
    </BrowserRouter>
  );
}

export default App;
