import React from 'react';
import { Create, SimpleForm, TextInput } from 'react-admin';

export const SpeakerCreate = () => (
  <Create redirect="list" title="Ajouter un Intervenant">
    <SimpleForm>
      <TextInput
        source="full_name"
        label="Nom Complet"
        fullWidth
        required
      />
      <TextInput
        source="email"
        label="Adresse Email"
        fullWidth
        required
      />
      <TextInput
        source="photo_url"
        label="Chemin de la photo (ex: /uploads/speaker1.jpg)"
        fullWidth
      />
      <TextInput
        source="bio"
        label="Biographie / Présentation"
        multiline
        fullWidth
      />
      <TextInput
        source="external_links"
        label="Liens Externes"
        fullWidth
      />
    </SimpleForm>
  </Create>
);