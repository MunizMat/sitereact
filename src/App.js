import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MyNav } from './components/nav/index';
import store, { persistor } from "./store/index";
import { Provider } from "react-redux";
import { MyRoutes } from './routes/index';
import {  BrowserRouter } from "react-router-dom";
import GlobalStyles from './styles/GlobalStyles';
import { PersistGate } from 'redux-persist/integration/react';



function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <MyNav />
          <MyRoutes />
          <GlobalStyles />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
