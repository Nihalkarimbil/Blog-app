import React, { Suspense } from 'react';
import './App.css';
import Mainrouter from './component2/Mainrouter';
// React.lazy(()=>import('./components/Event'))

function App() {
  return (
    <div className="App">
        {/* <Suspense fallback={<div>lODING.....</div>}>*/}
          {/* <Event />
        </Suspense> */}
      <Mainrouter />
    </div>
  );
}

export default App;
