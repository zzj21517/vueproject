<template>
    <div class="companyRules">
           <Breadcrumb style="margin:20px">
        <BreadcrumbItem to="/index">首页</BreadcrumbItem>
        <BreadcrumbItem to="/study">学习中心</BreadcrumbItem>
        <BreadcrumbItem>销售指导</BreadcrumbItem>
        </Breadcrumb>
        <div class="title">—销售指导—</div>
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
                        title:'企服家---初次见面活动术',
                        contents:['营销员：XX总，你好！我是安孚的XX，这是我的名片(双手递上)','客户：你好！请坐','营销员：谢谢！','客户：小王，过来还方便吧？'],
                        path:'/companyIntroduce?id=2',
                    },
                    {
                        time:'2018-11-06',
                        title:'企服家---企业痛点及金税监管',
                        contents:['金税三期有多强大','虚开发票？','评估纳税人的税号下，进项发票与销项发票的行业相关性、同一法人相关性、同一地址相关性、数量相关性、比率相关性'],
                        path:'/companyIntroduce?id=3',
                    },
                ]
            }
        },
    }
</script>

<style scoped>

</style>