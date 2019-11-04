<template>
    <div class="app">
        <ul>
            <li><router-link to="/home"><span><van-icon name="wap-home-o" /></span>首页</router-link></li>
            <li><router-link to="/sort"><span><van-icon name="shop-collect-o" /></span>分类</router-link></li>
            <li><router-link to="/shopcar"><span><van-icon name="cart-o" /></span>购物车</router-link></li>
            <li><router-link to="/mine"><span><van-icon name="contact" /></span>个人</router-link></li>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'Footer',
  data(){
      return{
          
      }
  }
}
</script>

<style lang="scss" scoped>
.app{
    bottom: 0rem;
    height: 0.9rem;
    width: 100%;
    background: white;
    position: fixed;
    ul{
        list-style: none;
        display: flex;
        li{
            width: 25%;
            text-align: center;
            // line-height: 0.9rem;
            font-size: 0.2rem;
            a{
                color: #000;
                text-decoration: none;
            }
            span{
                display: block;
                font-size: 0.4rem;
            }
        }
    }
}
</style>
