<template>
    <div class="simple-guidance">
      <div class="study-left">
        <div class="top">{{simpleTitle.time.slice(0,7)}}</div>
        <div class="bottom">{{simpleTitle.time.slice(8)}}</div>
      </div>
      <div class="study-right">
        <h3 class="study-title"><span>{{simpleTitle.title.slice(0,2)}}</span>{{simpleTitle.title.slice(2)}}</h3>
        <div v-for="(content,index) in simpleTitle.contents" :key="index">
          {{content}}
        </div>
        <div v-if="$route.path==='/study/salesGuidance'||simpleTitle.path==='/companyIntroduce'" class="more">
          <router-link :to="simpleTitle.path">查看更多</router-link>
        </div>
        <div v-if="$route.path==='/study/companyRules'||$route.path==='/study/newIntroduce'" class="more" style="display:flex">
          <a v-if="/\.pdf/.test(simpleTitle.path)" :href="simpleTitle.path" target="_blank">在线预览</a>
          <router-link v-else :to="simpleTitle.path" target="_blank">在线预览</router-link>
          <a v-if="simpleTitle.download" :href="simpleTitle.download" target="_blank" style="margin-left:20px">下载附件</a>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        props:['simpleTitle'],
    }
</script>

<style scoped>
.simple-guidance{
 display: flex;
 margin-top: 20px;
}
  .simple-guidance .study-left {
    width:80px;
    height:80px;
    border:2px solid #acadad;
    border-radius: 5px;
    color:#acadad;
    text-align: center;
    padding-top: 10px;
    margin-right: 10px;
    flex-shrink: 0;
  }

  .simple-guidance .study-left .bottom {
    font-size: 30px;
    font-weight: 600;
    line-height: 1em;
  }
.study-right .study-title{
  margin-bottom: 10px;
}

  @media screen and (min-width:640px){
    .study-right .study-title span{
    border-bottom: 1px solid black;
    padding-bottom: 5px;
  }
  }
  .study-right .more a{
   color:black;
        display: block;
        background-color:#fc361d;
        padding:2px;
        text-align: center;
        border-radius:20px;
        width:100px;
        color:#fff;
        margin-top: 10px;
  }
</style>