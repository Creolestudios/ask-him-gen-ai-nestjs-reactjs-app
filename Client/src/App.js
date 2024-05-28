import GlobalStyle from './globalStyles';
import './assets/font/font.css';
import { BrowserRouter } from 'react-router-dom';
import Router from './Router';

function App() {
  
  return (
    <>
    <BrowserRouter>
      <GlobalStyle />
      <Router />
    </BrowserRouter>
    </>
  );
}

export default App;
