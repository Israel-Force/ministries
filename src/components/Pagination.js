import React from 'react';
import styled from 'styled-components';
import color from '../config/color';

function Pagination({ postsPerPage, totalPost, paginate }) {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPost / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  const handleClick = (number) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    paginate(number);
  };

  return (
    <Wrapper>
      <ul>
        {pageNumbers.map((number) => (
          <li onClick={() => handleClick(number)} key={number}>
            <p>{number}</p>
          </li>
        ))}
      </ul>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  font-size: 1.4em;
  margin-top: 4rem;
  ul {
    display: flex;
    justify-content: center;
    li {
      padding: 1rem 1.5rem;
      border: 1px solid ${color.colorBlue};
      cursor: pointer;
      &:hover {
        transform: scale(1.1);
        box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.11);
      }
    }
    li:not(:last-child) {
      margin-right: 1rem;
    }
  }
  @media (min-width: 767px) {
    ul {
      width: 95vw;
    }
  }
`;

export default Pagination;
