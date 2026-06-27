import React from 'react';
import { Create, SimpleForm, TextInput, DateTimeInput } from 'react-admin';

const transformEventData = (data) => ({
  ...data,
  start_date: data.start_date
    ? new Date(data.start_date).toISOString()
    : new Date().toISOString(),
  end_date: data.end_date
    ? new Date(data.end_date).toISOString()
    : new Date().toISOString(),
});

export const EventCreate = () => (
  <Create redirect="list" title="Créer un Événement" transform={transformEventData}>
    <SimpleForm>
      <TextInput
        source="title"
        label="Titre de l'événement"
        fullWidth
        required
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
        required
      />
      <DateTimeInput
        source="end_date"
        label="Date et Heure de fin"
        required
      />
    </SimpleForm>
  </Create>
);