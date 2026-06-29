import React from 'react';
import { Create, SimpleForm, TextInput, ReferenceInput, SelectInput, ReferenceArrayInput, SelectArrayInput, DateTimeInput, NumberInput } from 'react-admin';

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

export const SessionCreate = () => (
  <Create redirect="list" title="Créer une Session" transform={transformSessionData}>
    <SimpleForm>
      <TextInput
        source="title"
        label="Titre de la session"
        fullWidth
        required
      />
      <TextInput
        source="description"
        label="Description"
        multiline
        fullWidth
      />

      <ReferenceInput source="event_id" reference="events">
        <SelectInput
          optionText="title"
          label="Associer à l'événement"
          fullWidth
          required
        />
      </ReferenceInput>

      <ReferenceInput source="room_id" reference="rooms">
        <SelectInput
          optionText="name"
          label="Attribuer une salle"
          fullWidth
          required
        />
      </ReferenceInput>

      <ReferenceArrayInput source="speaker_ids" reference="speakers">
        <SelectArrayInput
          optionText="full_name"
          label="Intervenants (Speakers)"
          fullWidth
        />
      </ReferenceArrayInput>

      <DateTimeInput source="start_time" label="Heure de début" required />
      <DateTimeInput source="end_time" label="Heure de fin" required />
      <NumberInput source="capacity" label="Capacité maximum" />
    </SimpleForm>
  </Create>
);