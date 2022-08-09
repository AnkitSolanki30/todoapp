import React from 'react'
import Pagination from 'react-bootstrap/Pagination';

const Paginations2 = (props) => {

    const { items, pageCount, handleFirst1, handlePrev1, handleLast1, handleNext1, maxPageLimit, minPageLimit } = props

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

    // let pageDecremenEllipses = null;
    // if (minPageLimit >= 1) {
    //     pageDecremenEllipses = <li onClick={handlePrev}>&hellip;</li>
    // }
    // let pageIncrementEllipses = null;
    // if (items.length - 1 > maxPageLimit) {
    //     pageIncrementEllipses = <li onClick={handleNext}>&hellip;</li>
    // }

    return (
        <div >
            <>
                {/* <Pagination style={{ justifyContent: "center" }}>{items}</Pagination> */}

                <Pagination style={{ justifyContent: "center" }}>

                    {/* {pageCount == 1 ? null :
                        <>
                            <Pagination.First onClick={handleFirst} />
                            <Pagination.Prev onClick={handlePrev} />
                        </>} */}

                    <Pagination.First onClick={handleFirst} disabled={pageCount === 1} />
                    <Pagination.Prev onClick={handlePrev} disabled={pageCount === 1} />

                    {/* {pageDecremenEllipses} */}

                    {/* {minPageLimit >= 1 ? "" : <Pagination.Ellipsis />} */}
                    {items}
                    {/* {items.length - 1 > maxPageLimit ? "" : <Pagination.Ellipsis />} */}

                    {/* {pageIncrementEllipses} */}

                    <Pagination.Next onClick={handleNext} disabled={pageCount === items.length} />
                    <Pagination.Last onClick={handleLast} disabled={pageCount === items.length} />

                    {/* {pageCount == items.length ? null :
                        <>
                            <Pagination.Next onClick={handleNext} />
                            <Pagination.Last onClick={handleLast} />
                        </>} */}
                </Pagination>
            </>
        </div>
    )
}

export default Paginations2