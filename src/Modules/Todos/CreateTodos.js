import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import * as action from './_redux/TodosAction'

const CreateTodos = () => {

    const [addTodo, setAddTodo] = useState("")
    const [validateAddTodo, setValidateAddTodo] = useState()
    const dispatch = useDispatch();

    const validateTodoTaxtBox = (todoval) => {
        // eslint-disable-next-line
        if (todoval.length == "") {
            setValidateAddTodo("Plesae enter TODO")

        } else {
            setValidateAddTodo("");
        }
    }

    const handleCreateTask = () => {
        // eslint-disable-next-line
        if (validateAddTodo == "") {
            let content = addTodo;
            let checked = "false";
            let data = { content, checked };
            dispatch(action.createTodos(data));
            setAddTodo("");
        } else {
            validateTodoTaxtBox(addTodo);
        }
    }

    return (
        <>
            <div className="container pt-5">
                <div className="row">
                    <div className="col-12 text-center">
                        <h2> Add ToDo Task </h2>
                    </div>
                </div>

                <form className="form">
                    <div className="row p-2 justify-content-center">
                        <div className="col-8">
                            <input
                                type="text" value={addTodo} onChange={(e) => {
                                    setAddTodo(e.target.value.trimStart())
                                    validateTodoTaxtBox(e.target.value.trimStart())
                                }} className=" w-100 form-control" placeholder="Add ToDo" />
                            {// eslint-disable-next-line
                                validateAddTodo == "" ? null :
                                    <p style={{ color: "red" }}>{validateAddTodo}</p>
                            }
                        </div>
                    </div>
                    <div className="row p-2 justify-content-center">
                        <div className="col-2 text-center">
                            <button type="button" className="btn btn-primary btn-border-radius w-75 " onClick={handleCreateTask} >
                                Submit
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default CreateTodos