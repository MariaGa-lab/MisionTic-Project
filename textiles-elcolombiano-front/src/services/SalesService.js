import axios from "axios";

const salesUrl = "http://localhost:3000/usuarios";

export const getSale = async (id) => {
    return await axios.get(`${salesUrl}/${id}`);
}

export const getSales = async () => {
    return await axios.get(`${salesUrl}/`);
}

export const addSale = async (sale) => {
    return await axios.post(`${salesUrl}/`, sale);
}

export const deleteSale = async (id) => {
    return await axios.delete(`${salesUrl}/${id}`);
}

export const editSale = async (sale) => {
    return await axios.put(`${salesUrl}/${sale._id}`, sale);
}