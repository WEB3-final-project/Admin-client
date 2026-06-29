import { Admin, CustomRoutes } from 'react-admin';
import { Route } from 'react-router-dom';

import { authProvider } from './providers/authProvider';
import { dataProvider } from './providers/dataProvider';
import { theme } from './theme';
import { CustomLogin } from './components/login';
import { SignUp } from './components/signUp';

const App = () => (
    <Admin
        authProvider={authProvider}
        dataProvider={dataProvider}
        loginPage={CustomLogin}
        theme={theme}
        requireAuth
    >
        <CustomRoutes noLayout>
            <Route path="/signup" element={<SignUp />} />
        </CustomRoutes>
    </Admin>
);

export default App;