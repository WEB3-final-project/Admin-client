import React from 'react';
import { Edit, SimpleForm, TextInput } from 'react-admin';

export const SpeakerEdit = () => (
  <Edit title="Modifier le profil Intervenant">
    <SimpleForm>
      <TextInput source="full_name" label="Nom Complet" fullWidth />
      <TextInput source="email" label="Adresse Email" fullWidth />
      <TextInput
        source="photo_url"
        label="URL / Chemin de la photo"
        fullWidth
      />
      <TextInput source="bio" label="Biographie" multiline fullWidth />
      <TextInput
        source="external_links"
        label="Liens Externes"
        fullWidth
      />
    </SimpleForm>
  </Edit>
);