import React from 'react'
import Pagination from 'react-bootstrap/Pagination';

const Paginations = ({items}) => {

  return (
    <div >
      <Pagination style={{justifyContent:"center"}}>{items}</Pagination>
    </div>);
}

export default Paginations