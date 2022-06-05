// Style Files
import 'antd/dist/antd.min.css';

import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter } from 'react-router-dom';

// Layout
import DirLayout from './components/DirLayout';
import AppNavbar from './layout/Navbar/AppNavbar';
import AppFooter from './layout/Footer/AppFooter';

import { Provider } from 'react-redux';
import { persistor, store } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { HelmetProvider } from 'react-helmet-async';

import Routers from './routers/Routers';

import './sass/main.scss';

function App() {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <HelmetProvider>
                        <DirLayout>
                            <AppNavbar />
                            <Routers />
                            <AppFooter />
                        </DirLayout>
                    </HelmetProvider>
                </PersistGate>
            </Provider>
        </BrowserRouter>
    );
}

export default App;
