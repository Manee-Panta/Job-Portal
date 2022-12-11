import React from "react";
import "../style/pagination.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBackwardFast,
  faBackwardStep,
  faForwardFast,
  faForwardStep,
} from "@fortawesome/free-solid-svg-icons";
const Pagination = ({
  totalPosts,
  postsPerPage,
  setCurrentPage,
  currentPage
}) => {
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i);
  }
  const setInitial = () => {
    setCurrentPage(1);
  };
  const setBackward = () => {
    currentPage <= 1 ? setCurrentPage(1) : setCurrentPage(currentPage - 1);
  };
 
  const setForward = () => { 
    currentPage >= pages.length ? setCurrentPage(pages.length) : setCurrentPage(currentPage + 1);
  };
  const setLast = () => {

    setCurrentPage(pages.length);
  };
  
  
  

  return (
    <div className="pagination">
      <button onClick={setInitial}>
        <FontAwesomeIcon icon={faBackwardFast}></FontAwesomeIcon>
      </button>
      <button onClick={setBackward}>
        <FontAwesomeIcon icon={faBackwardStep}></FontAwesomeIcon>
      </button>

      {pages.map((page, index) => (
        <button
          key={index}
          onClick={() => setCurrentPage(page)}
          className= {page === currentPage ? "pactive" : "showbtn"} 
         
        >
          {page}
        </button>
      ))}

      <button onClick={setForward}>
        <FontAwesomeIcon icon={faForwardStep}></FontAwesomeIcon>
      </button>
      <button onClick={setLast}>
        <FontAwesomeIcon icon={faForwardFast}></FontAwesomeIcon>
      </button>
    </div>
  );
};

export default Pagination;
