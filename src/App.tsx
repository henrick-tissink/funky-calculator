import './App.scss';
import { StrictMode } from 'react';
import { render } from 'react-dom';
import Calculator from './components/Calculator'
import { MantineProvider, Center } from '@mantine/core';

const App = () => {
  return (
    <div className="App">
      <Center>
        <Calculator />
      </Center>
    </div>
  );
}

render(
  <MantineProvider theme={{ colorScheme: 'dark' }}>
    <StrictMode>
      <App />
    </StrictMode>
  </MantineProvider>,
  document.getElementById("root")
);
