<template>
        <Collapse>
         <Panel>
            {{item.title}}
            <div slot="content">
              <div class="member" v-for="(member,index) in item.members" :key="index">{{member.label}}--{{member.position}}</div>
            </div>
         </Panel>
        </Collapse>
</template>

<script>
    export default {
        props:['item'],
        data() {
            return {
            }
        },
    }
</script>

<style scoped>
    .member{
        height: 30px;
        line-height: 30px;
        border-bottom: 1px solid #eee;
    }
    .ivu-collapse-content>.ivu-collapse-content-box{
       padding:0px;
    }   
</style>