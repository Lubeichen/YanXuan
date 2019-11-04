<template>
  <div id="app">
    <Content></Content>
    <Footer></Footer>
  </div>
</template>

<script>
import Vue from 'vue';
import { Icon } from 'vant';
import { ActionSheet } from 'vant';
Vue.use(Icon);
Vue.use(ActionSheet);
import Content from "../components/products/Content"
import Footer from "../components/products/Footer"
export default {
  name: 'App',
  components:{Content,Footer},
  methods:{
    
  }
}
</script>

<style lang="scss">
body,ul,ol,li,h1,h2,h3,h4,p,dl,dt,dd{
    margin: 0;
    padding: 0;
}
ul,li{
    list-style: none;
}
body{
    font-size: 0.16rem;
    line-height: 0.3rem;
}
body,html{
    height: 100%;
    display: flex;
    flex-direction: column;
}
</style>
