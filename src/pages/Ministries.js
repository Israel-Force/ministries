import React from 'react';
import styled from 'styled-components';

import Ministry from '../components/Ministry';
import Pagination from '../components/Pagination';
import color from '../config/color';
import usePagination from '../hooks/usePagination';

function Ministries({ landing, data }) {
  const { currentPosts, paginate, postsPerPage } = usePagination();

  // do not render this component if landing is false
  if (!landing) return null;

  const currentMinistries = currentPosts(data);

  return (
    <Wrapper>
      <article className="container">
        {currentMinistries?.map((ministry, i) => (
          <div key={i} className="box">
            <Ministry data={ministry} />
          </div>
        ))}
      </article>
      <Pagination
        postsPerPage={postsPerPage}
        paginate={paginate}
        totalPost={data.length}
      />
    </Wrapper>
  );
}

const Wrapper = styled.section`
  padding: 8rem 3rem;
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    .box:not(:last-child) {
      margin-bottom: 4rem;
      border-bottom: 2px solid ${color.colorGrey};
    }
  }
  @media (min-width: 767px) {
    .container {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(36rem, 40rem));
      grid-gap: 4rem;
      justify-content: center;
      align-items: flex-start;
      .box {
        border: 1px solid ${color.colorGrey} !important;
        border-radius: 10px;
        box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.11);
        margin-bottom: 0 !important;
        padding: 2rem;
        &:hover {
          transform: scale(1.02);
        }
      }
    }
  }
  @media (min-width: 1025px) {
    .container {
      grid-gap: 3rem;
    }
  }
`;

export default Ministries;
