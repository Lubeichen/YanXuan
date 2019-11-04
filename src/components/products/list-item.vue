<template>
<div>
  <router-link :to="{ path: '/detail', query: { id: itemList.id } }">{{ itemList.name }}</router-link>
</div>
</template>

<script>
/**
 *list-item.vue Created by SmallFour on 2019/10/22/14:05
 */
export default {
  name: 'list-item',
  props: ['itemList']
}
</script>

<style scoped>

</style>
