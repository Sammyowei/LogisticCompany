import { useEffect, useState } from "react";
import { account } from "../appwrite";
import { useNavigate } from "react-router-dom";
const useAuth = () => {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();


    useEffect(() => {
        try {
            const user = account.get();
            setUser(user);
            navigate("/admin");
        } catch (error) {
            console.log(error);
            throw new Error(error.message);
        } 

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
    }



    return {user, isLoading,  login}; 

    
}

export default useAuth;
