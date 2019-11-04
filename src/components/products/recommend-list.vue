<template>
    <!-- 全民砍价 -->
    <div class="x">
        <div class="bargainlist_banner">
            <el-carousel height="5rem">
                <el-carousel-item v-for="(item,key) in list" :key="key">
                <h3 class="small">
                    <img :src="item.pic" width="100%" />
                </h3>
                </el-carousel-item>
            </el-carousel>
        </div>
        <p class="bargainlist_title">{{ basicInfo.name }}</p>
        <p class="bargain_title2">{{ basicInfo.characteristic}}</p>
        <div class="bargain_min">底价<span class="span">￥{{ basicInfo.minPrice}}.00</span><p class="bargain_max"><span>原价￥{{ basicInfo.originalPrice }}.00</span><a>库存{{ basicInfo.stores }}</a></p></div>   
        <!-- <div class="bargain_product">
            <ul>
                <li>商品介绍</li>
                <li>商品评价</li>
            </ul>
        </div> -->
        <div class="bargain_promise">
            <div class="v" v-html="category.content"></div>
        </div>
        <!-- 购物车详情 -->
        <div class="recommend_box" v-if="show" >
            <div class="bo" @click="hip()">X</div>
            <div class="recommend_top">
                <div class="recommend_topp">
                    <div class="recommend_img"><img :src="basicInfo.pic" alt=""></div>
                    <div class="recommend_right">
                        <h4>{{ basicInfo.name }}</h4>
                        <p>￥{{ basicInfo.minPrice }}.00</p>
                    </div>
                </div>
            </div>
            <div class="recommend_size">
                <div class="recommend_sizee">
                    <p>牛仔外套</p>
                    <p class="recommend_co" v-for="(item,key) in properties" :key="key" :class="{ specColor:changeColor1 === key}" @click="changeSpec(1,key)">
                        <span class="recommend_code">{{ item.name }}</span>
                    </p>
                </div>
            </div>
            <div class="recommend_num">
                <div class="recommend_numm">
                    <div class="recommend_buy">
                        <div class="recommend_buyy">
                            <span>购买数量</span>
                            <a><button>-</button><input type="text" value="1"><button>+</button></a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="recommend_add">加入购物车</div>
        </div>
        <div class="recommend">
            <ol>
                <li><router-link to="/home"><van-icon name="service-o" /></router-link></li>
                <li><router-link to="/shopcar"><van-icon name="shopping-cart-o" /></router-link></li>
                <li><van-icon name="star-o" /></li>
                <li class="li2" @click="add()">立即购买</li>
                <li class="li1" @click="add()">加入购物车</li>
            </ol>
        </div>
    </div>
