<template>
  <div class="box">
    <!-- <div class="block">
      <el-carousel height="5.18rem">
        <el-carousel-item v-for="(item,key) in list" :key="key">
          <h3 class="small">
            <img :src="item.picUrl" width="100%" />
          </h3>
        </el-carousel-item>
      </el-carousel>
    </div> -->

    <banner></banner>

    <!-- <div class="nav">
      <ul>
        <li>
          <img src="/static/img2/cd1.png" alt />
          <p>签到</p>
        </li>
        <li>
          <img src="/static/img2/cd2.png" alt />
          <p>礼券</p>
        </li>
        <li>
          <img src="/static/img2/cd2.png" alt />
          <p>砍价</p>
        </li>
        <li>
          <img src="/static/img2/cd4.png" alt />
          <p>专栏</p>
        </li>
      </ul>
    </div> -->
    
    <!-- 全民砍价 -->
    <!-- <div class="Bargain">
      <p class="p">
        <span>全民砍价</span>
        <img src="/static/img2/bg1.png" />
      </p>
      <div class="Bargain_bed" v-for="(item,key) in Bargain" :key="key">
        <div class="Bargain_bed_box">
          <div class="Bargain_bed_box_img">
            <img :src="item.pic" />
          </div>
          <div class="Bargain_bed_box_right">
            <p>{{ item.name }}</p>
            <p>
              <span>{{ item.characteristic }}</span>
            </p>
            <div>
              <span>
                <p>￥{{item.minPrice}}.00</p>
                <a>底价</a>
              </span>
              <span>
                ￥{{item.originalPrice}}.00
                <a>原价</a>
              </span>
              <span>
                ￥{{item.minScore}}件
                <a>限量</a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div> -->

    <Bargain></Bargain>
    <!-- 精选专题 -->
    <!-- <div class="Selected">
      <p class="p">
        <span>精选专题</span>
        <img src="/static/img2/bg1.png" />
      </p>
      <div class="Selected_box" ref="wrapper">
          <ul>
              <li v-for="(item,key) in Selected" :key="key">
                <div class="Selected_img"><img :src="item.pic" alt=""></div>
                <p>{{ item.title }}</p>
                <p class="Selected_p">{{ item.descript }}</p>
              </li>
          </ul>
      </div>
    </div> -->

    <Selected></Selected>

    <!-- 人气推荐 -->
    <!-- <div class="recommend">
      <p class="p">
        <span>人气推荐</span>
        <img src="/static/img2/bg1.png" />
      </p>
      <ul>
        <li v-for="(item,key) in dd" :key="key">
          <div class="recommend_clack">
            <div class="recommend_img"><img :src="item.pic"></div>
            <p>{{ item.characteristic }}</p>
            <p class="p1">￥{{ item.pingtuanPrice }}</p>
          </div>
        </li>
      </ul>
    </div> -->
    <Recommend></Recommend>
  </div>
</template>

<script>
import banner from "@/views/products/banner"
import Bargain from "@/views/products/Bargain"
import Selected from "@/views/products/Selected"
import Recommend from "@/views/products/recommend"
// import BScroll from 'better-scroll'
export default {
  name: "Home",
  components:{banner,Bargain,Recommend,Selected},
  data() {
    return {
      list: [],
      Bargain: [],
      Selected: [],
      recommend:[],
      dd:[],
    };
  },
  mounted() {
    //banner 轮播图
    // this.axios.get("https://api.it120.cc/small4/banner/list").then(res => {
    //   console.log(res);
    //   this.list = res.data.data;
    // });

    //全民砍价
    // this.axios
    //   .get("https://api.it120.cc/small4/shop/goods/kanjia/list")
    //   .then(res => {
    //     // console.log(res.data.data.goodsMap);
    //     for (let i in res.data.data.goodsMap) {
    //       this.Bargain.push(res.data.data.goodsMap[i]);
    //     }
    //     this.Bargain = this.Bargain.splice(1, 3);
    //   });

      //精选主题
    // this.axios.get("https://api.it120.cc/small4/cms/news/list").then(res => {
    //   // console.log(res);
    //   this.Selected = res.data.data;
    // });
    //iscoll 
//     this.$nextTick(()=>{
//       this.scroll=new BScroll(this.$refs.wrapper,{
//             scrollX: true,
//             scrollY: false,
//       })
//     })
    
    //人气推荐
    // this.axios.get('https://api.it120.cc/small4/shop/goods/list').then((res)=>{
    //   console.log(res)
    //   this.recommend=res.data.data
    //   this.dd=this.recommend.splice(8,4)
    // })
  }
}
</script>

