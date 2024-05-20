import { GoogleAuthContextProvider } from "./context/GoogleAuthContext";
import ProtectedWithGoogleAuth from "./context/ProtectedWithGoogleAuth";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./routes/Login/Login";
import Home from "./routes/Home/Home";
import IDTypesManagement from "./routes/IDTypesManagement/IDTypesManagement";
import RolesManagement from "./routes/RolesManagement/RolesManagement";
import UsersManagement from "./routes/UsersManagement/UsersManagement";
import VisitorHome from "./routes/VisitorHome/VisitorHome";

function App() {
    return (
        <BrowserRouter>
            <GoogleAuthContextProvider>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route
                        path="/"
                        element={
                            <ProtectedWithGoogleAuth>
                                <Home />
                            </ProtectedWithGoogleAuth>
                        }
                    />
                    <Route path="/vhome" element={<VisitorHome />} />
                    <Route
                        path="/documents"
                        element={
                            <ProtectedWithGoogleAuth>
                                <IDTypesManagement />
                            </ProtectedWithGoogleAuth>
                        }
                    />
                    <Route
                        path="/roles"
                        element={
                            <ProtectedWithGoogleAuth>
                                <RolesManagement />
                            </ProtectedWithGoogleAuth>
                        }
                    />
                    <Route
                        path="/users"
                        element={
                            <ProtectedWithGoogleAuth>
                                <UsersManagement />
                            </ProtectedWithGoogleAuth>
                        }
                    />
                </Routes>
            </GoogleAuthContextProvider>
        </BrowserRouter>
    );
}

export default App;
