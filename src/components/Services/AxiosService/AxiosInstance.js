import axios from "axios";
import authservice from "../../AuthService/authService";

 class AxiosService {
   
    axiosInstance = {}

    constructor(){
        this.initInstance();
    }

    initInstance(){
        this.axiosInstance = axios.create({
            baseURL:"http://localhost:3010",
            timeout: 1000 
        });
        this.axiosInstance.interceptors.request.use(
            (config)=>{
                const token = authservice.getToken();

                if(token){
                    config.headers.Authorization = `Bearer ${token}`;
                }
                return config;
            });
            return this.axiosInstance;
    } 

    getInstance(){
        return this.axiosInstance || this.initInstance();
    } 
}

export default new AxiosService;