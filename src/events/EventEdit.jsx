import React from 'react';
import { Edit, SimpleForm, TextInput, DateTimeInput } from 'react-admin';

const transformEventData = (data) => ({
  ...data,
  start_date: data.start_date
    ? new Date(data.start_date).toISOString()
    : new Date().toISOString(),
  end_date: data.end_date
    ? new Date(data.end_date).toISOString()
    : new Date().toISOString(),
});

export const EventEdit = () => (
  <Edit title="Modifier l'Événement" transform={transformEventData}>
    <SimpleForm>
      <TextInput
        source="title"
        label="Titre de l'événement"
        fullWidth
      />
      <TextInput
        source="description"
        label="Description"
        multiline
        fullWidth
      />
      <TextInput source="location" label="Lieu / Adresse" fullWidth />
      <DateTimeInput
        source="start_date"
        label="Date et Heure de début"
      />
      <DateTimeInput source="end_date" label="Date et Heure de fin" />
    </SimpleForm>
  </Edit>
);