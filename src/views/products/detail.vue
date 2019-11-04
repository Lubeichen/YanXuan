<template>
</template>

<script>
/**
 *detail.vue Created by SmallFour on 2019/10/22/15:01
 */
import Product from '../../services/product-service'
const _product = new Product()
export default {
  name: 'detail',
  created () {
    let { id } = this.$route.query
    _product.detail(id).then(res => {
      console.log(res)
    })
  }
}
</script>

<style scoped>

</style>
