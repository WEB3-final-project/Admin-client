import { Card, CardContent, Typography } from "@mui/material";

export const EntityPreview = ({ entityType, data }) => {
    if (!data) return null;

    switch (entityType) {
        case "room":
            return (
                <Card>
                    <CardContent>
                        <Typography>
                            <b>Nom de la salle :</b> {data.name}
                        </Typography>
                    </CardContent>
                </Card>
            );

        case "event":
            return (
                <Card>
                    <CardContent>
                        <Typography>
                            <b>Titre :</b> {data.title}
                        </Typography>
                        <Typography>
                            <b>Description :</b> {data.description}
                        </Typography>
                        <Typography>
                            <b>Date de début :</b> {data.start_date}
                        </Typography>
                        <Typography>
                            <b>Date de fin :</b> {data.end_date}
                        </Typography>
                        <Typography>
                            <b>Lieu :</b> {data.location}
                        </Typography>
                    </CardContent>
                </Card>
            );

        case "question":
            return (
                <Card>
                    <CardContent>
                        <Typography>
                            <b>Contenu de la question :</b> {data.content}
                        </Typography>
                    </CardContent>
                </Card>
            );

        case "session":
            return (
                <Card>
                    <CardContent>
                        <Typography>
                            <b>Titre :</b> {data.title}
                        </Typography>
                        <Typography>
                            <b>Description :</b> {data.description}
                        </Typography>
                        <Typography>
                            <b>Heure de début :</b> {data.start_time}
                        </Typography>
                        <Typography>
                            <b>Heure de fin :</b> {data.end_time}
                        </Typography>
                        <Typography>
                            <b>Capacité :</b> {data.capacity}
                        </Typography>
                        <Typography>
                            <b>ID de la Salle :</b> {data.room_id}
                        </Typography>
                        <Typography>
                            <b>ID de l'Événement :</b> {data.event_id}
                        </Typography>
                    </CardContent>
                </Card>
            );

        default:
            return null;
    }
}