</template>
<script>
import Product from "../../services/product-service";
const _product = new Product();
export default {
  name: 'recommend-list',
  data(){
      return{
          list:[],
          basicInfo:'',
          category:'',
          show:false,
          properties:'',
          code:'',
          changeColor1: 0,
      }
  },
  mounted(){
      this.axios.post(`https://api.it120.cc/small4/shop/goods/detail?id=${this.$route.params.id}`).then((res)=>{
          console.log(res.data)
          var data=res.data.data.pics
          this.list=data
      })

      this.axios.post(`https://api.it120.cc/small4/shop/goods/detail?id=${this.$route.params.id}`).then((res)=>{
          this.basicInfo=res.data.data.basicInfo
      })

      this.axios.post(`https://api.it120.cc/small4/shop/goods/detail?id=${this.$route.params.id}`).then((res)=>{
          console.log(res)
          this.category=res.data.data
      })

      this.axios.post(`https://api.it120.cc/small4/shop/goods/detail?id=${this.$route.params.id}`).then((res)=>{
          console.log(res.data)
          var data=res.data.data.properties["0"].childsCurGoods
          this.properties=data
      })
  },
  methods:{
      add:function(){
          this.show=!this.show
      },
      hip(){
          this.show=false;
      },
      changeSpec (i, key) {
        if (i) {
          this.changeColor1 = key
        } 
         _product.cool(this.ss).then((res)=>{
             console.log(res)
         })
      }
  }
}
</script>
<style lang="scss" scoped>
.x{
    position: relative;
}
element.style {
    height: 65%;
}
.recommend{
    width: 100%;
    height: 0.82rem;
    position: fixed;
    bottom: 0rem;
    font-size: 0.2rem;
    border-top: 1px solid #b4b4b4;
    z-index: 10;
    ol{
        display: flex;
        list-style: none;
        li{
            width: 25%;
            border-right: 2px solid #fafafa;
            text-align: center;
            line-height: 0.82rem;
            font-size: 0.4rem;
            color: #333333;
        }
        .li1{
            background: #b7282e;
            color: white;
            font-size: 0.2rem;
        }
        .li2{
            font-size: 0.2rem;
        }
    }
}
.recommend_box{
    width: 100%;
    height: 5.7rem;
    background: white;
    bottom: 0.8rem;
    position: fixed;
    z-index: 10;
    .recommend_top{
        width: 100%;
        height: 1.45rem;
        background: white;
        .recommend_topp{
            width: 5rem;
            height: 1.45rem;
            margin-left: 0.3rem;
            position: relative;
            border-bottom: 1px solid #ededed;
            .recommend_img{
                width: 0.78rem;
                height: 0.98rem;
                margin-top: 0.22rem;
                position: absolute;
                img{
                    width: 0.78rem;
                    height: 0.98rem;
                }
            }
            .recommend_right{
                width: 3.6rem;
                height: 0.98rem;
                margin-left: 1.05rem;
                margin-top: 0.22rem;
                position: absolute;
                h4{
                    font-size: 0.18rem;
                    color: #4c4c4c;
                    margin-top: 0.12rem;
                    font-weight: normal;
                }
                p{
                    color: red;
                    font-size: 0.16rem;
                    margin-top: 0.2rem;
                }
            }
        }
    }
    .recommend_size{
        width: 100%;
        height: 2.3rem;
        .recommend_sizee{
            width: 5rem;
            height: 2.3rem;
            margin-left: 0.3rem;
            border-bottom: 1px solid #ededed;
            p{
                width: 100%;
                height: 0.7rem;
                line-height: 0.7rem;
                font-size: 0.18rem;
            }
            .recommend_co{
               width: 1.3rem;
                height: 0.5rem;
                display: flex;
                display: inline-block;
                margin-right: 0.16rem;
                margin-top: 0.16rem;
                border-radius: 0.06rem;
                text-align: center;
                border: 1px solid #e1e1e1;
            }
            .recommend_code{
                display: flex;
                align-items: center;
                width: 1.3rem;
                height: 0.5rem;
                line-height: 0.5rem;
                text-align: center;
                color: #333333;
            }
        }
    }
    .recommend_num{
        width: 100%;
        height: 1.16rem;
        .recommend_numm{
            width: 5rem;
            height: 1.16rem;
            margin-left: 0.3rem;
            border-bottom: 1px solid #ededed;
            .recommend_buy{
                width: 100%;
                height: 0.54rem;
                margin-top: 0.4rem;
                position: absolute;
                span{
                float: left;
                font-size: 0.2rem;
                color: #5e5e5e;
            }
            a{
                margin-left: 2rem;
                font-size: 0.2rem;
                input{
                    width: 0.64rem;
                    height: 0.52rem;
                    border: 1px solid gray;
                    text-align: center;
                }
                button{
                    width: 0.64rem;
                    height: 0.52rem;;
                }
            }
            }
          
        }
    }
    .recommend_add{
        width: 100%;
        height: 0.74rem;
        background: #b7282e;
        color: white;
        font-size: 0.28rem;
        text-align: center;
        line-height: 0.74rem;
    }
    .bo{
        width: 0.3rem;
        height: 0.3rem;
        font-size: 0.14rem;
        border-radius: 50%;
        border: 1px solid black;
        float: right;
        text-align: center;
    }
}
.specColor .recommend_code{
        border: 1px solid red;
        border-radius: 0.06rem;
      }
</style>
