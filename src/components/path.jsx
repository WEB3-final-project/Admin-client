export const getPath = (record) =>{
    switch (record.entity_type) {
        case "room":
            return `/rooms/${record.entity_id}/show`;

        case "session":
            return `/sessions/${record.entity_id}/show`;

        case "event":
            return `/events/${record.entity_id}/show`;

        case "question":
            return `/questions/${record.entity_id}/show`;

        case "user":
            return `/users/${record.entity_id}/show`;

        default:
            return "#";
    }
}