<template>
  <div id="app">
    <div class="addres_box">
        <h1><router-link to="/mine" tag="span"><span>></span></router-link><a>我的地址</a></h1>
    </div>
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
.addres_box{
    width: 100%;
    height: 1rem;
    background: #f5f5f5;
    h1{
        width: 100%;
        height: 0.76rem;
        background: white;
        font-size: 0.2rem;
        line-height: 0.76rem;
        span{
            margin-left: 0.34rem;
        }
        a{
            margin-left: 1.84rem;
        }
    }
}
</style>
