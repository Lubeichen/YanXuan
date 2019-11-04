<template>
    <!-- 全民砍价 -->
    <div class="x">
        <div class="bargainlist_cut">立即发起砍价，最低可砍到1元</div>
        <div class="bargainlist_banner">
            <el-carousel height="5rem">
                <el-carousel-item v-for="(item,key) in list" :key="key">
                <h3 class="small">
                    <img :src="item.pic" width="100%" />
                </h3>
                </el-carousel-item>
            </el-carousel>
        </div>
        <p class="bargainlist_title">{{ basicInfo.name }}</p>
        <p class="bargain_title2">{{ basicInfo.characteristic}}</p>
        <div class="bargain_min">底价<span class="span">￥{{ basicInfo.minPrice}}.00</span><p class="bargain_max"><span>原价￥{{ basicInfo.originalPrice }}.00</span><a>库存{{ basicInfo.stores }}</a></p></div>   
        <!-- <div class="bargain_product">
            <ul>
                <li>商品介绍</li>
                <li>商品评价</li>
            </ul>
        </div> -->
        <div class="bargain_promise">
            <div class="v" v-html="category.content"></div>
        </div>
        <!-- <div class="bargainlist_cut">立即发起砍价，最低可砍到1元</div> -->
    </div>
</template>
<script>
export default {
  name: 'Bargain-list',
  data(){
      return{
          list:[],
          basicInfo:'',
          category:''
      }
  },
  mounted(){
      this.axios.post(`https://api.it120.cc/small4/shop/goods/detail?id=${this.$route.params.id}`).then((res)=>{
          console.log(res.data)
          var data=res.data.data.pics
          this.list=data
      })

      this.axios.post(`https://api.it120.cc/small4/shop/goods/detail?id=${this.$route.params.id}`).then((res)=>{
          this.basicInfo=res.data.data.basicInfo
      })

      this.axios.post(`https://api.it120.cc/small4/shop/goods/detail?id=${this.$route.params.id}`).then((res)=>{
          console.log(res)
          this.category=res.data.data
      })
  }
}
</script>
<style lang="scss" scoped>
.bargainlist_cut{
    width: 100%;
    height: 0.9rem;
    background: #b7282e;
    position: fixed;
    bottom: 0;
    z-index: 10;
    text-align: center;
    line-height: 0.9rem;
    color: white;
    font-size: 0.2rem;
}
</style>
