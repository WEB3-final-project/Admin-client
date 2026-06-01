import { Admin, Resource, CustomRoutes } from 'react-admin';
import { Route } from 'react-router-dom';
import jsonServerProvider from 'ra-data-json-server';

import { authProvider } from './providers/authProvider';
import { CustomLogin } from './components/login';
import { SignUp } from './components/signUp';
const API_URL = import.meta.env.VITE_API_URL;
const httpClient = (url, options = {}) => {
    if (!options.headers) {
        options.headers = new Headers({ Accept: 'application/json' });
    }
    const token = localStorage.getItem('access_token');
    if (token) {
        options.headers.set('Authorization', `Bearer ${token}`);
    }
    options.credentials = 'include';
    return fetchUtils.fetchJson(url, options);
};

const dataProvider = jsonServerProvider(API_URL, httpClient);

const App = () => (
    <Admin 
        authProvider={authProvider} 
        dataProvider={dataProvider}
        loginPage={CustomLogin}
    >
        <CustomRoutes noLayout>
            <Route path="/signup" element={<SignUp />} />
        </CustomRoutes>

    </Admin>
);

export default App;