import axios from "axios";
import {Toast} from "vant";
let baseURL;
if(process.env.NODE_ENV === 'development'){
    baseURL = "http://120.210.205.177:83";
}else if(process.env.NODE_ENV === 'production'){
    baseURL = "http://120.210.205.177:83"
}

const instance = axios.create({
    baseURL:baseURL,
    timeout:6000
});

instance.interceptors.request.use(config=>{
    return config
},error => {
    Promise.reject(error)
});

instance.interceptors.response.use(config=>{
    const data = config && config.data;
    console.log('请求结果res.data======>',data.data)
    if(data.code === 200){
        return data && data.data;
    }else{
        Toast.fail(data.msg || '请求失败');
    }
},error => {
    Promise.reject(error);
});

export default instance