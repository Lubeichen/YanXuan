<template>
  <div class="app">
    <div class="login_box">
        <div class="login_box_b">
            <h1>账号登录</h1>
            <p>晨光-严选商城欢迎你</p>
            <div class="login_input">
              <input type="text" placeholder="手机号" v-model="phone">
              <span><van-icon class="van-icon" name="phone-o"/></span>
            </div>
          <div class="login_input">
            <input type="password" placeholder="密码" v-model="password" ref="password">
            <span><van-icon class="van-icon" name="closed-eye" @click="text" :class="{blue:isShow}"/></span>
          </div>

            <button class="login_button" @click="login(phone,password)">登录</button>
            <div class="login_mi">忘记密码</div>
            <div class="login_zhu"><router-link to="/register" tag="li">还没有注册？立即注册</router-link></div>
        </div>
    </div>
  </div>
</template>

<script>
import Product from "../../services/product-service"
const _product = new Product()
export default {
  name: 'login-item',
  // props:['list'],
  data(){
    return{
      dataList:[],
      phone:'',
      password:'',
      isShow:false
    }
  },
  methods:{
    text(){
        if(this.$refs.password.type=="password"){
          this.$refs.password.type="text"
        }else if(this.$refs.password.type=="text"){
          this.$refs.password.type="password"
        }
        this.isShow=!this.isShow
      },
      login(phone,password){
          let obj={
            mobile:phone,
            pwd:password
          }
          _product.login(obj).then(res=>{
            if(res.data.code==0){
              this.$router.push('/')
              alert('登录成功')
            }else{
              alert("手机号错误")
            }
            
          })
      }
  }
}
</script>

<style lang="scss">

</style>
