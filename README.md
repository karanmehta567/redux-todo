## Redux To-Do Application

This is a simple To-Do application built using Redux for state management and Tailwind CSS for styling. It demonstrates the use of Redux slices, centralized store management, and dynamic component updates.
Features

    Add new tasks.
    Update existing tasks.
    Mark tasks as completed.
    Delete tasks.

## Project Structure
1. todoSlice.js

The todoSlice is responsible for managing the state of the To-Do list. It includes:

    State: Maintains the list of tasks, each with an id and text.
    Reducers:
        addTodo: Adds a new task to the list.
        updateTodo: Updates the description or status of an existing task.
        deleteTodo: Removes a task from the list.

2. store.js

The store.js file sets up the Redux store, which acts as the central state container for the application. It combines all slices (in this case, the todoSlice) using configureStore from Redux Toolkit, ensuring the application's state is managed efficiently.
3. Components
a. AddTodoForm

    This component allows users to add a new task.
    It consists of an input field for the task description and a button to submit.
    On submission, the task is dispatched to the Redux store using the addTodo action.

b. UpdateComponent

    This component is used for editing an existing task.
    It renders the current description in an editable field.
    On save, it dispatches the updateTodo action to the store, updating the task in the state.

## Styling

Tailwind CSS has been used for styling the application, ensuring a clean and responsive user interface.
How to Run the Application

    Clone the repository:

git clone https://github.com/karanmehta567/redux-todo
cd redux-todo-app

Install dependencies:

npm install

Start the development server:

npm start

Open the application in your browser:

    http://localhost:5173

## Future Enhancements

    Implement filtering and sorting of tasks.
    Add user authentication for personalized To-Do lists.
    Introduce animations for a smoother user experience.
