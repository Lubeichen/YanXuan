<template>
  <div class="app">
    <div class="box">
        <p class="columnXQ_p">
            <router-link to="/column" tag="span"><span>《</span></router-link>
            <a>专题详情</a>
        </p>
            <div class="columnXQ_img"><img :src="list.pic" alt=""></div>  
            <p class="columnXQ_font">北辰</p>
            <p class="columnXQ_title">{{list.title}}</p>
            <hr class="hr">
            <div class="columnXQ_imgb"><img :src="list.pic" alt=""></div>
            <div class="columnXQ_content" v-html="list.content"></div>
    </div>
   
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
      return{
          list:''
      }
  },
  mounted(){
      this.axios.get(`https://api.it120.cc/small4/cms/news/detail?id=${this.$route.params.id}`).then((res)=>{
          console.log(res.data)
          var data=res.data.data
          this.list=data
      })
  }
}
</script>

<style lang="scss" scoped>
.app{
    width: 100%;
    height: auto;
    .box{
        width: 5rem;
        height: auto;
        margin: 0 auto;
        .columnXQ_p{
            width: 100%;
            height: 0.9rem;
            font-size: 0.2rem;
            color: #333333;
            line-height: 0.9rem;
            span{
                margin-left: 0.15rem;
            }
            a{
                margin-left: 1.8rem;
            }
        }
        .columnXQ_img{
            width: 1rem;
            height: 0.58rem;
            margin: 0 auto;
            margin-top: 0.2rem;
            img{
                width: 1rem;
                height: 0.58rem;
            }
        }
        .columnXQ_font{
            width: 100%;
            height: 1.1rem;
            text-align: center;
            font-size: 0.2rem;
            color: #dedede;
            line-height: 1.1rem
        }
        .columnXQ_title{
            width: 100%;
            height: 0.64rem;
            font-size: 0.32rem;
            color: #333333;
            text-align: center;
        }
        .hr{
            width: 1.07rem;
            background: #bb9161;
        }
        .columnXQ_imgb{
            width: 100%;
            height: 3.46rem;
            margin-top: 0.4rem;
            img{
                width: 100%;
                height: 3.46rem;
            }
        }
        .columnXQ_content{
            width: 100%;
            line-height: 0.45rem;
            font-size: 0.2rem;
            color: #333333;
        }
    }
}
</style>
