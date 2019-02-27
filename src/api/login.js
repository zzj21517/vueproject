import request from '@/utils/request'

//注册
export function registerUser(info){
    const data=info
    return request({
        url:'/user/register',
        method:'post',
        data
    })
}

//登录
export function loginUser(info){
    const data=info
    return request({
        url:'/asos/singin',
        method:'post',
        data
    })
}

//添加申请
export function applicate(info){
    const data=info
    return request({
        url:'/myApply/addapply',
        method:'post',
        data
    })
}

// 获取审批人、抄送人
export function getleadlist(info){
    return request({
        url:'asos/getleadlist',
        method:'get',
        params:{
            cusId:info
        }
    })
}

//显示申请
export function showApplication(info1,info2){
    return request({
        url:'/myApply/displaycase',
        method:'get',
        params:{
            userId:info1,
            type:info2
        }
    })
}

//支付
export function payfor(info){
    const data=info
    return request({
        url:'/sale/payali',
        method:'post',
        data
    })
}
// 轮询请求是否支付成功
export function isPaid(info){
    return request({
        url:'/sale/querystatus',
        method:'get',
        params:{
            id:info
        }
    })
}
//产品列表
export function getProductionsList(){
    return request({
        url:'/sale/displaygoods',
        method:'get',
    })
}
// 产品详情
export function getProductionsDetail(info){
    return request({
        url:'/sale/getgoods',
        method:'get',
        params:{
            id:info
        }
    })
}
//获取全部订单
export function getAllOrders(info){
    return request({
        url:'/sale/queryorder',
        method:'get',
        params:{
            userId:info
        }
    })
}

// 添加御驾无忧
export function noWorryDrive(info){
    const data=info
    return request({
        url:'/case/adddrive',
        method:'post',
        data
    })
}
// 添加保险客户
export function addInsurance(info){
    const data=info
    return request({
        url:'/case/addinsure',
        method:'post',
        data
    })
}
// 添加体检通客户
export function addPhysical(info){
    const data=info
    return request({
        url:'/case/addexam',
        method:'post',
        data
    })
}
// 添加道路人伤客户
export function addInjury(info){
    const data=info
    return request({
        url:'/case/addharm',
        method:'post',
        data
    })
}
// 添加婚姻纠纷客户
export function addMarry(info){
    const data=info
    return request({
        url:'/case/addmarry',
        method:'post',
        data
    })
}
// 添加经济纠纷客户
export function addEconomic(info){
    const data=info
    return request({
        url:'/case/addpeconomic',
        method:'post',
        data
    })
}
// 添加借贷纠纷客户
export function addLend(info){
    const data=info
    return request({
        url:'/case/addloans',
        method:'post',
        data
    })
}
// 添加劳动纠纷客户
export function addLabor(info){
    const data=info
    return request({
        url:'/case/addlabour',
        method:'post',
        data
    })
}
// 添加房贷纠纷客户
export function addHouse(info){
    const data=info
    return request({
        url:'/case/addhouse',
        method:'post',
        data
    })
}
// 添加财产继承客户
export function addAccede(info){
    const data=info
    return request({
        url:'/case/addinherit',
        method:'post',
        data
    })
}
// 添加房屋买卖纠纷
export function addProperty(info){
    const data=info
    return request({
        url:'/case/addproperty',
        method:'post',
        data
    })
}
// 添加企业客户
export function addCompany(info){
    const data=info
    return request({
        url:'/case/addcompany',
        method:'post',
        data
    })
}

// 获取全部客户信息
export function getAllCustoms(info){
    return request({
        url:'/case/getall',
        method:'get',
        params:{
            cusId:info,
            cusType:0
        }
    })
}
// 获取企业客户信息
export function getBusinessCustoms(info){
    return request({
        url:'/case/getall',
        method:'get',
        params:{
            cusId:info,
            cusType:1
        }
    })
}
// 查看客户信息
export function seeCustomInfo(id,type){
    return request({
        url:'/case/query',
        method:'get',
        params:{
            caseId:id,
            caseName:type
        }
    })
}
// 填写问题
export function addQuestion(info){
    return request({
        url:'quest/add',
        method:'get',
        params:{
            quest:info
        }
    })
}
// 获取问题
export function getQuestion(info){
    return request({
        url:'quest/get',
        method:'get',
        params:{
            quest:info
        }
    })
}

// 获取客户地址信息
export function getAddress(info,value,custom){
    return request({
        url:'asos/getsaleuser',
        method:'get',
        params:{
            userIndex:info,
            type:value,
            caseType:custom
        }
    })
}

