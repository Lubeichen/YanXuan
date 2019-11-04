<template>
  <div>
    <h2>列表视图</h2>
    <!-- <list-item v-for="item in dataList" :item-list="item" /> -->
    <ListItem v-for="(item,key) in dataList" :item-list="item" :key="key"></ListItem>
  </div>
</template>

<script>
/**
 *list.vue Created by SmallFour on 2019/10/22/14:05
 * VC层
 */
import ListItem from '../../components/products/list-item'
import Product from '../../services/product-service'
const _product = new Product()
export default {
  name: 'list',
  components: {
    ListItem
  },
  data () {
    return {
      dataList: []
    }
  },
  created () {
    // pending - 等待
    _product.list().then(res => {
      console.log(res)
      let { data } = res.data
      this.dataList = data
    })
  }
}
</script>

<style scoped>

</style>
