import React from 'react'
import CreateTodos from './CreateTodos'
import TodosList from './TodosList'

const TodosHome = () => {
    return (
        <>
            <CreateTodos />
            <TodosList />
        </>
    )
}

export default TodosHome