<template>
  <div class="hello-ezuikit-js">
    <div
      id="video-container"
      style="width:1000px;height:600px;margin-left:20px;margin-top:10px;display:block"
    ></div>
  </div>
</template>

<script>
import EZUIKit from 'ezuikit-js'
import { mapState } from 'vuex'
// import Request from '@/utils/request.js'
export default {
  name: 'EZUIKit',
  props: {
    msg: String,
  },
  data() {
    return {
      player: {},
      token: '',
    }
  },
  methods: {
    async getToken() {
      // console.log(111)
      // const data1 = Request({
      //   url: 'api/accessToken/getToken',
      //   method: 'get',
      // })
      // console.log(data1)
      // const { data: res } = await Request({
      //   method: 'post',
      //   params: {
      //     appKey: '75f5daa8e74f4114b3a12d3a68333261',
      //     appSecret: '95f3816d37eb98a00b9ca910741f6119',
      //   },
      //   // Content-Type: application/x-www-form-urlencoded
      // })
      // console.log(res)
      // this.token = res.data.accessToken
      this.token =
        'at.40bitnc986ajj2mx4qvtspti5imnrua8-60su0dc1wo-0syulrv-ekxkk43h6'
    },
  },
  created() {
    this.getToken()
  },
  computed: {
    ...mapState({
      greenHouseNum: (state) => {
        return state.monitor.greenHouseNum
      },
      equipmentSerial: (state) => {
        return state.monitor.equipmentSerial
      },
      monitorNum: (state) => {
        return state.monitor.monitorNum
      },
    }),
    // monitorUrl:
    //   'ezopen://open.ys7.com/' +
    //   this.equipmentSerial +
    //   '/' +
    //   this.monitorNum +
    //   '' +
    //   '.live',
  },

  watch: {
    equipmentSerial: function() {
      this.player.opt.url =
        'ezopen://open.ys7.com/' +
        this.equipmentSerial +
        '/' +
        this.monitorNum +
        '.live'
      this.player.play()
    },
    monitorNum: function() {
      this.player.opt.url =
        'ezopen://open.ys7.com/' +
        this.equipmentSerial +
        '/' +
        this.monitorNum +
        '.live'
      this.player.play()
    },
  },
  mounted() {
    console.log(this.equipmentSerial)
    console.log(this.monitorNum)
    console.group('mounted 组件挂载完毕状态===============》')
    this.player = new EZUIKit.EZUIKitPlayer({
      autoplay: true,
      id: 'video-container',
      accessToken: this.token,
      // accessToken:
      //   'at.7enft1t56b7hp7h535nxj4ja8p2gb0uo-1laepksji4-0djx3vq-cueoz6e1k',
      // url: 'ezopen://open.ys7.com/E99632751/1.live',
      url:
        'ezopen://open.ys7.com/' +
        this.equipmentSerial +
        '/' +
        this.monitorNum +
        '.live',
      // E99632751/1.live',
      template: 'simple', // simple - 极简版;standard-标准版;security - 安防版(预览回放);voice-语音版；
      // 视频上方头部控件
      //header: ["capturePicture", "save", "zoom"], // 如果templete参数不为simple,该字段将被覆盖
      //plugin: ['talk'],                       // 加载插件，talk-对讲
      // 视频下方底部控件
      // footer: ["talk", "broadcast", "hd", "fullScreen"], // 如果template参数不为simple,该字段将被覆盖
      audio: 0, // 是否默认开启声音 0 - 关闭 1 - 开启
      // openSoundCallBack: data => console.log("开启声音回调", data),
      // closeSoundCallBack: data => console.log("关闭声音回调", data),
      // startSaveCallBack: data => console.log("开始录像回调", data),
      // stopSaveCallBack: data => console.log("录像回调", data),
      // capturePictureCallBack: data => console.log("截图成功回调", data),
      // fullScreenCallBack: data => console.log("全屏回调", data),
      // getOSDTimeCallBack: data => console.log("获取OSDTime回调", data),
      width: 960,
      height: 540,
    })
    // console.log('player', this.player)
    // setTimeout(()=>{
    //   player.stop(); // 方法调用示例，10秒后关闭视频
    // },10000)
    // this.$nextTick(() => {})
  },
}
</script>
<style scoped>
/* #playWind {
  width: 960px;
  height: 540px;
}
#canvas0 {
  width: 960px;
  height: 540px;
} */
</style>
