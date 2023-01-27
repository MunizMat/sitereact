import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MyNav } from './components/nav/index';
import { MyRoutes } from './routes/index';
import { Router } from "react-router-dom";
import history from './services/history';
import GlobalStyles from './styles/GlobalStyles';



function App() {
  return (
    <Router history={history}>
      <MyNav />
      <MyRoutes />
      <GlobalStyles />
    </Router>
  );
}

export default App;
