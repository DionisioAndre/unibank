import { Route, Navigate } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../../context/authContext";

const PrivateRoute = ({ children, ...rest }) => {
    const { user } = useContext(AuthContext);
    return (
        <Route 
            {...rest} 
            element={user ? children : <Navigate to="/login" />} 
        />
    );
};

export default PrivateRoute;
