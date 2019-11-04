<template>
<!-- 人气推荐 -->
  <div id="app">
      <recommend_item :list="dataList"></recommend_item>
  </div>
</template>

<script>
import recommend_item from "../../components/products/recommend-item"
import Product from "../../services/product-service"
const _product = new Product()
export default {
  name: 'banner',
  components:{recommend_item},
  data(){
      return {
          dataList:[]
      }
  },
  created(){
      // console.log(1)
      // pending - 等待
    _product.recommend().then(res => {
      // console.log(res)
      this.dataList=res.data.data
      this.dataList = this.dataList.splice(8, 4);
    })
  }
}
</script>

<style>

</style>
