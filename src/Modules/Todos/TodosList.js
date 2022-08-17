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
    const [searchText, setSearchText] = useState("")
    const [order, setOrder] = useState(true);
    const [sortByState, setSortByState] = useState("")
    const [pageCount, setPageCount] = useState(1)
    const [limitCount, setLimitCount] = useState(20)

    console.log(totalTodosPage)

    useEffect(() => {
        getList()
        return () => { };
    }, [pageCount, limitCount, sortByState, order])

    useEffect(() => {
        const timer = setTimeout(() => {
            getList()
        }, 1000);
        return () => clearTimeout(timer);
    }, [searchText]);

    //API call for get todos list, (sorted, pages, limits, searched) data 
    const getList = () => {
        let od = "+";
        if (!order) {
            od = "-";
        } else {
            od = ""
        }
        let url = `?sortBy=${od}${sortByState}&page=${pageCount}&limit=${limitCount}`;
        if (searchText) {
            url = `?sortBy=${od}${sortByState}&page=${pageCount}&limit=${limitCount}&content=${searchText}`;
        } else {
            url = `?sortBy=${od}${sortByState}&page=${pageCount}&limit=${limitCount}`;
        }
        dispatch(action.fetchTodos(url));
    }

    //sort functions
    const sortByFunction = (id) => {
        setSortByState(id)
        if (id) {
            setOrder(!order)
        } else {
            setSortByState(id)
            setOrder(true)
        }
    }
    
    //delete function for individual todo
    const onDelete = () => {
        setPageCount(1)
        getList();
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
        setPageCount(prev => prev - 1)
    }

    const handleNext = () => {
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

    const handleResetAll = () => {
        setOrder(true)
        setSortByState("")
        setPageCount(1)
        setLimitCount(5)
        setSearchText("")
        setSearchText("")
    }

    return (
        <div className='container'>

            {/* search todos */}
            <SearchTodos parentCallBack={handleCallback} handleResetAll={handleResetAll} />
            <div>
                <table className='table tableWidth overflow-auto table-bordered centerAlign'>
                    <thead>
                        <tr>
                            <td style={{ width: "82px" }} className='pointer' id="checked" onClick={(e) => {
                                sortByFunction(e.target.id)
                            }}>Checked</td>
                            <td className='pointer' id="content" onClick={(e) => {
                                sortByFunction(e.target.id)
                            }}>ToDoList</td>
                            <td style={{ width: "110px" }} className='pointer' id="createdAt" onClick={(e) => {
                                sortByFunction(e.target.id)
                            }}>Date</td>
                            <td style={{ width: "170px" }}>Actions</td>
                        </tr>
                    </thead>

                    {/* todos table row creation */}
                    <tbody>
                        {todos.map((todoItemList) => (
                            <TodosItem key={todoItemList._id} todo1={todoItemList} onDelete={onDelete} />
                        ))}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan="4">
                                <div className='row'>

                                    {/* Pagination call */}
                                    <div className='col-10'>
                                        {/* <Paginations items={items} /> */}
                                        <Paginations2 items={items} pageCount={pageCount} totalTodosPage={totalTodosPage} handleFirst1={handleFirst} handlePrev1={handlePrev} handleNext1={handleNext} handleLast1={handleLast} />
                                    </div>

                                    {/* Selection call */}
                                    <div className='col-2'>
                                        {/* <label>Rows per page:</label> */}
                                        <Form.Group>
                                            <Form.Select defaultValue={limitCount} style={{ width: "5em" }} onChange={handelSelectChange}>
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