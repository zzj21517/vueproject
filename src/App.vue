<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style>
html,body {
		margin: 0;
		padding:0;
		height: 100%;
	}
  #app {
    font-family: '微软雅黑', 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 14px;
    height: 100%;
  }

  @media screen and (min-width:640px) {
    .ivu-card {
      margin: 20px 10px;
      height: 330px;
    }
  }

  @media screen and (max-width:640px) {
    .ivu-card {
      margin: 10px 0 0 0;
    }

    .ivu-card .ivu-card-body {
      padding: 20px 5px;
    }

    /* .ivu-btn {
      height: 27px;
      padding:0px 10px;
    }

    .ivu-btn span {
      display: inline-block;
      height: 27px;
      line-height: 27px;
    } */
  }

  /* .ivu-card{
  box-shadow: 5px 5px 5px #fee0e0;
} */
  .title {
    text-align: center;
    font-size: 16px;
    font-weight: bold;
    color: #fc2e13;
    margin-bottom: 20px;
  }

  .small-title {
    font-size: 15px;
    font-weight: 600;
    color: #fd988b;
    margin-bottom: 10px;
    margin-left: 50px;
  }

  .content {
    display: flex;
    margin-top: 10px;
  }

  .content .l {
    width: 50%;
    text-align: center;
  }

  .content .r {
    width: 50%;
  }

  .content .l img {
    width: 150px;
    height: 200px;
  }

  .ivu-row {
    margin-top: 10px !important;
  }

  .login .ivu-form-item-error-tip {
    color: #fff !important;
  }

  .ivu-collapse-content>.ivu-collapse-content-box {
    padding: 0px;
  }

  /* checkbox */
  input[type="checkbox"] {
    -webkit-appearance: none;
    top: 5px;
    float: left;
    width: 20px;
    height: 20px;
    position: relative;
    vertical-align: middle;
    margin-top: 0;
    background: #fff;
    border: #999 solid 1px;
    border-radius: 3px;
    min-height: 12px;
    min-width: 12px;
    cursor: pointer;
  }

  input[type="checkbox"]:focus {
    outline: none;
  }

  input:checked {
    border-color: red;
  }

  input[type=checkbox]:checked::after {
    content: '';
    top: 3px;
    left: 1px;
    position: absolute;
    vertical-align: middle;
    margin-top: 0;
    background: transparent;
    border: red solid 1px;
    border-top: none;
    border-right: none;
    height: 8px;
    width: 15px;
    -moz-transform: rotate(-45deg);
    -ms-transform: rotate(-45deg);
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
  }

  .high-light {
    color: red;
  }

  /*购物车tip*/
  .cart-tip {
    display: flex;
    border: 1px solid #e1e1e1;
    height: 40px;
    align-items: center;
    margin-top: 10px;
  }

  .cart-tip .tip-item {
    flex: 1;
    text-align: center;
    border-right: 1px solid #e1e1e1;
    font-size: 16px;
  }

  /* 左右布局 */
  @media screen and (min-width:640px) {
    .layout-left {
      position: fixed;
      top: 60px;
      bottom: 0px;
      left: 0px;
      width: 150px;
      text-align: center;
      border-right: 1px solid #e1e1e1;
    }

    .layout-right {
      position: absolute;
      top: 70px;
      right: 50px;
      left: 200px;
    }
  }

  @media screen and (max-width:640px) {
    .layout-left {
      margin-top: 50px;
    }

    .layout-right {
      padding: 10px;
    }
  }

  /* 学习中心类别 */
  .study-class {
    color: #fc2e13;
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 10px;
  }

  .study-class span {
    border-bottom: 1px solid #fc2e13;
  }

  /* 商品flex布局 */
  .production-flex {
    display: flex;
    flex-wrap: wrap;
  }

  @media screen and (min-width: 1200px) {

    /* table列表展开项 */
    .ivu-table-expanded-cell {
      display: none;
    }
  }

  /* 隐藏model的footer */
  .ivu-modal-footer{
      display: none;
  }
</style>