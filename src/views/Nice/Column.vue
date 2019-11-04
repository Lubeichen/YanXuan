<template>
    <div class="app">
        <!--严选栏-->
        <div class="box">
            <p class="column_p">
                <router-link to="/home" tag="span"><span>《</span></router-link>
                <a>严选栏</a>
            </p>
            <div class="column_box" v-for="(item,key) in list" :key="key">
                <img :src="item.pic" alt="">
                <p class="column_font1">{{ item.title }}</p>
                <p class="column_font2">{{ item.descript }}</p>
                <p class="column_font3"><router-link :to="'/columnXQ/'+item.id" tag="li">查看详情</router-link></p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Footer',
  data(){
      return{
          list:[]
      }
  },
  mounted(){
      this.axios.get('https://api.it120.cc/small4/cms/news/list').then((res)=>{
          console.log(res)
          this.list=res.data.data
      })
  }
}
</script>

<style lang="scss" scoped>
.app{
    width: 100%;
    height: auto;
    background: white;
    .box{
        width: 5rem;
        height: auto;
        margin: 0 auto;
        .column_p{
            width: 100%;
            height: 0.9rem;
            background: white;
            font-size: 0.2rem;
            color: #333333;
            line-height: 0.9rem;
            span{
                margin-left: 0.2rem;
            }
            a{
                margin-left: 1.8rem;
            }
        }
        .column_box{
            width: 100%;
            height: 2.8rem;
            margin-top: 0.1rem;
            position: relative;  
            display: inline-block;
            img{
                width: 100%;
                height: 2.8rem;
            }
            p{
                width: 4.44rem;
                margin: 0 auto;
                margin-left: 0.4rem;
            }
            .column_font1{
                width: 4.44rem;
                position: absolute;  
                margin-top: -1.84rem; 
                text-align: center;
                font-size: 0.3rem; 
                color: #fff;  
                overflow:hidden;
                white-space:nowrap;
                text-overflow:ellipsis;
            }
            .column_font2{
                width: 4.44rem;
                position: absolute;  
                margin-top: -1.25rem;  
                color: #fff;  
                text-align: center;
                font-size: 0.22rem;
                overflow:hidden;
                white-space:nowrap;
                text-overflow:ellipsis;
            }
            .column_font3{
                width: 1.2rem;
                height: 0.4rem;
                overflow:hidden;
                white-space:nowrap;
                text-overflow:ellipsis;
                margin: 0 auto;
                margin-top: -0.56rem;
                border: 1px solid white;
                color: white;
                border-radius: 0.2rem;
            }
        }
    }
}
</style>
