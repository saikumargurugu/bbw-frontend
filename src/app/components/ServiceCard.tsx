// components/ServiceCard.tsx
import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import { sportySectionTheme } from "@/app/styles/sportyTheme";

export default function ServiceCard({ title, description }: { title: string; description: string }) {
  return (
    <Card sx={{ maxWidth: 345, margin: "20px", boxShadow: 3 }}>
      <CardContent>
        <Typography variant="h6">{title}</Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        <button
          className={sportySectionTheme.sharpButton.className}
          style={sportySectionTheme.sharpButton.style}
        >
          Learn More
        </button>
      </CardContent>
    </Card>
  );
}
