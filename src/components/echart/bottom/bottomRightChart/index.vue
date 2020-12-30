<template>
  <div>
    <Chart :cdata="cdata" />
  </div>
</template>

<script>
import Chart from './chart.vue'
export default {
  data () {
    return {
      cdata: {
        rateData: [],
        timeDate:[],
        temDate:[],
        wetDate:[],
        noiseDate:[],
        pm25:[],
        pm10:[],
        luxDate:[],
      }
    };
  },
  components: {
    Chart,
  },
  created(){
  },
  mounted () {
    
    this.getDate();
  },
  methods: {
    // 根据自己的业务情况修改
    async getDate(){
      var mydata= await this.$axios.get('/dataHard/test')
      .then(res=>res.data.data);
      //console.log(mydata);
      for(var i=mydata.length-1;i>=0;i--){
       var a=JSON.parse(mydata[i].data);
       this.cdata.timeDate.push(mydata[i].time);
       this.cdata.temDate.push(a.temp);
       this.cdata.wetDate.push(a.wet);
       this.cdata.noiseDate.push(a.noise);
       this.cdata.pm25.push(a.pm2_5);
       this.cdata.pm10.push(a.pm10);
       this.cdata.luxDate.push(a.lux);
     }
     //console.log(this.timeDate);
     //console.log(this.temDate)
      

    },
    
  }
};
</script>

<style lang="scss" scoped>
</style>