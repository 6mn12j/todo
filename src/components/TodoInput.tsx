import { useState } from 'react';
import styled from 'styled-components';
import useAppDispatch from '@/lib/hooks/useAppDispatch';
import { addTodo } from '@/store/slices/todoSlice';

const Wrapper = styled.div``;

function TodoInput() {
  const dispatch = useAppDispatch();
  const [title, setTitle] = useState('');

  const submitTodo = () => {
    dispatch(addTodo(title));
    setTitle('');
  };

  return (
    <Wrapper>
      <input
        value={title}
        onChange={(e) => setTitle(e.currentTarget.value)}
        type="text"
      />
      <button type="button" onClick={submitTodo}>
        ADD
      </button>
    </Wrapper>
  );
}

export default TodoInput;
