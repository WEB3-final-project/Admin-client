import { Admin, Resource, CustomRoutes } from 'react-admin';
import { Route } from 'react-router-dom';
import { authProvider } from './providers/authProvider';
import { SignUp } from './components/signUp';
import { dataProvider } from './providers/dataProvider';

const App = () => (
    <Admin
        authProvider={authProvider}
        dataProvider={dataProvider}
    >
        <CustomRoutes noLayout>
            <Route path="/signup" element={<SignUp />} />
        </CustomRoutes>
        <Resource
            name="audit_log"
            list={InternList}
            create={InternCreate}
            edit={InternEdit}
            show={InternShow}
        />

    </Admin>
);

export default App;