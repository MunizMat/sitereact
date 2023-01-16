import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MyNav } from './components/nav/index';
import { MyRoutes } from './routes/index';
import { BrowserRouter } from "react-router-dom";
import GlobalStyles from './styles/GlobalStyles';



function App() {
  return (
    <BrowserRouter>
      <MyNav />
      <MyRoutes />
      <GlobalStyles />
    </BrowserRouter>
  );
}

export default App;
