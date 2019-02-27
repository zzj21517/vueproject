// import { userInfo } from "os";

const getters={
    device:state=>state.app.device,
    productions:state=>state.app.productions,
    userInfo:state=>state.app.userInfo,
    totalNumber:state=>state.app.totalNumber,
    totalPrice:state=>state.app.totalPrice,
    seletedGoods:state=>state.app.seletedGoods,
    selectAll:state=>state.app.selectAll,
    orders:state=>state.app.orders,
    goodsList:state=>state.app.goodsList,
    customList:state=>state.app.customList,
    companyList:state=>state.app.companyList,
    modal:state=>state.app.modal
}

export default getters