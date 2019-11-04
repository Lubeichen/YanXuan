<template>
  <!-- 精选专题 -->
  <div id="app">
    <div class="Selected">
      <p class="p">
        <router-link to="/column" tag="li">
          <span>精选专题</span>
          <img src="/static/img2/bg1.png" />
        </router-link>
      </p>
      <div class="Selected_box" ref="wrapper">
        
            <ul>
                <li v-for="(item,key) in list" :key="key">
                  <div class="Selected_img"><img :src="item.pic" alt=""></div>
                  <p>{{ item.title }}</p>
                  <p class="Selected_p">{{ item.descript }}</p>
                </li>
            </ul>
      </div>
    </div>
    <!-- <router-view></router-view> -->
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'selected-item',
  props:['list'],
  data(){
      return {

      }
  },
  mounted(){
      this.$nextTick(()=>{
      this.scroll=new BScroll(this.$refs.wrapper,{
            scrollX: true,
            scrollY: false,
      })
    })
  }
}
</script>

<style>

</style>
