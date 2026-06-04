import {
    List,
    Datagrid,
    TextField,
    DateField,
    FunctionField,
    TextInput,
    SelectInput,
} from "react-admin";
import { actionTypes } from "../types/action";
const auditFilters = [
    <TextInput
        source="user_full_name"
        label="Nom de l'utilisateur"
        alwaysOn
    />,
    <SelectInput
        source="action"
        choices={[
            { id: actionTypes.create, name: "Create" },
            { id: actionTypes.update, name: "Update" },
            { id: actionTypes.delete, name: "Delete" },
        ]}
    />,
];
export const AuditLogList = () => (
    <List filters={auditFilters}>
        <Datagrid rowClick="show">
            <TextField source="id" />

            <FunctionField
                label="Utilisateur"
                render={(record) =>
                    record.user?.full_name || "-"
                }
            />

            <TextField source="action" />

            <TextField source="entity_type" />

            <TextField source="entity_id" />

            <DateField
                source="created_at"
                showTime
            />
        </Datagrid>
    </List>
);