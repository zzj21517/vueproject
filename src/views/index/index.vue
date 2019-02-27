<template>
  <div class="index">
    <Header></Header>
    <div class="main">
      <div class="card-item">
        <Row>
        <Col :lg="{ span:8}" :md="{ span:12}" :sm="{ span:12}" :xs="{ span:24}">
        <person-item />
        </Col>
        <Col :lg="{ span: 8}" :md="{ span:12}" :sm="{ span:12}" :xs="{ span:24}">
        <custom-item />
        </Col>
        <Col :lg="{ span: 8}" :md="{ span:12}" :sm="{ span:12}" :xs="{ span:24}">
        <study-item />
        </Col>
      </Row>
      </div>
      <Row>
        <Col>
          <production-item />
        </Col>
      </Row>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
  import ResizeMixin from './mixin/resizeHandler'
  import Header from './header.vue'
  import Footer from '@/components/footer.vue'
  import PersonItem from './person/personItem'
  import CustomItem from './custom/customItem'
  import StudyItem from './study/studyItem'
  import ProductionItem from './production/productionItem'
  export default {
    components: {
      Header,
      Footer,
      PersonItem,
      CustomItem,
      StudyItem,
      ProductionItem,
    },
    data() {
        return {
        }
    },
  }
</script>

<style scoped>
.index{
  min-height:100%;
		height: auto !important;
		height: 100%; /*IE6不识别min-height*/
		position: relative;
}
.main{
   padding-bottom: 100px;
}
/* 屏幕尺寸小于640像素 */
@media screen and (max-width:640px) {
  .main{
    margin:50px 5px 0px 5px;
  }
}
/* 屏幕尺寸大于640像素 */
@media screen and (min-width:640px) {
 .index{
   padding-top: 60px;
 }
}
  .xsMain ivu-card{
    padding:5px !important;
  }
  
</style>