<template>
  <div id="app">
    <van-nav-bar
      title="静夜思课后试卷2"
      right-text="提交"
      left-arrow
    />
    <!-- 倒计时 -->
    <div class="count-down-box"> 
      倒计时
      <van-count-down :time="time" />
    </div>
    <div class="bg_box">
      <div class="hearder_box">
        <van-row>
          <van-col span="8">判断题</van-col>
          <van-col span="8" style="text-align: center;">1/10</van-col>
          <van-col span="8" style="text-align: right;">
            <van-button plain  size="mini" class="mybtn">答题卡</van-button>
          </van-col>
        </van-row>
      </div>
    
      <div style="height:calc(100vh - 130px)">      
        <van-swipe :loop="false" style="height:100%" :show-indicators="false" >
          <van-swipe-item > 
            <div class="question">单选题作答样式单选题作答样式单选题作答样式单选题作答样式单选题作答样式单选题作答样式单选题作答样式</div>
            <div class="answers ft_30">
              <label class="answers-cell-item">
                <input type="radio" name="radio">
                <span class="cell-checkbox-icon">A</span>
                <span class="cell-checkbox-text">深蓝1/30/左对齐/正常深蓝1/30/左对齐/正常深蓝1/30/左对齐/正常深蓝1/30/左对齐/正常深蓝1/30/左对齐/正常深蓝1/30/左对齐/正常深蓝1/30/左对齐/正常深蓝1/30/左对齐/正常	</span>
              </label>
              <label class="answers-cell-item">
                <input type="radio" name="radio">
                <span class="cell-checkbox-icon">B</span>
                <span class="cell-checkbox-text">深蓝1/30/左对齐/正常	</span>
              </label>
              <label class="answers-cell-item">
                <input type="radio" name="radio">
                <span class="cell-checkbox-icon">C</span>
                <span class="cell-checkbox-text">深蓝1/30/左对齐/正常	</span>
              </label>
              <label class="answers-cell-item">
                <input type="radio" name="radio">
                <span class="cell-checkbox-icon">D</span>
                <span class="cell-checkbox-text">在平面直角坐标系中，将一个三角形各点的纵在平面直角坐标系中，将一个三角形各点的纵在平面直角坐标系中，将一个三角形各点的纵在平面直角坐标系中，将一个三角形各点的纵在平面直角坐标系中，将一个三角形各点的纵</span>
              </label>
            </div>
          </van-swipe-item>
          <van-swipe-item>
            <div class="question">多选作答样式 跟单选一样， input type="radio"改为type="checkbox"</div>
            <div class="answers">
              <label class="answers-cell-item" for="myCheck1">
                <input type="checkbox" id="myCheck1">
                <span class="cell-checkbox-icon">A</span>
                <span class="cell-checkbox-text">哈哈哈哈哈哈哈哈哈哈哈</span>
              </label>
              <label class="answers-cell-item" for="myCheck2">
                <input type="checkbox" id="myCheck2" >
                <span class="cell-checkbox-icon">B</span>
                <span class="cell-checkbox-text">在平面直角坐标系中，将一个三角形各点的纵在平面直角坐</span>
              </label>
              <label class="answers-cell-item" for="myCheck3">
                <input type="checkbox" id="myCheck3" >
                <span class="cell-checkbox-icon">C</span>
                <span class="cell-checkbox-text">在平面直角坐标系中，将一个三角形各点的纵在平面直角坐</span>
              </label>
              <label class="answers-cell-item" for="myCheck4">
                <input type="checkbox" id="myCheck4">
                <span class="cell-checkbox-icon">D</span>
                <span class="cell-checkbox-text">在平面直角坐标系中，将一个三角形各点的纵在平面直角坐</span>
              </label>
            </div>
          </van-swipe-item>
          <van-swipe-item>
            <div class="question">
                  填空题作答样式填空题作答样式填空题作答样式填空题作答样式
            </div>
            <div class="answers">
                  <div class="answers-cell-item">
                    <span class="cell-checkbox-icon">1</span>
                    <div class="cell-checkbox-text completion_bord">
                      <textarea type="text" placeholder="请输入答案"></textarea>
                    </div>
                  </div>
                
                  <div class="answers-cell-item">
                    <span class="cell-checkbox-icon">2</span>
                    <div class="cell-checkbox-text completion_bord">
                      <textarea type="text" placeholder="请输入答案"></textarea>
                    </div>
                  </div>	
                </div>
          </van-swipe-item>
          <van-swipe-item>
            <div class="question">判断题作答样式</div>
            <div class="answers ft_30">
              <label class="answers-cell-item">

                <input type="radio" name="14_judge"  checked="">
                <span class="cell-checkbox-ture"></span>
                <span class="cell-checkbox-text">对true</span>


              </label>

              <label class="answers-cell-item">

                <input type="radio" name="14_judge" >
                <span class="cell-checkbox-wrong"></span>
                <span class="cell-checkbox-text">错false2</span>


              </label>
            </div>
          </van-swipe-item>
        </van-swipe>
      </div>

    </div>
   
  </div>
