import logo from './logo.svg';
import './App.css';
import './scss/custom.scss';

import 'bootstrap';

import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from './routers/AppRouter';
import { MyContextProvider } from './contexts/MyContext';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';


function App() {
  library.add(fab, far, fas);
  return (
    <MyContextProvider>
      <Router forceRefresh={!supportsHistory}>
        <AppRouter />
      </Router>
    </MyContextProvider>
  );
}

const supportsHistory = 'pushState' in window.history

export default App;
