// components/ServiceCard.tsx
import React from "react";
import { Card, CardContent, Typography, Button } from "@mui/material";

export default function ServiceCard({ title, description }: { title: string; description: string }) {
  return (
    <Card sx={{ maxWidth: 345, margin: "20px", boxShadow: 3 }}>
      <CardContent>
        <Typography variant="h6">{title}</Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        <Button variant="contained" color="primary" sx={{ marginTop: 2 }}>
          Learn More
        </Button>
      </CardContent>
    </Card>
  );
}
