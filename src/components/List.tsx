import useAppDispatch from '@/lib/hooks/useAppDispatch';
import useAppSelector from '@/lib/hooks/useAppSelector';
import { removeTodo, toggleTodo } from '@/store/slices/todoSlice';

function List() {
  const todos = useAppSelector((state) => state.todos.todos);
  const dispatch = useAppDispatch();

  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id}>
          <span>{todo.title}</span>
          <button type="button" onClick={() => dispatch(removeTodo(todo.id))}>
            REMOVE
          </button>
          <button type="button" onClick={() => dispatch(toggleTodo(todo.id))}>
            {todo.done ? '✅' : '❌'}
          </button>
        </div>
      ))}
    </div>
  );
}

export default List;
