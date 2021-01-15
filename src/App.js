import React, { useState } from 'react';
import './styles/App.scss';

import Landing from './pages/index';
import Navbar from './global/navbar/Navbar';

function App() {
  const [landing, setLanding] = useState(true);

  const changePage = (value) => {
    setLanding(value);
  };

  return (
    <>
      <Navbar landing={landing} changePage={changePage} />
      <Landing landing={landing} changePage={changePage} />
    </>
  );
}

export default App;
