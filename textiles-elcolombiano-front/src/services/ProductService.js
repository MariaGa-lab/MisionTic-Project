import axios from "axios";

const productsUrl = "http://localhost:3000/productos";

export const getProduct = async (id) => {
    return await axios.get(`${productsUrl}/${id}`);
}

export const getProducts = async () => {
    return await axios.get(`${productsUrl}/`);
}

export const addProduct = async (product) => {
    return await axios.post(`${productsUrl}/`, product, {
        headers: {
            "Content-type": "application/json",
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }
    });
}

export const deleteProduct = async (id) => {
    return await axios.delete(`${productsUrl}/${id}`);
}

export const editProduct = async (product) => {

    return await axios.patch(`${productsUrl}/${product._id}`, product, {
        headers: {
            "Content-type": "application/json"
        }
    });
}