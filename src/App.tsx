import React from 'react';
import { RecoilRoot } from 'recoil';

import './App.css';

import Counter from './Counter';

function App() {
  return (
    <RecoilRoot>
      <div className="App">
        <Counter />
      </div>
    </RecoilRoot>
  );
}

export default App;
