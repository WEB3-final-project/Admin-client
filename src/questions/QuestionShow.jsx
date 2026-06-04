import { SimpleShowLayout, TextField,NumberField,DateField,Show } from "react-admin";
import { Typography } from "@mui/material";
export const QuestionShow = () => (
    <Show>
        <SimpleShowLayout>
            <Typography variant="h5">Détails de la Question</Typography>
            
            <TextField source="id" label="ID" />
            <TextField source="author_name" label="Auteur" defaultValue="Anonyme" />
            <TextField source="content" label="Contenu de la question"/>
            
            <NumberField source="upvotes" label="Nombre d'upvotes" />
            <DateField source="created_at" label="Date de création" showTime />

            <ReferenceField source="session_id" reference="sessions" label="Session concernée">
                <TextField source="title" />
            </ReferenceField>
        </SimpleShowLayout>
    </Show>
);
