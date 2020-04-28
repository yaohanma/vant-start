<template>
    <div class="mypanel">
        <div class="mypanel-hearder">
            <div class="title"><span :style="{'background':textBac}">{{kemu}}</span>{{title}}</div>
            <p>{{date}}</p>
        </div>
        <slot></slot>
        <van-button v-if="btnStyle==1" @click="sub" color="linear-gradient(to right, #FF8B30, #FF6A20)"  size="large"  round>{{btnFont}}</van-button>
        <van-button v-if="btnStyle==2" @click="sub" plain type="primary" size="large" round>{{btnFont}}</van-button>
    </div>
</template>

<script>
    export default {
        props:{
            // 科目
            kemu:{
                type:String,
                default:''
            },
            // 标题
            title:{
                type:String,
                default:''
            },
            // 日期
            date:{
                type:String,
                default:''
            },
            // 按钮文字
            btnFont:{
                type:String,
                default:''
            },
            // 科目颜色
            textBac:{
                type:String,
                default:'#737E99'
            },
            // 按钮风格，目前两种1，2
            btnStyle:{
                type:Number,
                default:1
            }
        },
        methods:{
            sub(){
                console.log(111)
                this.$emit('abc','234234')
            }
        }
    }
</script>

<style lang="scss" scoped>

  .mypanel-hearder{
    .title{
      font-size:16px;
      font-weight:bold;
      color:#2B2F39;
      span{
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
 
.bg_box{
    width: 90%;
    margin: 0 auto;
    .sub_title{
        width:100%;
        display: flex;
        padding: 10px 0;
        justify-content: space-between;
        span{
            height:12px;
            line-height: 12px;
            
            color: #898D97;
            :nth-child(1){
              flex:1;
            }
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