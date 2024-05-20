import { useState } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

const App = () => {
    const [todos, setTodos] = useState([{ id: 1, title: '12', contents: '23', isDone: false }]);

    return (
        <div>
            <TodoForm todos={todos} setTodos={setTodos} />
            <TodoList todos={todos} />
        </div>
    );
};

export default App;
