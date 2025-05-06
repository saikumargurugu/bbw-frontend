// components/Button.tsx
import React from "react";
import { Button as MuiButton } from "@mui/material";

export default function Button({ children, onClick, className }: { children: React.ReactNode; onClick: () => void; className?: string }) {
  return (
    <MuiButton variant="contained" color="primary" className={className} onClick={onClick}>
      {children}
    </MuiButton>
  );
}
