import { Show, SimpleShowLayout, TextField, DateField, NumberField, ReferenceField, ReferenceManyField, Datagrid, ShowButton } from "react-admin";
import { Typography, Box } from "@mui/material";

export const SessionShow = () => (
    <Show>
        <SimpleShowLayout>
            <Typography variant="h5">
                Détails de la Session
            </Typography>
            
            <TextField source="id" label="ID" />
            <TextField source="title" label="Titre"/>
            <TextField source="description" label="Description" emptyText="Aucune description" />
            
            <DateField source="start_time" label="Heure de début" showTime />
            <DateField source="end_time" label="Heure de fin" showTime />
            <NumberField source="capacity" label="Capacité maximale" emptyText="Illimitée" />

            <ReferenceField source="event_id" reference="events" label="Événement parent">
                <TextField source="title" />
            </ReferenceField>
            
            <ReferenceField source="room_id" reference="rooms" label="Salle assignée">
                <TextField source="name" />
            </ReferenceField>

            <Box>
                <Typography variant="h6">
                    Questions des participants
                </Typography>

            </Box>
        </SimpleShowLayout>
    </Show>
);
