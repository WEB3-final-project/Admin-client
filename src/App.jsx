import { Admin, Resource, CustomRoutes } from 'react-admin';
import { Route } from 'react-router-dom';
import { authProvider } from './providers/authProvider';
import { SignUp } from './components/signUp';
import { dataProvider } from './providers/dataProvider';
import { AuditLogList } from './auditLogs/AuditLogList';
import { AuditLogShow } from './auditLogs/AuditLogShow';
import { LoginPage } from './auth/login';
import { SessionList } from './sessions/SessionList';
import { SessionShow } from './sessions/SessionsShow';
import { SessionCreate } from './sessions/SessionCreate';
import { SessionEdit } from './sessions/SessionEdit';
import { EventList } from './events/EventList';
import { EventShow } from './events/EventShow';
import { EventCreate } from './events/EventCreate';
import { EventEdit } from './events/EventEdit';
import { QuestionShow } from './questions/QuestionShow';
import { RoomList } from "./rooms/RoomList";
import { RoomCreate } from "./rooms/RoomCreate";
import { RoomShow } from './rooms/RoomsShow';
import { SpeakerList } from "./speakers/SpeakerList";
import { SpeakerCreate } from "./speakers/SpeakerCreate";
import { SpeakerEdit } from "./speakers/SpeakerEdit";
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
        <Resource
            name="events"
            list={EventList}
            show={EventShow}
            create={EventCreate}
            edit={EventEdit}
        />

        <Resource
            name="rooms"
            show={RoomShow}
            list={RoomList}
            create={RoomCreate}
        />

        <Resource
             name="sessions"
            list={SessionList}
            show={SessionShow}
            create={SessionCreate}
            edit={SessionEdit}
        />

        <Resource
            name="questions"
            show={QuestionShow}
        />
        
        <Resource
            name="speakers"
            list={SpeakerList}
            create={SpeakerCreate}
            edit={SpeakerEdit}
        />
    </Admin>
);

export default App;