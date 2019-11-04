<template>
<!-- 精选主题 -->
  <div id="app">
      <Selected_item :list="dataList"></Selected_item>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import Selected_item from "../../components/products/Selected-item"
import Product from "../../services/product-service"
const _product = new Product()
export default {
  name: 'banner',
  components:{Selected_item},
  data(){
      return {
          dataList:[]
      }
  },
  created(){
      // console.log(1)
      // pending - 等待
    _product.Selected().then(res => {
      // console.log(res)
      this.dataList=res.data.data
    })
  }
}
</script>

<style>

</style>
