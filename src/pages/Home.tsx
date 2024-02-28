import styled from 'styled-components';
import List from '@/components/List';
import TodoInput from '@/components/TodoInput';

const Wrapper = styled.div``;
function Home() {
  return (
    <Wrapper>
      TODO LIST
      <TodoInput />
      <List />
    </Wrapper>
  );
}

export default Home;
