import React from 'react';
import { Admin, Resource, CustomRoutes } from 'react-admin';
import { Route } from 'react-router-dom';
import { authProvider } from './providers/authProvider';
import { dataProvider } from './providers/dataProvider';
import { CustomLogin } from './components/login';
import { SignUp } from './components/signUp';
import { RoomList, RoomCreate } from './components/Rooms';
import { EventList } from './components/events/EventList';
import { EventCreate } from './components/events/EventCreate';
import { EventEdit } from './components/events/EventEdit';
import { SpeakerList } from './components/speakers/SpeakerList';
import { SpeakerCreate } from './components/speakers/SpeakerCreate';
import { SpeakerEdit } from './components/speakers/SpeakerEdit';
import { SessionList } from './components/sessions/SessionList';
import { SessionCreate } from './components/sessions/SessionCreate';
import { SessionEdit } from './components/sessions/SessionEdit';

const App = () => (
  <Admin
    authProvider={authProvider}
    dataProvider={dataProvider}
    loginPage={CustomLogin}
  >
    <CustomRoutes noLayout>
      <Route path="/signup" element={<SignUp />} />
    </CustomRoutes>

    <Resource
      name="events"
      list={EventList}
      create={EventCreate}
      edit={EventEdit}
      options={{ label: 'Événements' }}
    />
    <Resource
      name="speakers"
      list={SpeakerList}
      create={SpeakerCreate}
      edit={SpeakerEdit}
      options={{ label: 'Intervenants' }}
    />
    <Resource
      name="sessions"
      list={SessionList}
      create={SessionCreate}
      edit={SessionEdit}
      options={{ label: 'Sessions' }}
    />
    <Resource
      name="rooms"
      list={RoomList}
      create={RoomCreate}
      options={{ label: 'Salles' }}
    />
  </Admin>
);

export default App;