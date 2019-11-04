<template>
    <div class="box">
        <div class="mine_me">
            <div class="mine_me_z">
                <p class="p"><i class="el-icon-service"></i></p>
                <h4><router-link to="/login_item" tag="li">点击登录</router-link><span>积分：0</span></h4>
            </div>
        </div>
        <div class="mine_nice">
            新上线更稳定的付费快递查询接口
        </div>
        <div class="mine_my">
            <i class="el-icon-document"></i>我的订单<span>></span>
        </div>
        <div class="mine_si">
            <ul>
                <li><i class="el-icon-goods"></i><span>待付款</span></li>
                <li><i class="el-icon-printer"></i><span>待发货</span></li>
                <li><i class="el-icon-loading"></i><span>待收货</span></li>
                <li><i class="el-icon-message"></i><span>待评价</span></li>
            </ul>
        </div>
        <div class="mine_wu">
            <ul>
                <li><van-icon class="van-icon" name="gold-coin-o" /><span>我的余额</span></li>
                <li><van-icon class="van-icon" name="cash-back-record" /><span>我的砍价</span></li>
                <li><van-icon class="van-icon" name="debit-pay" /><span>我的礼券</span></li>
                <li><van-icon class="van-icon" name="like-o" /><span>我的收藏</span></li>
                <li><router-link to="/addres" tag="span"><van-icon class="van-icon" name="location-o" /><span>我的地址</span></router-link></li>
                <li><van-icon class="van-icon" name="service-o" /><span>联系客服</span></li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Main',
  data(){
      return{
          
      }
  }
}
</script>

<style lang="scss" scoped>

</style>
