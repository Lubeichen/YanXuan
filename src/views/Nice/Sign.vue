<template>
  <div id="app">
    <!-- 签到 -->
    <div class="sign_box">
      <div class="sign_top">
        <p>您的可用积分为</p>
        <h3>999</h3>
      </div>
      <div class="sign_block"></div>
      <div class="sign_sign"><button>签到</button></div>
      <div class="sign_shop">
        <div class="sign_img"><img src="/static/img3/1.jpg" alt=""></div>
        <div class="sign_right">
          <div class="sign_left"><p>消费购物</p><h4>购物完成，确认收货后立即返回积分</h4></div>
          <div class="sign_you"><router-link to="/home" tag="li"><button>去购物</button></router-link></div>
        </div>
      </div>

      <div class="sign_ji">
        <div class="sign_img"><img src="/static/img3/2.jpg" alt=""></div>
        <div class="sign_right">
          <div class="sign_left"><p>积分兑换</p><h4>积分兑好礼，20积分即可兑换礼券</h4></div>
          <div class="sign_you"><router-link to="/voucher" tag="li"><button>去兑换</button></router-link></div>
        </div>
      </div>
      <router-link to="/home" tag="p"><p class="quan"><</p></router-link>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  data(){
    return {

    }
  },
  mounted(){
    this.axios.get('https://api.it120.cc/small4/score/sign/rules').then((res)=>{
      console.log(res)
    })
  }
}
</script>

<style lang="scss" scoped>
.sign_box{
  width: 100%;
  height: auto;
  .quan{
    width: 0.3rem;
    height: 0.3rem;
    border: 1px solid white;
    margin-top: -7.5rem;
    z-index: 10;
    color: white;
    position: absolute;
    border-radius: 50%;
    text-align: center;
    line-height: 0.3rem;
  }
  .sign_top{
    width: 100%;
    height: 3.02rem;
    background: #f3ecdc;
    position: relative;
    p{
      width: 100%;
      height: 0.22rem;
      line-height: 0.22rem;
      font-size: 0.22rem;
      text-align: center;
      color: #999999;
      margin-top: 1.25rem;
      position: absolute;
    }
    h3{
      width: 100%;
      height: 0.32rem;
      font-size: 0.32rem;
      color: #b3a078;
      text-align: center;
      margin-top: 2.02rem;
      position: absolute;
    }
  }
  .sign_block{
    width: 100%;
    height: 0.94rem;
    background: #e8e1cf;
  }
  .sign_sign{
    width: 100%;
    height: 1.16rem;
    button{
      width: 2.3rem;
      height: 0.48rem;
      background: #b3a078;
      color: white;
      border: none;
      outline: none;
      margin-left: 1.54rem;
      margin-top: 0.35rem;
      border-radius: 0.4rem;
      font-size: 0.2rem;

    }
  }
  .sign_shop{
    width: 5rem;
    height: 1rem;
    background: #f4ebe2;
    margin: 0 auto;
    margin-top: 0.22rem;
    display: flex;
    .sign_img{
      width: 0.75rem;
      height: 1rem;
      img{
        width: 0.75rem;
        height: 1rem;;
      }
    }
    .sign_right{
      width: 3.9rem;
      height: 1rem;
      margin-left: 0.1rem;
      .sign_left{
        width: 3rem;
        height: 1rem;
        float: left;
        p{
          font-size: 0.16rem;
          color: #e7c7a8;
          margin-top: 0.24rem;
        }
        h4{
          font-size: 0.14rem;
          color: #e7c7a8;
        }
      }
      .sign_you{
        width: 0.8rem;
        height: 1rem;
        float: right;
        button{
          width: 0.8rem;
          height: 0.4rem;
          background: #e1b68c;
          font-size: 0.16rem;
          color: white;
          border: none;
          outline: none;
          margin-top: 0.34rem;
          border-radius: 0.04rem;
        }
      }
    }
  }

  .sign_ji{
    width: 5rem;
    height: 1rem;
    background: #ede6d6;
    margin: 0 auto;
    margin-top: 0.22rem;
    display: flex;
    .sign_img{
      width: 0.75rem;
      height: 1rem;
      img{
        width: 0.75rem;
        height: 1rem;;
      }
    }
    .sign_right{
      width: 3.9rem;
      height: 1rem;
      margin-left: 0.1rem;
      .sign_left{
        width: 3rem;
        height: 1rem;
        float: left;
        p{
          font-size: 0.16rem;
          color: #c1b18f;
          margin-top: 0.24rem;
        }
        h4{
          font-size: 0.14rem;
          color: #c1b18f;
        }
      }
      .sign_you{
        width: 0.8rem;
        height: 1rem;
        float: right;
        button{
          width: 0.8rem;
          height: 0.4rem;
          background: #b3a078;
          font-size: 0.16rem;
          color: white;
          border: none;
          outline: none;
          margin-top: 0.34rem;
          border-radius: 0.04rem;
        }
      }
    }
  }
}
</style>
