<template>
  <div class="app">
    <h1>
        <router-link to="/sort" tag="span"><span>《</span></router-link>
        <a>分类商品</a>
    </h1>
  </div>
</template>

<script>

export default {
  name: 'App',
  methods:{
    
  }
}
</script>

<style lang="scss" scoped>
.app{
    width: 100%;
    height: 0.6rem;
    border-bottom: 1px solid #f5f5f5;
    font-size: 0.12rem;
    line-height: 0.6rem;
    font-weight: normal;
    span{
        margin-left: 0.2rem;
    }
    a{
        margin-left: 1.8rem;
    }
}
</style>
