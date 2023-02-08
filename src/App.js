import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MyNav } from './components/nav/index';
import store from "./store/index";
import { Provider } from "react-redux";
import { MyRoutes } from './routes/index';
import { Router, BrowserRouter } from "react-router-dom";
import history from './services/history';
import GlobalStyles from './styles/GlobalStyles';



function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <MyNav />
        <MyRoutes />
        <GlobalStyles />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
