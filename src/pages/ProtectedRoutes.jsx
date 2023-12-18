import React, { useEffect } from "react"
import { useAuth } from "../contexts/AuthContexts";
import { useNavigate } from "react-router-dom";

function ProtectedRoutes({ children }) {
    const { isAuthenticated } = useAuth();
    const navigate = useNavigate();
    useEffect(() => {
        if(!isAuthenticated) navigate("/login");
    } , [isAuthenticated])
    return isAuthenticated ? children : null;
};

export default ProtectedRoutes;
