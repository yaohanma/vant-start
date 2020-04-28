<template>
  <div id="app">
    <!-- hearder -->
    <van-nav-bar
      title="我的测评"
      left-arrow
    />
    <!-- hearder -->
    <!-- 内容 开始 -->
    <div class="bg_box">
      <p class="sub_title">
        <span><i></i>测评已完成</span>
        <span>提交时间：2020-04-04 20:00</span>
      </p>

      <el-footer :btnStyle="2" textBac="#ff0011" kemu='数学' :title="params.tits" :date="params.da" btnFont="开始测评" @abc="setDa">
        <van-row>
          <van-col span="8" type="flex" justify="space-around">
            <span class="ter_img">辅</span>
            <div class="name_box">
              <div>李斯斯</div>
              <div>主讲</div>
            </div> 
          </van-col>
          <van-col span="8" type="flex" justify="space-around">
            <span class="ter_img">辅</span>
            <div class="name_box">
              <div>李斯斯</div>
              <div>主讲</div>
            </div> 
          </van-col>
          <van-col span="8" type="flex" justify="space-around"></van-col>
        </van-row>
      </el-footer>

    </div>
    <div class="bg_box">
      <p class="sub_title">
        <span><i></i>测评未完成</span>
        <span>提交时间：2020-04-04 20:00</span>
      </p>
      <el-footer :btnStyle="1" textBac="#ff0011" kemu='数学' :title="params.tits" :date="params.da" btnFont="开始测评" @abc="setDa"></el-footer>
    </div>
  </div>
</template>

<script>
  import footer from '../star_components/footer'
  export default {
      components: {
         'el-footer':footer
      },
    data() {
      return{
        params:{
          tits:'2020春-四年级语文同步公开课',
          da:'9月4日-1月1日每周五18:30-20:40',
        }
      }
    },
    methods:{
      setDa(data){
        console.log(data)
      }
    }

  };
</script>
<style lang="scss" scoped>
.mypanel{
  border-radius: 10px;
  padding:15px;
  background: #fff;
  box-shadow:0px 5px 16px 4px #EDF2F8;
  .mypanel-hearder{
    .title{
      font-size:16px;
      font-weight:bold;
      color:#2B2F39;
      span{
        background: #737E99;
        border-radius: 3px;
        color:#fff;
        font-weight:100;
        font-size: 10px;
        padding: 2px;
        margin-right: 10px;
    
      }
    }
    p{
      color: #565D6B;
    }
  }
  .van-col{
      display: flex;
      .ter_img{
        width:32px;
        height:32px;
        background:#DEE4EF;
        border-radius:8px;
        font-size:16px;
        font-weight:bold;
        color:#A3ABBB;
        text-align: center;
        line-height: 32px;
        margin-bottom: 15px;
      }
      .name_box{
        flex: 1;
        margin-left: 10px;
        :nth-child(1){
          color:#2B2F39;
          font-size: 14px;
        }
        :nth-child(2){
          color:#898D97;
          font-size: 12px;
        }
      }
    }
}


</style>