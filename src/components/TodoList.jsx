import React from 'react';
import TodoItem from './components/TodoItem';

const TodoList = ({ todos }) => {
    return (
        <div>
            <TodoItem todos={todos} />
        </div>
    );
};

export default TodoList;
