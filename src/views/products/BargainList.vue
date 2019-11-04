<template>
<!-- 全民砍价 -->
  <div id="app">
      <Bargain_list :list="dataList"></Bargain_list>
  </div>
</template>

<script>
import Bargain_list from "../../components/products/Bargain-list"
import Product from "../../services/product-service"
const _product = new Product()
export default {
  name: 'banner',
  components:{Bargain_list},
  data(){
      return {
          dataList:[],
      }
  },
  created(){
      console.log(1)
      // pending - 等待
    // _product.BargainList().then(res => {
    //   console.log(res)
    //   this.dataList=res.data.data
    // })
  }
}
</script>

<style>

</style>
