<template>
    <div class="companyRules">
           <Breadcrumb style="margin:20px">
        <BreadcrumbItem to="/index">首页</BreadcrumbItem>
        <BreadcrumbItem to="/study">学习中心</BreadcrumbItem>
        <BreadcrumbItem>新品介绍</BreadcrumbItem>
        </Breadcrumb>
        <div class="title">—新品介绍—</div>
        <div class="study-class"><span>文档</span>中心</div>
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
                        title:'安心司机-御驾无忧-简介版-388',
                        contents:['司机朋友','您身边的私人医生+私人律师+私人信贷','2017年3月底全国机动车保有量首次突破3亿汽车驾驶人3.2亿人'],
                        path:'http://zzjbyx.top/pdf/安心司机御驾无忧简介版388.pdf',
                    },
                    {
                        time:'2018-11-06',
                        title:'安心司机-预计无忧-详情版-688',
                        contents:['1：交通事故人伤垫付3万元','2：全程服务：涵盖医院、交警队、司法鉴定所、保险公司','3：交通人伤律师诉讼，不再付费'],
                        path:'http://zzjbyx.top/pdf/安心司机御驾无忧详解版688.pdf',
                    },
                ]
            }
        },
    }
</script>

<style scoped>

</style>