import { useEffect, useState } from "react";
import { Box, Grid, Typography } from "@mui/material";
import { StatisticsCard } from "./StatisticsCard";

export const Dashboard = () => {

    const [stats, setStats] = useState({
        events: 0,
        sessions: 0,
        rooms: 0,
        speakers: 0,
        questions: 0
    });

    useEffect(() => {
      const token = localStorage.getItem("access_token");
  
      fetch("http://localhost:4000/api/stats", {
          headers: {
              Authorization: `Bearer ${token}`,
          },
          credentials: "include",
      })
          .then(async (res) => {
              if (!res.ok) {
                  throw new Error(await res.text());
              }
              return res.json();
          })
          .then((data) => setStats(data))
          .catch(console.error);
  
  }, []);

    return (

        <Box p={3}>

            <Typography
                variant="h4"
                mb={3}
            >
                Dashboard
            </Typography>

            <Grid container spacing={2}>

                <Grid item xs={12} md={4}>
                    <StatisticsCard
                        title="Events"
                        value={stats.events}
                    />
                </Grid>

                <Grid item xs={12} md={4}>
                    <StatisticsCard
                        title="Sessions"
                        value={stats.sessions}
                    />
                </Grid>

                <Grid item xs={12} md={4}>
                    <StatisticsCard
                        title="Rooms"
                        value={stats.rooms}
                    />
                </Grid>

                <Grid item xs={12} md={4}>
                    <StatisticsCard
                        title="Speakers"
                        value={stats.speakers}
                    />
                </Grid>

                <Grid item xs={12} md={4}>
                    <StatisticsCard
                        title="Questions"
                        value={stats.questions}
                    />
                </Grid>

            </Grid>

        </Box>

    );

};
