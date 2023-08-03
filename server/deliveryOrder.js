import instance from "./index";

const deliveryService = {
    getOutWareTypeListApi:(params)=>instance.get('/PlainLocations/GetckLocationCodeList', {params})
}
export default deliveryService