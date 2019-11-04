<template>
  <!-- 轮播图 -->
  <div id="app">
    <div class="block">
      <el-carousel height="5.18rem">
        <el-carousel-item v-for="(item,key) in list" :key="key">
          <h3 class="small">
            <img :src="item.picUrl" width="100%" />
          </h3>
        </el-carousel-item>
      </el-carousel>
    </div>


    <div class="nav">
      <ul>
        <li>
          <router-link to="/sign" tag="li">
            <img src="/static/img2/cd1.png" alt />
            <p>签到</p>
          </router-link>
        </li>
        <li>
          <router-link to="/voucher" tag="li">
            <img src="/static/img2/cd2.png" alt />
            <p>礼券</p>
          </router-link>
        </li>
        <li>
          <router-link to="/cut" tag="li">
            <img src="/static/img2/cd2.png" alt />
            <p>砍价</p>
          </router-link>
        </li>
        <li>
          <router-link to="/column" tag="li">
            <img src="/static/img2/cd4.png" alt />
            <p>专栏</p>
          </router-link>
        </li>
      </ul>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'banner-item',
  props:['list'],
  data(){
      return {

      }
  }
}
</script>

<style>

</style>
