<template>
  <!-- 人气推荐 -->
  <div id="app">
    <div class="recommend">
      <p class="p">
        <span>人气推荐</span>
        <img src="/static/img2/bg1.png" />
      </p>
      <ul>
        <li v-for="(item,key) in list" :key="key">
          <div class="recommend_clack">
            <div class="recommend_img"><router-link :to="'/recommendlist/'+item.id"><img :src="item.pic"></router-link></div>
            <p>{{ item.characteristic }}</p>
            <p class="p1">￥{{ item.pingtuanPrice }}</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'recommend-item',
  props:['list'],
  data(){
      return {}
  }
}
</script>

<style>

</style>
