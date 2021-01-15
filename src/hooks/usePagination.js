import { useState } from 'react';

function usePagination() {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);

  // Get current posts per page (3)
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = (value) => {
    // value is an array of objects from the data
    return value?.slice(indexOfFirstPost, indexOfLastPost);
  };

  // change Page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return { currentPosts, paginate, postsPerPage };
}

export default usePagination;
