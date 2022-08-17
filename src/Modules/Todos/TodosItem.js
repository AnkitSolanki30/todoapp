import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import * as action from './_redux/TodosAction'
import moment from 'moment'

const TodosItem = (props) => {

    const [todo, setTodo] = useState(props.todo1.content)
    const [tik, setTik] = useState(props.todo1.checked)
    const [validateAddTodo, setValidateAddTodo] = useState()
    const [isEditing, setIsEditing] = useState(false)
    const dispatch = useDispatch();

    const handleChecked = () => {
        let content = todo;
        if (tik) {
            let checked = "false";
            let data = { content, checked };
            dispatch(action.editTodos(data, props.todo1._id));
            setTik(!tik);
        } else {
            let checked = "true";
            let data = { content, checked };
            dispatch(action.editTodos(data, props.todo1._id));
            setTik(!tik);
        }
    };

    const setEditingState = (isEditing) => {
        setIsEditing(isEditing);
    };

    const validateTodoTaxtBox = (todoval) => {
        // eslint-disable-next-line
        if (todoval.length == "") {
            setValidateAddTodo("Plesae enter TODO")

        } else {
            setValidateAddTodo("");
        }
    }

    const newTodoAfterDelete = (id) => {
        const rows = [...todo]
        const newTodo = rows.filter((todos) => { return todos._id !== id })
        setTodo(newTodo)
    }

    const handleDelete = (id) => {
        newTodoAfterDelete(id)
        dispatch(action.deleteTodos(id));
        props.onDelete();
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // eslint-disable-next-line
        if (validateAddTodo == "") {
            let content = todo;
            let checked = tik;
            let data = { content, checked };
            dispatch(action.editTodos(data, props.todo1._id));
            setIsEditing(false);
            // eslint-disable-next-line
        } else if (todo == "") {
            validateTodoTaxtBox(todo);
        } else {
            validateTodoTaxtBox(todo);
        }
    };

    const handleCancel = () => {
        setEditingState(false)
        setTodo(props.todo1.content);
    };

    return (
        <tr>
            {isEditing ? (
                <>
                    <td>
                        <input type='checkbox' onChange={handleChecked} checked={tik} />
                    </td>
                    <td>
                        <form onSubmit={handleSubmit}>
                            <div className="row">
                                <div className="col-8">
                                    <input
                                        type="text" value={todo} onChange={(e) => {
                                            setTodo(e.target.value.trimStart())
                                            validateTodoTaxtBox(e.target.value.trimStart())
                                        }} className=" w-100 form-control" placeholder="Add ToDo" />
                                    {// eslint-disable-next-line
                                        validateAddTodo == "" ? null :
                                            <p style={{ color: "red" }}>{validateAddTodo}</p>
                                    }
                                </div>
                            </div>
                        </form>
                    </td>
                    <td>
                        {moment(props.todo1.createdAt).utc().format('YYYY-MM-DD')}
                    </td>
                    <td>
                        <button className='btn btn-warning mx-2' onClick={handleSubmit} type='submit'>Save</button>
                        <button className='btn btn-secondary' onClick={handleCancel} type='button'>Cancel</button>
                    </td></>
            ) : (
                <>
                    <td>
                        <input type='checkbox' className='pointer' onChange={handleChecked} checked={tik} />
                    </td>
                    <td style={{ textAlign: "left" }}>
                        <span onClick={handleChecked} className={`${tik ? 'completed' : 'not-completed'} pointer`}>
                            {todo ?? ""}
                        </span>
                    </td>
                    <td>
                        {moment(props.todo1.createdAt).utc().format('YYYY-MM-DD')}
                    </td>
                    <td className='mb-2'>
                        <button className='btn btn-success m-1' onClick={() => { setEditingState(true) }}>Edit</button>
                        <button className='btn btn-danger' onClick={() => handleDelete(props.todo1._id)}>Delete</button>
                    </td>
                </>
            )}
        </tr>
    )
}

export default TodosItem