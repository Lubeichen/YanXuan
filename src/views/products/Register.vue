<template>
  <!-- 轮播图 -->
  <div id="app">
      <register_item :list="dataList"></register_item>
  </div>
</template>

<script>
import register_item from "../../components/products/register-item"
// import Product from "../../services/product-service"
// const _product = new Product()
export default {
  name: 'banner',
  components:{register_item},
  data(){
      return {
          dataList:[]
      }
  },
//   created(){
//       console.log(1)
//       // pending - 等待
//     _product.register().then(res => {
//       console.log(res)
//       this.dataList=res.data.data
//     })
//   }
}
</script>

<style>

</style>
