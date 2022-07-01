import React from 'react';
import { getImagens } from './components/07-Api-Async-Await';

const App = () => {
  getImagens()
  return (
    <div>
      hola
    </div>
  );
};

export default App;