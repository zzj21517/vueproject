<template>
    <div class="expandInfo">
        <div class="index">
          <span class="expand-key">序号：</span>
          <span class="expand-value">{{ row._index+1 }}</span>
        </div>
        <div class="name">
          <span class="expand-key">企业名称：</span>
          <span class="expand-value">{{ row.company }}</span>
        </div>
        <div class="officeAddr">
          <span class="expand-key">办公地：</span>
          <span class="expand-value">{{ row.nowerAddr }}</span>
        </div>
        <div class="relationType">
          <span class="expand-key">联系方式：</span>
          <span class="expand-value">{{ row.phone }}</span>
        </div>
        <div class="relationPerson">
          <span class="expand-key">联系人：</span>
          <span class="expand-value">{{ row.name }}</span>
        </div>
    </div>
</template>

<script>
    export default {
        props:{
            row:Object
        },
        created(){
          console.log(this.row)
        }
    }
</script>

<style scoped>
.expandInfo{
  font-size: 14px;
}
.expand-key{
  font-weight: bold;
  display: inline-block;
  width:80px;
  text-align: right;
}
.expandInfo>div{
  margin-bottom: 5px;
}
@media screen and (min-width:800px) {
  .index,.name,.phone{
    display: none
  }
}
@media screen and(max-width:800px) {
  .name{
    display: none
  }
}
</style>