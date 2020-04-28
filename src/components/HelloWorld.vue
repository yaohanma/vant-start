<style lang="scss" scoped>
#app{
  height:100%;

  background: #F7F8FA;
}
  .van-cell-group{
    border-radius: 10px;
    .van-cell__title{
      color: #ccc;
      font-size: 16px;
    }
    .van-cell__label{
      color:#565D6B;

    }
    .van-panel__content{
      margin-top: 35px;
        .van-col{
          display:flex;
        }   

        .ter_img{
          width:32px;
          height:32px;
          border-radius:8px;
          display: inline-block;
          background:#DEE4EF;
          text-align: center;
          line-height: 32px;
          font-size: 16px;
      }
      .name_box{
         flex:1;
         span{
           display: block;
         }
      } 
    }
    
    
  }
    .bg_box{
       width: 90%;
       margin: 0 auto;
        p{
            width:100%;
            display: flex;
            padding: 10px 0;
            span{
                height:12px;
                line-height: 12px;
            
                flex:1;
                color: #898D97;
                i{
                    display: inline-block;
                    width: 2px;
                    height: 100%;
                    border-radius: 1px;
                    background: #BDC0C8;
                    margin-right:10px;
                }
            }
        }
    }

</style>
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
      <p>
           <span><i></i>测评已完成</span>
            <span>提交时间：2020-04-04 20:00</span>
      </p>
      <van-panel title="2020春-四年级语文同步公开课" desc="9月4日-1月1日每周五18:30-20:40" >
        <van-row>
          <van-col span="6">
            <span class="ter_img">辅</span>
            <div class="name_box">
              <span>李斯斯</span>
              <span>主讲</span>
            </div>   
          </van-col>
          <van-col span="6" >
            <span class="ter_img">辅</span>
            <div class="name_box">
              <span>李斯斯</span>
              <span>主讲</span>
            </div>   
          </van-col>
        </van-row>       
        <template #footer>
          <van-button plain type="primary" round style="width:100%">查看结果</van-button>
        </template>
      </van-panel>
      <p>
        <span><i></i>测评已完成</span>
        <span>提交时间：2020-04-04 20:00</span>
      </p>
      <van-panel title="2020春-四年级语文同步公开课" desc="你需要完成测评，才能为你选择适合的老师哦！" >
        <!-- <van-row>
          <van-col span="6">
            <span class="ter_img">辅</span>
            <div class="name_box">
              <span>李斯斯</span>
              <span>主讲</span>
            </div>   
            </van-col>
              <van-col span="6" >
                <span class="ter_img">辅</span>
                <div class="name_box">
                  <span>李斯斯</span>
                  <span>主讲</span>
                </div>   
            </van-col>
        </van-row>        -->
        <template #footer>
          <van-button color="linear-gradient(to right, #FF8B30, #FF6A20)" style="width:100%" round>开始测评</van-button>
        </template>
      </van-panel>
    </div>
  </div>
</template>

<script>
  export default {
      components: {
         
      },
    data() {
      return{
      }
    },

  };
</script>