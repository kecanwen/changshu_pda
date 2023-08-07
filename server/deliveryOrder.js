import instance from "./index";

const deliveryService = {
    getOutWareTypeListApi:(params)=>instance.get('/PlainLocations/GetckLocationCodeList', {params}),
    getMaterialListApi:(params)=>instance.get('/Delivery/GetLikeMaterialsList',{params}),
    GetUnitLoadListApi:(params)=>instance.get('/Delivery/GetUnitLoadList',{params}),
}
export default deliveryService