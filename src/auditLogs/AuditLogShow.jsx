import {
    Show,
    SimpleShowLayout,
    TextField,
    DateField,
    FunctionField,
} from "react-admin";

export const AuditLogShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="id" />

            <FunctionField
                label="Utilisateur"
                render={(record) =>
                    record.user?.full_name
                }
            />

            <TextField source="action" />

            <TextField source="entity_type" />

            <TextField source="entity_id" />

            <DateField
                source="created_at"
                showTime
            />

            <FunctionField
                label="Anciennes données"
                render={(record) =>
                    JSON.stringify(
                        record.old_data,
                        null,
                        2
                    )
                }
            />

            <FunctionField
                label="Nouvelles données"
                render={(record) =>
                    JSON.stringify(
                        record.new_data,
                        null,
                        2
                    )
                }
            />
        </SimpleShowLayout>
    </Show>
);