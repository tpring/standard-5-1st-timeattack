import { useState } from 'react';

const TodoForm = ({ todos, setTodos }) => {
    const [title, setTitle] = useState('');
    const [contents, setContents] = useState('');

    const addTodo = (e) => {
        e.preventDefault();
        if (!title || !contents) {
            alert('제목과 내용을 채워주세요');
            return;
        }
        setTodos([...todos, { id: uuidv4(), title: title, contents: contents, isDone: false }]);
        setTitle('');
        setContents('');
    };

    return (
        <div onSubmit={addTodo}>
            <form>
                <input type="text" placeholder="제목" value={title} onChange={(e) => setTitle(e.target.value)} />
                <input type="text" placeholder="내용" value={contents} onChange={(e) => setContents(e.target.value)} />
            </form>
            <button type="submit">추가</button>
        </div>
    );
};

export default TodoForm;
