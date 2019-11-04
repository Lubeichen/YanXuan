<template>
  <div class="box">
    <Cut_item :list="dataList"></Cut_item>
  </div>
</template>

<script>
import Cut_item from "../../components/Nice/cut-item"
import Product from "../../services/product-service"
const _product = new Product()
export default {
  name: 'cut',
  components:{Cut_item},
  data(){
      return {
          dataList:[]
      }
  },
  created(){
      console.log(1)
      // pending - 等待
    _product.Cut().then(res => {
      console.log(res)
      for (let i in res.data.data.goodsMap) {
          this.dataList.push(res.data.data.goodsMap[i]);
        }
        this.dataList = this.dataList.splice(1, 6);
    })
  }
}
</script>

<style lang="scss" scoped>

</style>
