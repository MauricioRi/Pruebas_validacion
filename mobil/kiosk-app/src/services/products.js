//info de cards
import { SERVER_BASE_URL } from "../constants";

export const productsBySubcategory = async function (idCategory, idSubcategory) {
    console.log(idCategory);
    
    if (!idCategory) {
        return []
    }
    try {
        const response = await fetch(`${SERVER_BASE_URL}productsBySubcategory`, {
            method: 'POST',
            body: JSON.stringify(idCategory,idSubcategory),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (!response.ok) {
            throw Error(response.statusText);
        }
        const json = await response.json();
        return json;
    } catch (error) {
        console.log(error);
        return []
    }
}

export const productUpdate = async function (data) {
    const {enable,file,id,price}=data
    console.log(data);
    
    const formData = new FormData();
    formData.append('enable',enable)
    if (file) {
        formData.append('image', file)
    }
    formData.append('price', price)
    formData.append('id', id)


    try {
        const response = await fetch(`${SERVER_BASE_URL}productUpdate`, {
            method: 'POST',
            body: formData,
        });
        if (!response.ok) {
            throw Error(response.statusText);
        }else{
            const json = await response.json();
            return json;
        }
        
    } catch (error) {
        console.log(error);
        return []
    }
}
