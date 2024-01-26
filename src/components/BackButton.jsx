import React from "react"
import { useNavigate } from "react-router-dom";
import Button from "./Button";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
function BackButton() {
    const navigate = useNavigate();
    return (
        <Button type="back" onClick={(e) => {
            e.preventDefault();
            navigate(-1)
        }}>
           <KeyboardBackspaceIcon /> Back
        </Button>
    )
};

export default BackButton;
