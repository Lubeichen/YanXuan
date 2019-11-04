<template>
    <div class="box">
        <p>购物车</p>
        <div class="box_b">
            <span><van-icon class="van" name="shopping-cart-o" /></span>
            <h3>去添加点什么吧</h3>
        </div>

        
    </div>
</template>

<script>
export default {
  name: 'ShopCar',
  data(){
      return{
          
      }
  }
}
</script>

<style lang="scss" scoped>
.box{
    width: 100%;
    height: auto;
    p{
        width: 100%;
        height: 0.56rem;
        background: white;
        font-size: 0.2rem;
        line-height: 0.56rem;
        text-align: center;
    }
    .box_b{
        width: 100%;
        height: auto;
        background: #f5f5f5;
        .van{
            font-size: 1.5rem;
            margin-left: 2rem;
            margin-top: 0.4rem;
        }
        h3{
            width: 100%;
            text-align: center;
            font-weight: normal;
        }
    }
}
</style>
