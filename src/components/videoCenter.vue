<template>
<div class="video-center">
     <Card class="video" v-for="(video,index) in videos" :key="index">
         <div class="video-info">
          <div>{{video.title}}</div>
          <!-- <div><img src="@/assets/images/alldevice.png" alt="" width="16px"></div> -->
        </div>
        <div class="video-position">
            <video :src="video.video_url" controls="controls" width="80%">
                your browser does not support the video tag
            </video>
        </div>
      </Card>
</div>
</template>

<script>
    export default {
        data() {
            return {
                videos:[
                    {
                    title:'御驾无忧',
                    video_url:'http://zzjbyx.top/pdf/noworrydrive.mp4'
                },
                // {
                //     title:'安心垫',
                //     video_url:'http://zzjbyx.top/pdf/2cf6e115b083bcfea7b7f9d394bb3564.mp4'
                // }
                ]
            }
        },
    }
</script>

<style scoped>
.ivu-card{
    height: auto;
}
.video-position{
    text-align: center;
    background-color: #e1e1e1;
}
.video-center .video .video-info{
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 16px;
    font-weight: 600;
    margin-top: 10px;
}
.video-center .video .video-info img{
    vertical-align:-3px;
}
</style>