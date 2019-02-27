<template>
  <div class="nav">
    <div class="nav-item" v-for="(nav,index) in navs" :key="index">
      <router-link :to="nav.route">
        {{nav.name}}
      </router-link>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['navs']
  }
</script>

<style scoped>
  .nav a {
    color: black;
    display: block;
    border: 1px solid #fc361d;
    padding: 2px 10px;
    border-radius: 20px;
    width: 100px;
    margin: 10px auto;
  }

  .router-link-exact-active {
    background-color: #fc361d;
    color: #fff !important;
  }

  @media screen and (max-width:640px) {
    .nav {
      display: flex;
      flex-wrap: wrap;
    }

    .nav .nav-item {
        width:33.3%;
    }
    .nav .nav-item a{
        width:90%;
        text-align: center;
    }
  }
</style>