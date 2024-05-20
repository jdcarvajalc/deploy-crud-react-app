import { Navigate } from "react-router-dom";
import { useGoogleAuth } from "./GoogleAuthContext";

const ProtectedWithGoogleAuth = ({ children }) => {
    const { googleUser } = useGoogleAuth();

    // Implement an emailAndPassword condition for returning children components

    if (googleUser) return children; // If user is logged in, show the protected content
    return <Navigate to="/login" />; // Otherwise, redirect them to the login page
};

export default ProtectedWithGoogleAuth;
