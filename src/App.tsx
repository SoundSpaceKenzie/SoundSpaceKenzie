import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Rout from './Routes';
import { GlobalStyle } from './styles/GlobalStyle';

function App() {
  return (
    <>
      <GlobalStyle />
      <ToastContainer />
      <Rout />
    </>
  );
}

export default App;