// components/Modal.tsx
import React from "react";
import { Dialog, DialogActions, DialogContent, DialogTitle, Button } from "@mui/material";
import { sportySectionTheme } from '../styles/sportyTheme';

export default function Modal({ open, onClose, title, content }: { open: boolean; onClose: () => void; title: string; content: string }) {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle style={{ fontFamily: sportySectionTheme.font.title.style.fontFamily }}>
        {title}
      </DialogTitle>
      <DialogContent style={{ fontFamily: sportySectionTheme.font.description.style.fontFamily }}>
        {content}
      </DialogContent>
      <DialogActions>
        <Button
          onClick={onClose}
          color="primary"
          style={{ fontFamily: sportySectionTheme.font.button.style.fontFamily }}
        >
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
}
