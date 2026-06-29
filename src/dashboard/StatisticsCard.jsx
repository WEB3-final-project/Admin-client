import { Card, CardContent, Typography } from "@mui/material";

export const StatisticsCard = ({ title, value }) => {
    return (
        <Card sx={{ minWidth: 200 }}>
            <CardContent>
                <Typography
                    variant="subtitle2"
                    color="text.secondary"
                >
                    {title}
                </Typography>

                <Typography
                    variant="h4"
                    fontWeight="bold"
                >
                    {value}
                </Typography>
            </CardContent>
        </Card>
    );
};
