<template>
  <div :class="[{customInfo:$store.getters.device==='mobile'?true:false}]">
    <card>
      <div class="title">—客户中心—</div>
      <keep-alive>
        <component v-bind:is="currentTabComponent"></component>
      </keep-alive>
    </card>
  </div>
</template>

<script>
  import SelectCustom from './selectCustom'
  import AddCustom from './addCustom'
  import MyCustom from './myCustom'
  export default {
    components: {
      SelectCustom,
      AddCustom,
      MyCustom
    },
    data() {
      return {
        currentTabComponent:'selectCustom'
      }
    },
  }
</script>

<style scoped>
.customInfo .ivu-card{
    height:auto;
}
</style>