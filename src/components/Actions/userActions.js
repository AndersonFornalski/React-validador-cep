import axios from "axios";

export const Register =(userD)=>{
return axios.post("http://localhost:3010/user/register", {...userD}).then(
   res => res.data,
   err => Promise.reject(err.response.data.errors)
)
}
