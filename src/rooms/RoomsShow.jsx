import { Show, SimpleShowLayout, TextField, ReferenceManyField, Datagrid, ShowButton, DateField } from "react-admin";
import { Typography, Box } from "@mui/material";

export const RoomShow = () => (
    <Show>
        <SimpleShowLayout>
            <Typography variant="h5">
                Détails de la Salle
            </Typography>
            
            <TextField source="id" label="ID" />
            <TextField source="name" label="Nom de la salle"/>

            <Box>
                <Typography variant="h6">
                    Sessions planifiées dans cette salle
                </Typography>
                <ReferenceManyField reference="sessions" target="room_id" label="">
                    <Datagrid bulkActionButtons={false}>
                        <TextField source="title" label="Session" />
                        <DateField source="start_time" label="Début" showTime />
                        <ShowButton />
                    </Datagrid>
                </ReferenceManyField>
            </Box>
        </SimpleShowLayout>
    </Show>
);
