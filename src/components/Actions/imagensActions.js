import axiosService from "../Services/AxiosService/AxiosInstance";

const axiosInstance = axiosService.getInstance();


//UPLOAD IMAGEM
export const uploadImage = image =>{
    const formData = new FormData();
    formData.append('image', image);

    return axiosInstance.post("/imagem/imageUpload", formData)
        .then(json =>{
            return json.data.imageUrl;
        })
        .catch(({response})=> Promise.reject(response.data.errors[0]))
}

export const uploadImage2 = image =>{
    const formData = new FormData();
    formData.append('image2', image);

    return axiosInstance.post("/imagem/imageUpload2", formData)
        .then(json =>{
            return json.data.imageUrl;
        })
        .catch(({response})=> Promise.reject(response.data.errors[0]))
}

export const uploadImage3 = image =>{
    const formData = new FormData();
    formData.append('image3', image);

    return axiosInstance.post("/imagem/imageUpload3", formData)
        .then(json =>{
            return json.data.imageUrl;
        })
        .catch(({response})=> Promise.reject(response.data.errors[0]))
}

export const uploadImage4 = image =>{
    const formData = new FormData();
    formData.append('image4', image);

    return axiosInstance.post("/imagem/imageUpload4", formData)
        .then(json =>{
            return json.data.imageUrl;
        })
        .catch(({response})=> Promise.reject(response.data.errors[0]))
}

export const uploadImage5 = image =>{
    const formData = new FormData();
    formData.append('image5', image);

    return axiosInstance.post("/imagem/imageUpload5", formData)
        .then(json =>{
            return json.data.imageUrl;
        })
        .catch(({response})=> Promise.reject(response.data.errors[0]))
}
