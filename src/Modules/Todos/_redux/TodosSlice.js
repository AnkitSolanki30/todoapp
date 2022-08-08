import { createSlice } from "@reduxjs/toolkit";

const initialTodoState = {
    todos: [],
    totalCount: 0,
    singleEntity: null,
    totalPage:0
};

const TodosSlice = createSlice({
    name: "Todos",
    initialState: initialTodoState,
    reducers: {
        //all Todos 
        setTodos: (state, actions) => {
            const { todos, totalCount, totalPage } = actions.payload;
            state.todos = todos;
            state.totalCount = totalCount;
            state.totalPage = totalPage;
        },

        //all Todos Other Page
        setOtherTodos: (state, actions) => {
            const { todos } = actions.payload;
            state.todos = todos;
        },

        //created todo response
        createdResponse:(state, actions) => {
            const { createdTodos } = actions.payload;
            state.singleEntity = createdTodos;
            console.log("payload Created TODOS",actions.payload)
        }
    }
})

export default TodosSlice;