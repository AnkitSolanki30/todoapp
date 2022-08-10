import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import Paginations from '../../base/Paginations/Paginations'
import TodosItem from './TodosItem'
import * as action from './_redux/TodosAction'
import Pagination from 'react-bootstrap/Pagination';
import Paginations2 from '../../base/Paginations/Paginations2'
import { Form } from 'react-bootstrap'
import SearchTodos from './SearchTodos'

const TodosList = () => {

    const dispatch = useDispatch();
    const todos = useSelector(state => state.todosListInformation.todos)
    const totalTodosCount = useSelector(state => state.todosListInformation.totalCount)
    const totalTodosPage = useSelector(state => state.todosListInformation.totalPage)
    const [sortData, setSortData] = useState("")
    const [searchText, setSearchText] = useState("")
    const [order, setOrder] = useState(true);
    const [handleChecked, setHandleChecked] = useState("0")
    const [handleContent, setHandleContent] = useState("0")
    const [handleCreatedAt, setHandleCreatedAt] = useState("0")
    const [pageCount, setPageCount] = useState(1)
    const [limitCount, setLimitCount] = useState(5)
    const [maxPageLimit, setMaxPageLimit] = useState(5);
    const [minPageLimit, setMinPageLimit] = useState(1);

    // console.log("totalTodosCount", totalTodosCount);
    // console.log("totalTodosPage", totalTodosPage);
    // console.log("todos", todos);

    useEffect(() => {
        getList()
        return () => { };
    }, [handleChecked, handleContent, handleCreatedAt, pageCount, limitCount, totalTodosCount])

    useEffect(() => {
        const timer = setTimeout(() => {
        getList()
        }, 2000);
        return () => clearTimeout(timer);
      }, [searchText]);

    //API call for get todos list, (sorted, pages, limits, searched) data 
    const getList = () => {
        let od = "";
        if (!order) {
            od = "-";
        }
        let url = `?sortBy=${od}${sortData}&page=${pageCount}&limit=${limitCount}`;
        if (searchText) {
            url = `?sortBy=${od}${sortData}&page=${pageCount}&limit=${limitCount}&content=${searchText}`;
        } else {
            url = `?sortBy=${od}${sortData}&page=${pageCount}&limit=${limitCount}`;
        }
        dispatch(action.fetchTodos(url));
    }

    //sort functions
    const handleCheckedSort = () => {
        if (handleChecked === "0") {
            setOrder(false)
            setHandleChecked("1")
        } else {
            setOrder(true)
            setHandleChecked("0")
        }
        setSortData("checked")
    }

    const handleTodoSort = () => {
        if (handleContent === "0") {
            setOrder(false)
            setHandleContent("1")
        } else {
            setOrder(true)
            setHandleContent("0")
        }
        setSortData("content")
    }

    const handleDateSort = () => {
        if (handleCreatedAt === "0") {
            setOrder(false)
            setHandleCreatedAt("1")
        } else {
            setOrder(true)
            setHandleCreatedAt("0")
        }
        setSortData("createdAt")
    }

    //pagination
    let items = [];
    for (let number = 1; number <= totalTodosPage; number++) {
        items.push(
            <Pagination.Item onClick={() => { setPageCount(number) }} key={number} active={number === pageCount}>
                {number}
            </Pagination.Item>,
        )
    }

    const handleFirst = () => {
        setPageCount(1)
    }

    const handlePrev = () => {
    //     if ((pageCount - 1) % limitCount === 1) {
    //         setMaxPageLimit(maxPageLimit - limitCount);
    //         setMinPageLimit(minPageLimit - limitCount);
    //     }
        setPageCount(prev => prev - 1)
    }

    const handleNext = () => {
        // if (pageCount + 1 > maxPageLimit) {
        //     setMaxPageLimit(maxPageLimit + limitCount);
        //     setMinPageLimit(minPageLimit + limitCount);
        // }
        setPageCount(prev => prev + 1)
    }

    const handleLast = () => {
        setPageCount(totalTodosPage)
    }

    //selection for limits per page
    const handelSelectChange = (e) => {
        setPageCount(1);
        setLimitCount(e.target.value);
    }

    //chield data for search todos
    const handleCallback = (childData) => {
        setPageCount(1);
        setSearchText(childData)
    }

    return (
        <div className='container'>

            {/* search todos */}
            <SearchTodos parentCallBack={handleCallback} setOrder={setOrder} setSortData={setSortData} setPageCount={setPageCount} setLimitCount={setLimitCount} setSearchText1={setSearchText}/>
            <div>
                <table className='table tableWidth overflow-auto table-bordered centerAlign'>
                    <thead>
                        <tr>
                            <td style={{ width: "82px"}} className='pointer' onClick={handleCheckedSort}>Checked</td>
                            <td className='pointer' onClick={handleTodoSort}>ToDoList</td>
                            <td style={{ width: "110px" }} className='pointer' onClick={handleDateSort}>Date</td>
                            <td style={{ width: "170px"}}>Actions</td>
                        </tr>
                    </thead>

                    {/* todos table row creation */}
                    <tbody>
                        {todos.map((todoItemList) => (
                            <TodosItem key={todoItemList._id} todo={todoItemList} setPageCount={setPageCount} />
                        ))}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan="4">
                                <div className='row'>

                                    {/* Pagination call */}
                                    <div className='col-10'>
                                        {/* <Paginations items={items} /> */}
                                        <Paginations2 items={items} pageCount={pageCount} handleFirst1={handleFirst} handlePrev1={handlePrev} handleLast1={handleLast} handleNext1={handleNext} maxPageLimit={maxPageLimit} minPageLimit={minPageLimit} />
                                    </div>

                                    {/* Selection call */}
                                    <div className='col-2'>
                                        {/* <label>Rows per page:</label> */}
                                        <Form.Group>
                                            <Form.Select style={{ width: "5em" }} onChange={handelSelectChange}>
                                                <option value="5">5</option>
                                                <option value="10">10</option>
                                                <option value="15">15</option>
                                                <option value="20">20</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    )
}

export default TodosList