</template>

<script>
// import {swiper} from './static/swiper/swiper.js' //注意路径
  export default {
    components: {
    },
    data() {
      return{
        time: 30 * 60 * 60 * 1000,
        current: 0,
   
      }
    },
   

  };
</script>
<style lang="scss" scoped>
    .count-down-box{
      width:100%;
      height:32px;
      line-height: 32px;
      background-color: #FFEFE6;
      color: #FF6B20;
      display: flex;
      justify-content: center;//x轴排列
      align-items: center;//y轴排列
    }
    .van-count-down{
      color: #FF6B20;
    }
    .bg_box{
      width: 90%;
      margin: 0 auto;
    }
    .hearder_box{
      margin: 17px 0;
      .mybtn{
        color:#0493F0;
        border-color:#0493F0;
      }
    }
    // 轮播指示器
    .van-swipe__indicators{
     display: none;
    }
    .question{
      color:#2B2F39;
      font-size:16px;
      font-weight:bold;
      line-height:27px;
      margin-bottom: 30px;
    }
    .answers-cell-item{
      width: 100%;
      display: inline-block;
      display: flex;
      align-items: center;
      margin-bottom: 0.3rem;
      input{
        display: none;
      }
    }
  .cell-checkbox-icon {
    width: 33px;
    height: 33px;
    line-height: 33px;
    text-align: center;
    font-size: 0.32rem;
    border-radius: 50%;
    border: 1px solid #DBE1EC;
    color: #6F7E9E;
    display: inline-block;
    margin-right: 0.2rem;
    font-size: 0.42rem;
  }
  .cell-checkbox-text {
    textarea{
      background-color: #F7F8FA ;
      width:95%;

    }
    font-size: 15px;
    flex: 1;
}
input[type="radio"]:checked + .cell-checkbox-icon, input[type="checkbox"]:not(.m-switch):checked + .cell-checkbox-icon {
    color: #fff;
    background: #4E9CFF;
}
/*判断题 对选项 css*/
.cell-checkbox-ture{
		width:0.88rem;
	  height: 0.88rem;
	  // background-image: url(../../assets/images/ic_panduan_ture_n.png);
		background-position: center;
		background-repeat: no-repeat;
		background-size:100%;
		display: inline-block;
	    margin-right: 0.2rem;
	}
input[type="radio"]:checked + .cell-checkbox-ture {
    width:0.88rem;
	  height: 0.88rem;
    // background-image: url(../../assets/images/ic_panduan_ture_s.png);
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100%;
    display: inline-block;
    margin-right: 0.2rem;
}
.cell-checkbox-wrong {
    width: 0.88rem;
    height: 0.88rem;
    // background-image: url(../../assets/images/ic_panduan_false_n.png);
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100%;
    display: inline-block;
    margin-right: 0.2rem;
}
input[type="radio"]:checked + .cell-checkbox-wrong {
    width: 0.88rem;
    height: 0.88rem;
    // background-image: url(../../assets/images/ic_panduan_false_s.png);
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100%;
    display: inline-block;
    margin-right: 0.2rem;
}
</style>
