import { useEffect, useState } from "react";
import { account } from "../appwrite";
import { useNavigate } from "react-router-dom";

const useAuth = () => {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const checkUser = async () => {
            try {
                const response = await account.get();
                setUser(response);
            } catch (error) {
                console.log("Not authenticated:", error);
                setUser(null);
                navigate("/login"); // Redirect to login if not authenticated
            }
        };
        checkUser();
    }, [navigate]);

    const login = async (email, password) => {  
        setIsLoading(true);
        try {
            await account.createEmailPasswordSession(email, password);
            const response = await account.get();
            setUser(response);
            navigate("/admin");
        } catch (error) {
            console.log(error);
            throw new Error(error.message);
        } finally {
            setIsLoading(false);
        }
    };

    const logout = async () => {
        try {
            await account.deleteSession("current");
            setUser(null);
            navigate("/login"); // Redirect to login page after logout
        } catch (error) {
            console.log("Logout failed:", error);
        }
    };

    return { user, isLoading, login, logout }; 
}

export default useAuth;
