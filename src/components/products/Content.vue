<template>
    <div class="app">
        <!-- 内容部分 -->
        <router-view></router-view>
    </div>
</template>

<script>
export default {
  name: 'Content',
  data(){
      return{
          
      }
  }
}
</script>

<style lang="scss" scoped>
.app{
    // height: 7.3rem;
    flex-grow: 1;
    min-height: 104%;
    overflow: hidden;
    font-size: 0.3rem;
}
</style>
