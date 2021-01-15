import React from 'react';

import Toolbar from './toolbar/Toolbar';

function Navbar({ landing, changePage }) {
  return (
    <div>
      <Toolbar landing={landing} changePage={changePage} />
    </div>
  );
}

export default Navbar;
