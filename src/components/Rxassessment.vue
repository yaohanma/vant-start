<template>
    <div id="app" class="home">
     <!-- hearder -->
    <van-nav-bar
      title="入学测评"
      left-arrow
    />
    <!-- hearder -->
    <div class="padding_box">
      <div class="text_box">
      欢迎您来到入学测评，本测评的目的是为了给您匹配一个更适合您的老师，来帮助您提高，希望您能认真作答！
      <br/> 本测评的时间为20分钟，加油哦！
      </div>
      <div class="title">选择题</div>
      <div class="ticon_box">
        <van-row>
          <template v-for="obj in alignData">
            <van-col span="5" v-if="obj.isSure" :key="obj.ti">{{ obj.ti }}</van-col>
            <van-col span="5" v-else :key="obj.ti"  style="background:red;color:#fff;" >{{ obj.ti }}</van-col>
          </template>
          
        </van-row>
      </div>
      <div class="title">填空题</div>
      <div class="ticon_box">
        <van-row>
           <van-col span="5" v-for="Completionticon in Completionticons" :key="Completionticon">{{ Completionticon }}</van-col>
        </van-row>
      </div>
      <div class="title">判断题</div>
      <div class="ticon_box">
        <van-row>
          <van-col span="5" v-for="Judgticon in Judgticons" :key="Judgticon">{{ Judgticon }}</van-col>
        </van-row>
      </div>
    </div>
     <div class="btn_box">
        <van-button color="linear-gradient(to right, #FF8B30, #FF6A20)" round size="large">开始作答</van-button>
      </div>
    
  </div>
</template>
<script>
  export default {
      components: {
         
      },
    data() {
      return{
        Choiceticons:["1", "2","3", "4","5", "6","7"],
        Completionticons:["1", "2"],
        Judgticons:["1", "2","3", "4","5", "6","7","8","9","10"],
        alignData:[
          {ti:1,isSure:true},
          {ti:2,isSure:false},
          {ti:3,isSure:true},
          {ti:4,isSure:true},
          {ti:5,isSure:false},
          {ti:6,isSure:true},
          {ti:7,isSure:true},
        ]
      }
    },

  };
</script>
<style lang="scss" scoped>
 .home {
   padding-bottom: 60px;
    // background-color: @white;
    .padding_box{
    width:100%;
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    padding: 15px;
    .text_box{
      color:#2B2F39;
      font-size: 16px;
      font-weight:bold;
    }
    .title{
      color:#333;
      font-size: 15px;
      font-weight:bold;
      margin-top: 28px;
    }
    .ticon_box{
      display: flex;
      .van-col{
        width:44px;
        height:44px;
        line-height: 44px;
        text-align: center;
        background:rgba(246,247,250,1);
        border:1px solid rgba(224,226,234,1);
        border-radius:50%;
        flex:1;
        margin: 12px 15px;
        color:#898D97;
        font-size:17px;

      }
      .van-row>div:nth-child(5n+1){
        margin-left:0;
      }
      .van-row>div:nth-child(5n){
        margin-right:0;
      }

    }
  }
  .btn_box{
    width: 100%;
    margin-top: 49px;
    border-top:1px solid #EAEFF2;
    padding:8px 15px;
    position: fixed;
    bottom: 0;
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    background: #fff;

  }
}

</style>