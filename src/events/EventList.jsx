import React from 'react';
import { List, Datagrid, TextField, DateField } from 'react-admin';

export const EventList = () => (
  <List pagination={false} title="Événements">
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="title" label="Titre" />
      <TextField source="location" label="Lieu" />
      <DateField source="start_date" label="Début" showTime />
      <DateField source="end_date" label="Fin" showTime />
    </Datagrid>
  </List>
);