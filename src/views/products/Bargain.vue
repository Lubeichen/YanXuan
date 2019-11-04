<template>
<!-- 全民砍价 -->
  <div id="app">
      <Bargain_item :list="dataList"></Bargain_item>
  </div>
</template>

<script>
import Bargain_item from "../../components/products/Bargain-item"
import Product from "../../services/product-service"
const _product = new Product()
export default {
  name: 'banner',
  components:{Bargain_item},
  data(){
      return {
          dataList:[],
      }
  },
  created(){
      // console.log(1)
      // pending - 等待
    _product.Bargain().then(res => {
      // console.log(res)
      for (let i in res.data.data.goodsMap) {
          this.dataList.push(res.data.data.goodsMap[i]);
        }
        this.dataList = this.dataList.splice(1, 3);
    })
  }
}
</script>

<style>

</style>
