import React from 'react'
import Pagination from 'react-bootstrap/Pagination';

const Paginations2 = (props) => {

    const { items, pageCount, totalTodosPage, handleFirst1, handlePrev1, handleLast1, handleNext1} = props

    const handleFirst = () => {
        handleFirst1();
    }

    const handlePrev = () => {
        handlePrev1();
    }

    const handleNext = () => {
        handleNext1();
    }

    const handleLast = () => {
        handleLast1();
    }

    return (
        <div >
            <>
                <Pagination style={{ justifyContent: "center" }}>
                    <Pagination.First onClick={handleFirst} disabled={pageCount === 1} />
                    <Pagination.Prev onClick={handlePrev} disabled={pageCount === 1} />
                    {/* {minPageLimit >= 1 ? "" : <Pagination.Ellipsis />} */}
                    {items}
                    {/* {items.length > maxPageLimit ? "" : <Pagination.Ellipsis />} */}
                    <Pagination.Next onClick={handleNext} disabled={pageCount === items.length || totalTodosPage === 0&&1} />
                    <Pagination.Last onClick={handleLast} disabled={pageCount === items.length || totalTodosPage === 0&&1} />
                </Pagination>
            </>
        </div>
    )
}

export default Paginations2