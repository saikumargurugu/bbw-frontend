// components/Button.tsx
import React from "react";
import { Button as MuiButton } from "@mui/material";

export default function Button({ children, onClick }: { children: React.ReactNode; onClick: () => void }) {
  return (
    <MuiButton variant="contained" color="primary" onClick={onClick}>
      {children}
    </MuiButton>
  );
}
