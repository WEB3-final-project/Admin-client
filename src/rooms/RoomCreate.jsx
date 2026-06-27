import React from "react";
import { Create, SimpleForm, TextInput } from "react-admin";

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