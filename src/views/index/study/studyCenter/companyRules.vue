<template>
    <div class="companyRules">
           <Breadcrumb style="margin:20px">
        <BreadcrumbItem to="/index">首页</BreadcrumbItem>
        <BreadcrumbItem to="/study">学习中心</BreadcrumbItem>
        <BreadcrumbItem>公司介绍</BreadcrumbItem>
        </Breadcrumb>
        <div class="title">—公司介绍—</div>
        <div class="study-class"><span>公司</span>介绍与制度</div>
        <simple-guidance v-for="(rule,index) in rules" :key="index" :simpleTitle='rule'></simple-guidance>
    </div>
</template>

<script>
import SimpleGuidance from '@/components/simpleGuidance'
    export default {
        components:{
            SimpleGuidance
        },
        data() {
            return {
                rules:[
                    {
                        time:'2019-01-06',
                        title:'安孚医疗救援技术咨询服务（苏州）有限公司',
                        contents:['安孚医疗救援技术咨询服务有限公司，是一家聚焦于意外伤害医疗信用救援的服务机构，提供全过程、全体系的技术服务模式，简称A-SOS（All-round Services of System），以“家人情怀+普惠服务”作为根本的发展愿景和价值观，确立以意外伤害医疗费垫付+全程伤害赔偿服务为核心的业务模式，构建医疗、伤残鉴定、保险赔偿和律师诉讼“四位一体”的服务模式，打造垂直医疗+普惠金融的创新商业模式。'],
                        path:'/companyIntroduce?id=1',
                    },
                    {
                        time:'2018-11-06',
                        title:'财务管理制度补充规定',
                        contents:['一、关于各类资金支付时间段','1、付款申请事项：填写付款申请单，按《财务管理制度》审批流程执行完毕后，当月 25 日之前递交手续的，当月 25 日付款，遇节假日顺延；当月 25 日之后递交手续的，顺延到次月 25 日付款；需要急办的事项仅限预付款项，递交手续时，请经办人注明付款时间，并写明理由，获批准后按经办人注明的付款时间付款，未注明付款时间的，按正常付款时间处理.....'],
                        path:'http://zzjbyx.top/pdf/财务管理制度补充规定2018.11.6.pdf',
                    },
                    {
                        time:'2018-10-30',
                        title:'对外宣传多媒体资料使用规范',
                        contents:['一、为了加强对外宣传多媒体资料的使用管理，避免因侵犯他人著作权，根据《中华人民共和国著作权法》、《互联网著作权行政保护办法》及有关法律、行政法规，制定本规范。','二、总部及分、子公司所有人员使用图片、视频、音频等多媒体资料均应遵守本规范。','三、通过网络下载或著作权归属不明确的图片、视频、音频等多媒体资料，只可在公司内部学习、研究、欣赏，不得通过任何媒体对外发表.....'],
                        path:'http://zzjbyx.top/pdf/关于对外宣传多媒体资料使用规范的规定2018.10. 30.pdf',
                    },
                    {
                        time:'2018-09-26',
                        title:'安孚医疗救援-员工手册-V1.0',
                        contents:['1.1 公司简介','安孚医疗救援技术咨询服务有限公司，是一家聚焦于意外伤害医疗信用救援的服务机构，提供全过程、全体系的技术服务模式，简称A-SOS（All-round Services of System），以“家人情怀+普惠服务”作为根本的发展愿景和价值观，确立以意外伤害医疗费垫付+全程伤害赔偿服务为核心的业务模式，构建医疗、伤残鉴定、保险赔偿和律师诉讼“四位一体”的服务模式.......'],
                        path:"/watchDoc?url=http://zzjbyx.top/pdf/安孚医疗救援-员工手册-第一版2018.9.26.doc",
                    },
                    {
                        time:'2018-08-21',
                        title:'关于公司平面设计（图片设计与调整）申请通知',
                        contents:['尊敬的领导与伙伴们：','大家好，一直以来感谢大家对我部的支持与帮助，现就平面设计申请做下列调整：','1、平面设计主要是：图片的设计与调整；2、请大家以及部门员工在申请平面设计前，填写附件中文档，并经领导审批后转发给UI设计师；3、即日起实行。    再此希望大家多多配合本部门的工作！'],
                        path:"/watchDoc?url=http://zzjbyx.top/pdf/公司平面设计申请表.doc",
                        download:'http://zzjbyx.top/pdf/公司平面设计申请表.doc',
                    },
                    {
                        time:'2018-05-23',
                        title:'ASOS财务管理制度',
                        contents:['一、备用金申领制度','1、备用金申领流程：现金会计填写备用金申领单→财务负责人签核→总经理批准→现金会计提款入备用金帐户','2、备用金申领单上要必须注明当日现金余额。'],
                        path:'http://zzjbyx.top/pdf/2018 ASOS财务管理制度2018.5.23..pdf',
                        download:'http://zzjbyx.top/pdf/采购标准文本.xls',
                    },
                    {
                        time:'2018-05-22',
                        title:'ASOS 安孚医疗救援采购管理暂行规定',
                        contents:['为规范公司资金使用流程，提高公司资金利用率，特制定本采购细则，适用公司所有部门：','1、采购物品批准采购程序：物品使用部门填写采购申请单→部门负责人签批→财务负责人签批→总经理批准→财务部、行政人事负责采购并登记台账→使用部门领用；','（1）渠道维护、招待，节日福利，节日礼品须提前两个月填写预算申请明细表或报告，经总经理批准后方可采购。（2）办公用品、生活用品、劳保用品、印刷品等单位价值超 1000 元的，必须先填写......'],
                        path:'http://zzjbyx.top/pdf/ASOS 安孚医疗救援采购管理暂行规定2018.5.22..pdf',
                    },
                    {
                        time:'2018-05-21',
                        title:'ASOS 关于规范公司发文规定的通知',
                        contents:['为进一步提高公司公文处理效率、规范公文的发文方法，将相关要求通知如下：','1、全公司正式文件审批责任部门集中于总办，各部门一律不得自行向上、向下发送正式文件。','2、各部门需要向上反映汇报重要情况或向下安排布置重要工作要求发文应向公司提出发文申请，并将交上级审核，重要决议应该经过总经理审核才能落实。总经理同意发文，则由人事部统一归档........'],
                        path:'http://zzjbyx.top/pdf/ASOS 关于规范公司发文规定的通知2018.5.21.pdf',
                        download:'http://zzjbyx.top/pdf/公司发文审批表2018.xls',
                    },
                ]
            }
        },
    }
</script>

<style scoped>

</style>