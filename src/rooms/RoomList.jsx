import React from "react";
import { List, Datagrid, TextField } from "react-admin";

export const RoomList = () => (
    <List pagination={false} title="Liste des Salles">
        <Datagrid bulkActionButtons={false}>
            <TextField source="id" />
            <TextField source="name" label="Nom de la salle" />
        </Datagrid>
    </List>
);