<style lang="scss" scoped>
.box{
    width: 100%;
    height: auto;
    background: #f5f5f5;
}
// .nav{
//     width: 100%;
//     height: 1.45rem;
//     margin-top: -0.3rem;
//     background: white;
//     border-top-left-radius: 0.4rem;
//     border-top-right-radius: 0.4rem;
//     ul{
//         display: flex;
//         flex-wrap: wrap;
//         justify-content: space-around;
//         // align-items: center;
//         li{
//             text-align: center;
//             font-size: 0.2rem;
//             img{
//                 width: 0.6rem;
//                 height: 0.6rem;
//                 margin-top: 0.25rem;
//             }
//             p{
//                 display: block;
//                 margin-top: 0.1rem;
//             }
//         }
//     }
// }
// .Bargain{
//     width: 100%;
//     height: auto;
//     // background: rebeccapurple;
//     margin-top: 0.22rem;
//     .p{
//         width: 100%;
//         height: 0.64rem;
//         line-height: 0.64rem;
//         margin: 0 auto;
//         font-size: 0.2rem;
//         border-bottom: 1px solid #f2f2f2;
//         background: white;
//         span{
//             float: left;
//             margin-left: 2.1rem
//         }
//         img{
//             width: 0.15rem;
//             height: 0.15rem;
//             margin-left: 0.09rem;
//             float: left;
//             margin-top: 0.24rem;
//         }
//     }
//     .Bargain_bed{
//         width: 100%;
//         height: 1.82rem;
//         background: white;
//         border-bottom: 1px solid ghostwhite;
//         position: relative;
//         .Bargain_bed_box{
//             width: 4.75rem;
//             height: 1.6rem;
//             position: absolute;
//             margin-top: 0.1rem;
//             margin-left: 0.1rem;
//             .Bargain_bed_box_img{
//                 width: 1.6rem;
//                 height: 1.6rem;
//                 float: left;
//                 img{
//                     width: 1.6rem;
//                     height: 1.6rem;
//                 }
//             }
//         }
//         .Bargain_bed_box_right{
//             width: 2.96rem;
//             height: 1.6rem;
//             float: right;
//             p{
//                 widows: 100%;
//                 font-size: 0.2rem;
//                 color: #5f5f5f;
//                 span{
//                     font-size: 0.14rem;
//                     color: #b2b2b2;
//                 }
//             }
//             >div{
//                 width: 100%;
//                 height: 0.45rem;
//                 margin-top: 0.52rem;
//                 display: flex;
//                 font-size: 0.16rem;
//                 span{
//                     display: block;
//                     text-align: center;
//                     margin-left: 0.3rem;
//                     p{
//                         color: red;
//                     }
//                 }
//                 a{
//                     display: block;
//                     margin-top: -0.1rem;
//                 }
//             }
//         }
//     }
// }
// .Selected{
//     width: 100%;
//     height: auto;
//     margin-top: 0.22rem;
//     .p{
//         width: 100%;
//         height: 0.64rem;
//         line-height: 0.64rem;
//         margin: 0 auto;
//         font-size: 0.2rem;
//         border-bottom: 1px solid #f2f2f2;
//         background: white;
//         span{
//             float: left;
//             margin-left: 2.1rem
//         }
//         img{
//             width: 0.15rem;
//             height: 0.15rem;
//             margin-left: 0.09rem;
//             float: left;
//             margin-top: 0.24rem;
//         }
//     }
//     .Selected_box{
//         width: 100%;
//         height: 3.84rem;
//         background: white;
//         ul{
//           width: 22.4rem;
//             list-style: none;
//             display: flex;
//             li{
//                 width: 4.48rem;
//                 height: 3.84rem;
//                 // background: red;
//                 margin-left: 0.1rem;
//                 .Selected_img{
//                   width: 4.48rem;
//                   height: 2.88rem;
//                   img{
//                     width: 4.48rem;
//                     height: 2.88rem;
//                   }
//                 }
//                 p{
//                   font-size: 0.2rem;
//                   color: #4c4c4c;
//                   margin-left: 0.22rem;
//                 }
//                 .Selected_p{
//                   font-size: 0.16rem;
//                   width: 3.42rem;
//                   overflow:hidden;
//                   white-space:nowrap;
//                   text-overflow:ellipsis;
//                   color: #c4c4c4;
//                 }
//             }
//         }
//     }
// }
// .recommend{
//   width: 100%;
//   height: auto;
//   background: white;
//   margin-top: 0.22rem;
//   .p{
//         width: 100%;
//         height: 0.64rem;
//         line-height: 0.64rem;
//         margin: 0 auto;
//         font-size: 0.2rem;
//         border-bottom: 1px solid #f2f2f2;
//         background: white;
//         span{
//             float: left;
//             margin-left: 2.1rem
//         }
//         img{
//             width: 0.15rem;
//             height: 0.15rem;
//             margin-left: 0.09rem;
//             float: left;
//             margin-top: 0.24rem;
//         }
//     }
//     ul{
//       list-style: none;
//       display: flex;
//       flex-wrap: wrap;
//       // justify-content: space-around;
//       li{
//         width: 50%;
//         .recommend_clack{
//           width: 2.4rem;
//           height: 3.66rem;
//           // background: darkcyan;
//         }
//         .recommend_img{
//           width: 2.4rem;
//           height: 2.6rem;
//           // background: darkcyan;
//           img{
//             width: 2.4rem;
//             height: 2.6rem;
//           }
//         }
//         p{
//           font-size: 0.2rem;
//         }
//         .p1{
//           font-size: 0.16rem;
//           color: red;
//           margin-top: 0.15rem;
//         }
//       }
//     }
// }
</style>
