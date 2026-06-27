import React from 'react';
import { 
  List, 
  Datagrid, 
  TextField, 
  ReferenceField, 
  DateField, 
  NumberField, 
  BooleanField,
  ReferenceInput, 
  SelectInput     
} from 'react-admin';

const sessionFilters = [
  <ReferenceInput 
    source="room_id" 
    reference="rooms" 
    label="Filtrer par Salle"
    alwaysOn 
  >
    <SelectInput optionText="name" />
  </ReferenceInput>
];

export const SessionList = () => (
  
  <List 
    pagination={false} 
    title="Sessions des événements" 
    filters={sessionFilters}
  >
    <Datagrid rowClick="edit">
      <TextField source="title" label="Titre" />
      <ReferenceField
        source="event_id"
        reference="events"
        label="Événement"
        emptyText="-"
      >
        <TextField source="title" />
      </ReferenceField>
      <ReferenceField
        source="room_id"
        reference="rooms"
        label="Salle"
        emptyText="-"
      >
        <TextField source="name" />
      </ReferenceField>
      <DateField source="start_time" label="Début" showTime />
      <DateField source="end_time" label="Fin" showTime />
      <NumberField
        source="capacity"
        label="Capacité"
        emptyText="Illimité"
      />
      <BooleanField source="is_live" label="En Direct" />
    </Datagrid>
  </List>
);