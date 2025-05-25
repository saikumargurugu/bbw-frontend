import React, { useRef } from "react";
import { Button, Typography } from "@mui/material";
import UploadFileIcon from "@mui/icons-material/UploadFile";

interface FileInputProps {
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  accept?: string;
}

const FileInput: React.FC<FileInputProps> = ({ name, onChange, accept = "image/*" }) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click(); // Trigger the hidden file input
    }
  };

  return (
    <div style={{ marginTop: "16px", display: "flex", flexDirection: "column", alignItems: "center" }}>
      <input
        type="file"
        name={name}
        accept={accept}
        onChange={onChange}
        ref={fileInputRef}
        style={{ display: "none" }} // Hide the default file input
      />
      <Button
        variant="contained"
        color="primary"
        startIcon={<UploadFileIcon />}
        onClick={handleButtonClick}
        style={{ marginBottom: "8px" }}
      >
        Upload File
      </Button>
      <Typography variant="body2" color="textSecondary">
        Accepted formats: {accept}
      </Typography>
    </div>
  );
};

export default FileInput;