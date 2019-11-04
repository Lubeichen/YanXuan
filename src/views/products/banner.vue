<template>
  <!-- 轮播图 -->
  <div id="app">
      <banner_item :list="dataList"></banner_item>
  </div>
</template>

<script>
import banner_item from "../../components/products/banner-item"
import Product from "../../services/product-service"
const _product = new Product()
export default {
  name: 'banner',
  components:{banner_item},
  data(){
      return {
          dataList:[]
      }
  },
  created(){
      // console.log(1)
      // pending - 等待
    _product.banner().then(res => {
      // console.log(res)
      this.dataList=res.data.data
    })
  }
}
</script>

<style>

</style>
