import axios from "axios";
import jwtDecode from "jwt-decode";

const authUrl = "http://localhost:4000/auth";

export const authHeaders = {
    "auth-token":localStorage.getItem("token") 
}

export const loginAuth = async (credentials) => {
    return await axios.post(`${authUrl}/login`, credentials);
}

export const verifyToken = async () => {
    let verifyTokenData = await axios.get(`${authUrl}/verifyToken`,  {headers: authHeaders});
    if(!verifyTokenData.status === 200){
        logout();
    }
}

export const getCurrentUser = () => {
    try {
        const token = localStorage.getItem("token");
        return jwtDecode(token);
    } catch (error) {
        return null;
    }
}

const logout = () => {
    localStorage.clear();
    window.location = "/";
}

