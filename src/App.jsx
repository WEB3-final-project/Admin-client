import { Admin, Resource, CustomRoutes} from 'react-admin';
import { Route } from 'react-router-dom';
import { authProvider } from './providers/authProvider';
import { SignUp } from './components/signUp';
import { dataProvider } from './providers/dataProvider';
import { AuditLogList } from './auditLogs/AuditLogList';
import { AuditLogShow } from './auditLogs/AuditLogShow';
import { LoginPage } from './auth/login';
const App = () => (
    <Admin
        authProvider={authProvider}
        dataProvider={dataProvider}
        loginPage={LoginPage}
    >
        <CustomRoutes noLayout>
            <Route path="/signup" element={<SignUp />} />
        </CustomRoutes>
        <Resource
            name="audit-logs"
            list={AuditLogList}
            show={AuditLogShow}
        />

    </Admin>
);

export default App;