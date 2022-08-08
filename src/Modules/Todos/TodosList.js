import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Paginations from '../../base/Paginations/Paginations'
import TodosItem from './TodosItem'
import * as action from './_redux/TodosAction'
import Pagination from 'react-bootstrap/Pagination';


const TodosList = () => {

    const dispatch = useDispatch();
    const todos = useSelector(state => state.todosListInformation.todos)
    const totalTodosCount = useSelector(state => state.todosListInformation.totalCount)
    const totalTodosPage = useSelector(state => state.todosListInformation.totalPage)
    const [sortData, setSortData] = useState("")
    const [order, setOrder] = useState(true);
    const [handle, setHandle] = useState("0")
    const [pageCount, setPageCount] = useState(1)
    const [limitCount, setLimitCount] = useState(10)

    console.log("totalTodosCount", totalTodosCount);
    console.log("totalTodosPage", totalTodosPage);
    console.log("todos", todos);

    useEffect(() => {
        getList()
        return () => { };
    }, [sortData, pageCount])

    const getList = () => {
        let od = "";
        if (!order) {
            od = "-";
        }
        let url = `?sortBy=${od}${sortData}&page=${pageCount}&limit=${limitCount}`;
        dispatch(action.fetchTodos(url));
    }

    // const handleSort = (param) => {
    //     console.log("handle", handle);
    //     console.log(param);
    //     if (handle === "0") {
    //         setOrder(false)
    //         setHandle("1")
    //     } else {
    //         setOrder(true)
    //         setHandle("0")
    //     }
    //     setSortData(param)
    //     getList()
    //     return(param)
    // }

    const handleCheckedSort = () => {
        console.log("handle", handle);
        if (handle === "0") {
            setOrder(false)
            setHandle("1")
        } else {
            setOrder(true)
            setHandle("0")
        }
        setSortData("checked")
        getList()
        console.log("Checked");
    }

    const handleTodoSort = () => {
        console.log("handle", handle);
        if (handle === "0") {
            setOrder(false)
            setHandle("1")
        } else {
            setOrder(true)
            setHandle("0")
        }
        setSortData("content")
        getList()
        console.log("content");
    }

    const handleDateSort = () => {
        console.log("handle", handle);
        if (handle === "0") {
            setOrder(false)
            setHandle("1")
        } else {
            setOrder(true)
            setHandle("0")
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
        );
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
                            <Paginations items={items} />
                        </td>
                    </tr>
                </tfoot>
            </table>
        </div>
    )
}

export default TodosList