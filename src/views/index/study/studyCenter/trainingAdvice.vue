<template>
  <div class="salesGuidance">
       <Breadcrumb style="margin:20px">
        <BreadcrumbItem to="/index">首页</BreadcrumbItem>
        <BreadcrumbItem to="/study">学习中心</BreadcrumbItem>
        <BreadcrumbItem>培训学习</BreadcrumbItem>
        </Breadcrumb>
    <div class="title">—培训学习—</div>
    <div class="study-class"><span>文档</span>中心</div>
    <simple-guidance v-for="(guidance,index) in guidances" :key="index" :simpleTitle='guidance'></simple-guidance>

    <div class="study-class"><span>视频</span>中心</div>
    <div class="video-center">
      <video-center></video-center>
    </div>
  </div>
</template>

<script>
  import SimpleGuidance from '@/components/simpleGuidance'
  import VideoCenter from '@/components/videoCenter'
  export default {
    components: {
      SimpleGuidance,
      VideoCenter
    },
    data() {
      return {
        guidances: [{
          time: '2018-01-10',
          title: '伤残学习辅助资料',
          contents: ['肢体关节功能丧失评残基础',
            '1、上肢骨折：肩关节的锁骨远端，肱骨头骨折，肱骨外科颈骨折，肱骨大结节骨折，肩锁关节脱位；肘关节的尺骨鹰嘴骨折；腕关节的尺桡骨远端骨折涉及关节面  2、下肢骨折：髋关节的髋臼、股骨头、股骨颈、股骨粗隆间骨折；膝关节的胫骨平台骨折、髌骨切除；踝关节的双踝、三踝骨折......'
          ],
          path:'/study/salesDetail',
        }]
      }
    },
  }
</script>

<style scoped>

</style>