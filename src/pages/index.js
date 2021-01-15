import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import data from '../data/ministers';
import Ministries from './Ministries';
import Upload from './Upload';

function Landing({ landing, changePage }) {
  const [state, setState] = useState([]);

  const uploadData = (data) => {
    setState([...state, data]);
  };

  useEffect(() => {
    setState(data.ministries);
  }, []);

  return (
    <Wrapper>
      <Ministries landing={landing} data={state} />
      <Upload
        landing={landing}
        changePage={changePage}
        uploadData={uploadData}
      />
    </Wrapper>
  );
}

const Wrapper = styled.section``;

export default Landing;
