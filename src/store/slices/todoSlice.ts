import type { Todo } from '../../types/todo';
import { type PayloadAction, createSlice } from '@reduxjs/toolkit';

export const initialTodoState: Todo = {
  id: new Date().getTime().toString(),
  title: '제목을 입력해주세요.',
  done: false,
};

const initialState = {
  todos: [initialTodoState] as Todo[],
};

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      const id = new Date().getTime().toString();
      state.todos.push({ id, title: action.payload, done: false });
    },
    removeTodo: (state, action: PayloadAction<string>) => {
      const updatedTodos = state.todos.filter(
        (todo) => todo.id !== action.payload
      );
      state.todos = updatedTodos;
    },
    toggleTodo: (state, action: PayloadAction<string>) => {
      const todo = state.todos.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.done = !todo.done;
      }
    },
  },
});

export const { addTodo, removeTodo, toggleTodo } = todoSlice.actions;
export default todoSlice.reducer;
