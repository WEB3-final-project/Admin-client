import React from 'react';
import { Edit, SimpleForm, TextInput, ReferenceInput, SelectInput, ReferenceArrayInput, SelectArrayInput, DateTimeInput, NumberInput } from 'react-admin';

const transformSessionData = (data) => ({
  ...data,
  speaker_ids: data.speaker_ids || [],
  start_time: data.start_time
    ? new Date(data.start_time).toISOString()
    : new Date().toISOString(),
  end_time: data.end_time
    ? new Date(data.end_time).toISOString()
    : new Date().toISOString(),
  capacity:
    data.capacity !== undefined && data.capacity !== ''
      ? parseInt(data.capacity, 10)
      : null,
});

export const SessionEdit = () => (
  <Edit title="Modifier la Session" transform={transformSessionData}>
    <SimpleForm>
      <TextInput
        source="title"
        label="Titre de la session"
        fullWidth
      />
      <TextInput
        source="description"
        label="Description"
        multiline
        fullWidth
      />

      <ReferenceInput source="event_id" reference="events">
        <SelectInput optionText="title" label="Événement" fullWidth />
      </ReferenceInput>

      <ReferenceInput source="room_id" reference="rooms">
        <SelectInput optionText="name" label="Salle" fullWidth />
      </ReferenceInput>

      <ReferenceArrayInput source="speaker_ids" reference="speakers">
        <SelectArrayInput
          optionText="full_name"
          label="Intervenants (Speakers)"
          fullWidth
        />
      </ReferenceArrayInput>

      <DateTimeInput source="start_time" label="Heure de début" />
      <DateTimeInput source="end_time" label="Heure de fin" />
      <NumberInput source="capacity" label="Capacité maximum" />
    </SimpleForm>
  </Edit>
);