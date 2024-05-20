import React from 'react';

const TodoItem = ({ todos }) => {
    return (
        <div>
            {todos.map((todo) => (
                <li key={todo.id}>
                    <h2>{todo.title}</h2>
                    <p>{todo.content}</p>
                    <p>{todo.isDone ? '완료' : '미완료'}</p>
                </li>
            ))}
            ;
        </div>
    );
};

export default TodoItem;
