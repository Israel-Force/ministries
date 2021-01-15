import React, { useState } from 'react';
import styled from 'styled-components';
import { AiFillCaretDown, AiFillCaretUp } from 'react-icons/ai';

import coat from '../assets/img/coat-of-arms.png';
import color from '../config/color';

function Ministry({ data }) {
  const [clicked, setClicked] = useState(false);

  const handleClicked = () => {
    setClicked(!clicked);
  };

  return (
    <Wrapper clicked={clicked}>
      <div className="heading">
        <div className="red-line"></div>
        <div className="img-container">
          <img src={coat} alt="coat of arms" />
        </div>
        <h1>{data.name}</h1>
      </div>
      <div className="role">
        <p>
          <span>Minister:</span> {data.minister} - {data.origin}
        </p>
        {data.ministerOfState ? (
          <p>
            <span>Minister of State:</span> {data.ministerOfState.minister} -{' '}
            {data.ministerOfState.origin}
          </p>
        ) : null}
      </div>
      <div className={clicked ? 'show' : 'hide'}>
        <div className="address">
          <p>Address:</p>
          <p>{data.address}</p>
        </div>
        <div className="web">
          <p>
            Web: <a href="!#">{data.website}</a>
          </p>
        </div>
      </div>
      <div className="more">
        {clicked ? (
          <div onClick={handleClicked}>
            <p>Show Less</p>
            <AiFillCaretUp className="icon" />
          </div>
        ) : (
          <div onClick={handleClicked}>
            <p>More Info</p>
            <AiFillCaretDown className="icon" />
          </div>
        )}
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  font-size: 1.6em;
  width: 36rem;
  padding: 1rem 0 1.5rem;
  display: flex;
  flex-direction: column;
  .heading {
    display: flex;
    align-items: center;
    .red-line {
      width: 4px;
      height: 35px;
      background-color: ${color.colorRed};
      margin-right: 0.8rem;
    }
    .img-container {
      width: 50px;
      margin-right: 1rem;
      img {
        width: 100%;
      }
    }
    h1 {
      font-size: 1.5em;
      font-family: 'Poppins', sans-serif;
      font-weight: 400;
      line-height: 1.1;
      flex: 0 0 70%;
    }
  }
  .role {
    margin: 2rem 0;
    p {
      font-size: 1.1em;
      span {
        font-weight: bold;
      }
    }
  }
  .address {
    margin-bottom: 1rem;
    font-size: 1.1em;
    p:first-of-type {
      margin-bottom: 1rem;
    }
  }
  .web {
    margin-bottom: 1rem;
    p {
      a {
        font-size: 1.1em;
        text-decoration: none;
        color: ${color.colorBlue};
      }
    }
  }
  .show {
    display: block;
  }
  .hide {
    display: none;
  }
  .more {
    margin-top: auto;
    & > div {
      display: flex;
      align-items: center;
      color: ${color.colorBlue};
      cursor: pointer;
      p {
        margin-right: 1.5rem;
      }
      .icon {
        font-size: 1.2em;
        margin-top: 0.4rem;
      }
    }
  }
  @media (min-width: 767px) {
    height: ${(props) => (props.clicked ? 'fit-content' : '230px')};
    .role {
      margin: ${(props) => (props.clicked ? '2rem 0' : 'auto 0')};
    }
  }
`;

export default Ministry;
