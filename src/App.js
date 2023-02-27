import FirstPage from './FirstPage';
import FirstPage2 from './FirstPage2';

// 1. import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react'


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <ChakraProvider>
          <FirstPage/>
          <FirstPage2/>
    </ChakraProvider>

       
      </header>
    </div>
  );
}

export default App;
