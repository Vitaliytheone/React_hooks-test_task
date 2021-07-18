import React from 'react';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';

import PreviousBlock from './components/Previous';
import TodoList from './components/TodoList';
import AfterRender from './components/AfterRender';

function App() {
  return (
    <Box mt='12px'>
      <Container maxWidth='md'>
        <PreviousBlock />
        <TodoList />
        <AfterRender />
      </Container>
    </Box>
  );
}

export default App;
