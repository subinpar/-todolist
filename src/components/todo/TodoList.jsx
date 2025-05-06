import TodoItem from './TodoItem';
import { useMemo, useState } from 'react';

export default function TodoList({ todos, onToggleTodo, onDeleteTodo }) {
  const [isDone, setIsDone] = useState(false);

  const filteredTodos = useMemo(() => {
    return isDone ? todos.filter(todo => todo.done) : todos;
  }, [todos, isDone]);

  const { totalCount, doneCount } = useMemo(() => {
    const totalCount = todos.length;
    const doneCount = todos.filter(todo => todo.done).length;
    return { totalCount, doneCount };
  }, [todos]);

  return (
    <>
      <div>
        <input
          id="isDone"
          type="checkbox"
          checked={isDone}
          onChange={e => setIsDone(e.target.checked)}
        />
        <label htmlFor="isDone">
          완료된 항목 보기 ({doneCount}/{totalCount})
        </label>
      </div>
      <ul>
        {filteredTodos.map(item => (
          <li key={item.id}>
            <TodoItem
              item={item}
              onToggleTodo={onToggleTodo}
              onDeleteTodo={onDeleteTodo}
            />
          </li>
        ))}
      </ul>
    </>
  );
}
