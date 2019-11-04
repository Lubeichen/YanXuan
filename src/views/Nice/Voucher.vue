<template>
  <div id="app">
    <!-- 礼券 -->
    <div class="voucher_box">
      <div class="voucher_top"><img src="/static/img3/3.png" alt=""></div>
      <div class="voucher_input">
        <input type="text" placeholder="请输入礼券码">
        <button>兑换</button>
      </div>
      <div class="voucher_nice"><img src="/static/img3/4.png" alt=""></div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Voucher',
  methods:{
    
  }
}
</script>

<style lang="scss" scoped>
.voucher_box{
  width: 100%;
  height: auto;
  .voucher_top{
    width: 100%;
    height: 2.14rem;
    img{
      width: 100%;
      height: 2.14rem;
    }
  }
  .voucher_input{
    width: 4.88rem;
    height: 1.04rem;
    margin: 0 auto;
    background: #fefefe;
    border: 1px solid #f2c88c;
    border-radius: 0.1rem;
    input{
      width: 3.13rem;
      height: 0.45rem;
      border: 1px solid #fba164;
      margin-left: 0.26rem;
      margin-top: 0.26rem;
      font-size: 0.2rem;
      color: #fab05c;
      outline: none;
      padding-left: 0.15rem;
      border-radius: 0.1rem;
    }
    button{
      width: 0.86rem;
      height: 0.48rem;
      border: none;
      outline: none;
      background: #ee7c7b;
      color: white;
      font-size: 0.14rem;
      border-radius: 0.06rem;
    }
  }
  .voucher_nice{
    width: 4.88rem;
    height: 3.64rem;
    margin: 0 auto;
    margin-top: 0.38rem;
    img{
      width: 4.88rem;
      height: 3.64rem;
    }
  }
}
</style>
