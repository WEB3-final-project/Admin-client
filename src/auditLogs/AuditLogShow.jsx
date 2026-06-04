import {
    Show,
    SimpleShowLayout,
    TextField,
    DateField,
    FunctionField,
} from "react-admin";
import { Link } from "react-router-dom";
import { EntityPreview } from "../components/entityPreview";
import { getPath } from "../components/path";
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
                render={(record) => (
                    <EntityPreview
                        entityType={record.entity_type}
                        data={record.old_data}
                    />
                )}
            />

            <FunctionField
                render={(record) => {
                    if (record.action === "delete") {
                        return "Ressource supprimée";
                    }

                    return (
                        <Link to={getPath(record)}>
                            Voir la ressource
                        </Link>
                    );
                }}
            />

        </SimpleShowLayout>
    </Show>
);