import { ChakraProvider } from '@chakra-ui/react'
import MainPage from './MainPage';


function App() {
  return (
    <ChakraProvider>
      <MainPage />
    </ChakraProvider>
  );
}

export default App;
