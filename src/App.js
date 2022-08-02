import './App.scss';

import { Provider } from 'react-redux';
import store from './redux/store'

import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from './Routes';

import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

import { clearCookie } from './utils/cookieUtils';

const ACCESS_TOKEN = "TodoAccessToken";


function App() {

  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="app-wrapper">
          <div className="app-content">
            <ToastContainer />
            <AppRoutes />
          </div>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
