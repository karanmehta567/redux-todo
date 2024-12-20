import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [
        { id: nanoid(), text: 'Get up at 6' },
        { id: nanoid(), text: 'Sleep at 11' },
    ],
    toggleForm: true,
    todoUpdate: {}
}
export const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        todoAdded: (state, action) => {
            state.todos.push(action.payload);
        },
        todoCleared: (state) => {
            state.todos = [];
        },
        todoDeleted: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
        toggleInputForm: (state, action) => {
            state.toggleForm = !state.toggleForm;
            state.todoUpdate = { ...state.todoUpdate, ...action.payload }
        },
        todoUpdate: (state, action) => {
            const todoupdated = state.todos.find((todo) => todo.id === action.payload.id);
            todoupdated.text = action.payload.text;
            state.toggleForm = !state.toggleForm;
        }
    }
})
export const { todoAdded, todoCleared, todoDeleted, toggleInputForm, todoUpdate } = todoSlice.actions;
export default todoSlice.reducer;