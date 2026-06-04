import { Show, SimpleShowLayout, TextField, DateField, ReferenceManyField, Datagrid, ShowButton } from "react-admin";
import { Typography, Box } from "@mui/material";

export const EventShow = () => (
    <Show>
        <SimpleShowLayout>
            <Typography variant="h5">
                Détails de l'Événement
            </Typography>
            
            <TextField source="id" label="ID" />
            <TextField source="title" label="Titre" />
            <TextField source="description" label="Description" emptyText="-" />
            
            <DateField source="start_date" label="Date de début" locales="fr-FR" />
            <DateField source="end_date" label="Date de fin" locales="fr-FR" />
            <TextField source="location" label="Lieu" emptyText="En ligne / Non défini" />

            <Box>
                <Typography variant="h6">
                    Sessions au programme
                </Typography>
                <ReferenceManyField reference="sessions" target="event_id" label="">
                    <Datagrid bulkActionButtons={false}>
                        <TextField source="title" label="Titre de la session" />
                        <DateField source="start_time" label="Début" showTime />
                        <DateField source="end_time" label="Fin" showTime />
                        <ShowButton />
                    </Datagrid>
                </ReferenceManyField>
            </Box>
        </SimpleShowLayout>
    </Show>
);
