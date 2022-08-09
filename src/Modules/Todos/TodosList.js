import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Paginations from '../../base/Paginations/Paginations'
import TodosItem from './TodosItem'
import * as action from './_redux/TodosAction'
import Pagination from 'react-bootstrap/Pagination';
import Paginations2 from '../../base/Paginations/Paginations2'
import { Form } from 'react-bootstrap'

const TodosList = () => {

    const dispatch = useDispatch();
    const todos = useSelector(state => state.todosListInformation.todos)
    const totalTodosCount = useSelector(state => state.todosListInformation.totalCount)
    const totalTodosPage = useSelector(state => state.todosListInformation.totalPage)
    const [sortData, setSortData] = useState("")
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
    }, [sortData, pageCount, limitCount])

    const getList = () => {
        let od = "";
        if (!order) {
            od = "-";
        }
        let url = `?sortBy=${od}${sortData}&page=${pageCount}&limit=${limitCount}`;
        dispatch(action.fetchTodos(url));
    }

    const handleCheckedSort = () => {
        console.log("handleChecked:", handleChecked);
        if (handleChecked === "0") {
            setOrder(false)
            setHandleChecked("1")
        } else {
            setOrder(true)
            setHandleChecked("0")
        }
        setSortData("checked")
        getList()
        console.log("Checked");
    }

    const handleTodoSort = () => {
        console.log("handle", handleContent);
        if (handleContent === "0") {
            setOrder(false)
            setHandleContent("1")
        } else {
            setOrder(true)
            setHandleContent("0")
        }
        setSortData("content")
        getList()
        console.log("content");
    }

    const handleDateSort = () => {
        console.log("handle", handleCreatedAt);
        if (handleCreatedAt === "0") {
            setOrder(false)
            setHandleCreatedAt("1")
        } else {
            setOrder(true)
            setHandleCreatedAt("0")
        }
        setSortData("createdAt")
        getList()
        console.log("createdAt");
    }

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
        if ((pageCount - 1) % limitCount === 1) {
            setMaxPageLimit(maxPageLimit - limitCount);
            setMinPageLimit(minPageLimit - limitCount);
        }
        setPageCount(prev => prev - 1)
    }
    
    const handleNext = () => {
        if (pageCount + 1 > maxPageLimit) {
            setMaxPageLimit(maxPageLimit + limitCount);
            setMinPageLimit(minPageLimit + limitCount);
        }
        setPageCount(prev => prev + 1)
    }
    
    const handleLast = () => {
        setPageCount(totalTodosPage)
    }
    
    const handelSelectChange = (e) => {
        setPageCount(1);
        setLimitCount(e.target.value);
    }

    return (
        <div className='container'>
            <table className='table tableWidth overflow-auto'>
                <thead>
                    <tr>
                        <td className='pointer' onClick={handleCheckedSort}>Checked</td>
                        <td className='pointer' onClick={handleTodoSort}>ToDoList</td>
                        <td className='pointer' onClick={handleDateSort}>Date</td>
                        <td>Actions</td>
                    </tr>
                </thead>
                <tbody styles={'height: 100px; overflow: scroll; display: block;'}>
                    {todos.map((todoItemList) => (
                        <TodosItem key={todoItemList._id} todo={todoItemList} />
                    ))}
                </tbody>
                <tfoot >
                    <tr>
                        <td colSpan="4">
                            <div className='row'>
                                <div className='col-10'>
                                    {/* <Paginations items={items} /> */}
                                    <Paginations2 items={items} pageCount={pageCount} handleFirst1={handleFirst} handlePrev1={handlePrev} handleLast1={handleLast} handleNext1={handleNext} maxPageLimit={maxPageLimit} minPageLimit={minPageLimit} />
                                </div>
                                <div className='col-2'>
                                    <div>
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
                            </div>
                        </td>
                    </tr>
                </tfoot>
            </table>
        </div>
    )
}

export default TodosList