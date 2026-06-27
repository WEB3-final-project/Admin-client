import React from 'react';
import { 
  List, 
  Datagrid, 
  TextField, 
  SimpleForm, 
  TextInput, 
  Create 
} from 'react-admin';

export const RoomList = () => (
  <List pagination={false} title="Liste des Salles">
    <Datagrid bulkActionButtons={false}>
      <TextField source="id" />
      <TextField source="name" label="Nom de la salle" />
    </Datagrid>
  </List>
);

export const RoomCreate = () => (
  <Create title="Ajouter une Salle">
    <SimpleForm>
      <TextInput
        source="name"
        label="Nom de la salle"
        fullWidth
        validate={[]}
      />
    </SimpleForm>
  </Create>
);