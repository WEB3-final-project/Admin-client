import React from 'react';
import { List, Datagrid, TextField, ImageField, EmailField } from 'react-admin';

export const SpeakerList = () => (
  <List pagination={false} title="Intervenants (Speakers)">
    <Datagrid rowClick="edit">
      <ImageField
        source="photo_url"
        label="Avatar"
        sx={{
          '& img': {
            width: 45,
            height: 45,
            borderRadius: '50%',
            objectFit: 'cover',
          },
        }}
      />
      <TextField source="full_name" label="Nom Complet" />
      <EmailField source="email" label="Email" />
      <TextField source="bio" label="Biographie" />
    </Datagrid>
  </List>
);