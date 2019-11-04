<template>
  <div class="enroll">
        <div class="boxxx">
    <div class="tltle">
      <h4>新用户注册</h4>
      <p>很高兴您将成为商城的会员（注册只需一步）</p>
    </div>
    <div class="info">
      <label>
        <input v-model="ty.number" type="text" placeholder="手机号" />
        <i class="el-icon-mobile-phone"></i>
      </label>
      <label>
        <input v-model="ty.user" type="text" placeholder="密码" />
        <i class="el-icon-mobile-phone"></i>
      </label>
      <label>
        <input v-model="ty.user2" type="text" placeholder="确认密码" />
        <i class="el-icon-mobile-phone"></i>
      </label>
      <label>
        <input v-model="ty.massage" type="text" placeholder="用户名" />
        <i class="el-icon-mobile-phone"></i>
      </label>
      <label>
        <input v-model="ty.code" type="text" placeholder="图形验证码" />
        <img
          id="imgIdentifyingCode"
          style="height:40px; width: 100px; cursor: pointer;"
          :src="`https://api.it120.cc/small4/verification/pic/get?key=${this.ty.data}`"
          alt="点击更换"
          title="点击更换"
          @click="getIdentifyingCode(true)"
        />
      </label>
      <P>选择省-选择市</P>
      <!-- <el-form style="width: 400px;">
<el-form-item style="height: 40px;margin-bottom: 20px;">
<el-input class="input" maxlength="8" placeholder="请输入验证码"></el-input>
<div class="divIdentifyingCode" @click="getIdentifyingCode(true)">
< img id="imgIdentifyingCode" style="height:40px; width: 100px; cursor: pointer;" alt="点击更换"
title="点击更换" />
</div>
</el-form-item>
      </el-form>-->
      <label>
        <input v-model="ty.codeUser" type="text" placeholder />
        <span @click="att">获取验证码</span>
      </label>
    </div>
    <div class="bottom">
      <button @click="add">立即注册</button>
      <router-link to="/login_item" tag="h5">已有账号？立即登录</router-link>
    </div>
    </div>
  </div>
</template>

<script>
import Product from "../../services/product-service";
const _product = new Product();
export default {
  data() {
    return {
      ty: {
        number: "",
        user: "",
        user2: "",
        massage: "",
        code: "",
        codeUser: "",
        data: new Date().getTime()
      }
    };
  },
  methods: {
    add() {
      _product.enroll(this.ty).then(res => {
        // console.log(res)
        if (res.data.code == 10000) {
          // localtion.href="/"
          alert('注册成功')
          this.$router.push("/");
        }else{
            alert("注册失败")
        }
      });
    },
    att() {
      _product.code(this.ty).then(res => {
        console.log(res);
      });
    },
    getIdentifyingCode() {
      this.ty.data = new Date().getTime();
    }
  },
  created() {
    console.log(this.sj);
  }
};
</script>

<style scoped>
@import url("../../assets/css/enroll.css");
.divIdentifyingCode {
  position: absolute;
  top: 0;
  right: 0;
  z-index: 5;
  width: 102px; /*设置图片显示的宽*/
  height: 40px; /*图片显示的高*/
  background: #e2e2e2;
  margin: 0;
}
</style>