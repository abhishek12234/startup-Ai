import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import store, { persistor } from './store';
import { useEffect, useRef } from 'react';
import Theme from '@/components/template/Theme';
import Layout from '@/components/layouts';
import mockServer from './mock';
import appConfig from '@/configs/app.config';
import './locales';
import 'regenerator-runtime/runtime'
import CustomCursor from './views/CustomCursor';
import useResponsive from './utils/hooks/useResponsive';


// Initialize containerRef properly
const environment = process.env.NODE_ENV;

/**
 * Set enableMock(Default false) to true at configs/app.config.js
 * If you wish to enable mock api
 */
if (environment !== 'production' && appConfig.enableMock) {
    mockServer({ environment });
}


function App() {
    const { larger } = useResponsive();

    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <BrowserRouter>
                    <Theme>
                        
                        <Layout />
                        {larger.lg === true && <CustomCursor />}
                    </Theme>
                </BrowserRouter>
            </PersistGate>
        </Provider>
    );
}

export default App;
