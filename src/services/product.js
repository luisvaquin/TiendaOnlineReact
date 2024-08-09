import axios from "axios";

export const getProducts = async () => {
    const URL_API = 'https://66ac393ef009b9d5c7315d26.mockapi.io/apiLuisRod/products';
    try {
        const res = await axios.get(URL_API);
        //validacion para ver respuesta del servidor 
        if (res.status === 200) {
            //console.log('data and endpoint', res.data);
            return res.data; // Retorna los datos aquí
        } else {
            return [];
        }
    } catch (e) {
        console.log(e);
        return []; // Retorna un array vacío en caso de error
    }
}

//Agregar logica para ddelete products
export const deleteProducts = async () => {
    try {
        const URL_API = ''
    } catch {
        false
    }
}
