<template>
  <!-- 砍价 -->
  <div id="app">
    <div class="top">
      <router-link to="/home" tag="span"><span>《</span></router-link>
      <a>砍价列表</a>
    </div>
    <div class="cut_list" v-for="(item,key) in list" :key="key">
        <div class="cut_list_box">
            <div class="cut_img"><router-link :to="'/bargainlist/'+item.id"><img :src="item.pic" alt=""></router-link></div>
            <div class="cut_right">
                <p>{{ item.name }}</p>
                <p class="p">{{ item.characteristic }}</p>
                <div class="cut_zhong">
                    <p>￥{{ item.minPrice }}.00<span>底价</span></p>
                    <p>￥{{ item.originalPrice}}.00<span>原价</span></p>
                    <p>{{ item.minScore }}件<span>数量</span></p>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'cut-item',
  props:['list'],
  data(){
      return {

      }
  }
}
</script>

<style>

</style>