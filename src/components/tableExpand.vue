<template>
    <div class="tableExpand">
        <div class="runTime">
          <span class="expand-key">时间：</span>
          <span class="expand-value">{{ row.runTimes }}</span>
        </div>
        <div class="msgBody">
          <span class="expand-key">申请事由：</span>
          <span class="expand-value">{{ row.msgBody }}</span>
        </div>
        <div class="msgTips">
          <span class="expand-key">申请备注：</span>
          <span class="expand-value">{{ row.msgTips }}</span>
        </div>
        <div class="approver">
          <span class="expand-key">审批人：</span>
          <span class="expand-value">{{ row.approver }}</span>
        </div>
        <div class="copy">
          <span class="expand-key">抄送人：</span>
          <span class="expand-value">{{ row.copy }}</span>
        </div>
        <div class="status">
          <span class="expand-key">审批状态：</span>
          <span class="expand-value">{{ row.status?'已审批':'未审批' }}</span>
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
.tableExpand{
  font-size: 14px;
}
.expand-key{
  font-weight: bold;
  display: inline-block;
  width:80px;
  text-align: right;
}
.tableExpand>div{
  margin-bottom: 5px;
}
@media screen and (min-width:800px) {
  .runTime,.msgBody,.status{
    display: none
  }
}
@media screen and (min-width:365px) and (max-width:800px) {
  .status{
    display: none
  }
}
</style>