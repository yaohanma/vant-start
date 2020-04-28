<style lang="scss" scoped>

</style>
<template>
  <div id="app" class="home">
    <van-nav-bar
      title="入学评测"
      left-arrow
    />
    <div class="half-circle-box">
      <!-- <half-circle :options="options" :value="rate" style="width:50%;"></half-circle> -->
      <div>
        <div></div>
      </div>
    </div>
    
  </div>
</template>

<script>
  // import halfCircle from '../../components/HalfCircle'
  export default {
      components: {
        // halfCircle
      },
    data() {
      return{
        options:{
          durTime: 1200,
          emptyColor: '#DFDFDF',
          // negativeColor: '#FF8B30',
          // positiveColor: '#FF6A20',
          srtokeWidth:8,
          radius: 50

        },
        rate:'0.8'

      }
    },

  };
</script>
