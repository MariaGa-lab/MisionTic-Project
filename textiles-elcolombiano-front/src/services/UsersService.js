import axios from "axios";

const usersUrl = "http://localhost:3000/usuarios";

export const createUser = async (user) => {
    return await axios.post(`${usersUrl}/`, user);
}

export const getUser= async (id) => {
    return await axios.get(`${usersUrl}/${id}`);
}

export const getUsers = async () => {
    return await axios.get(`${usersUrl}/`);
}

export const deleteUser = async (id) => {
    return await axios.delete(`${usersUrl}/${id}`);
}

export const editUser = async (user) => {
    return await axios.put(`${usersUrl}/${user._id}`, user );
}