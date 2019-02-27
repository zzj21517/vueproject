import store from '@/store'
const {body}=document
const MobileWIDTH=700
const MIDWIDTH=1024
const RATIO=3

export default{
  beforeMount(){
      window.addEventListener('resize',this.resizeHandler)
  },
  mounted(){
    const isMobile=this.isMobile()
    if(isMobile){
        store.dispatch('ToggleDevice','mobile')
    }else{
        const isMidDevice=this.isMidDevice()
    if(isMidDevice){
        store.dispatch('ToggleDevice','midDevice')
    }else{
        store.dispatch('ToggleDevice','desktop')
    }
    }
  },
  methods:{
      //判断是否是手机
      isMobile(){
          const rect=body.getBoundingClientRect()
          return rect.width - RATIO < MobileWIDTH
      },
      //判断是否是中型设备
      isMidDevice(){
        const rect=body.getBoundingClientRect()
        return rect.width - RATIO < MIDWIDTH
      },
      resizeHandler(){
          //页面没有影藏
          if(!document.hidden){
            const isMobile=this.isMobile()
            if(isMobile){
              store.dispatch('ToggleDevice',isMobile?'mobile':'midDevice')
            }else{
                const isMidDevice=this.isMidDevice()
            if(isMidDevice){
                store.dispatch('ToggleDevice',isMidDevice?'midDevice':'desktop')
            }else{
                store.dispatch('ToggleDevice','desktop')
            }
            }
          }
      }
  }
}