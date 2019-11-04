<template>
  <div>
    <div class="header">
      <input type="text" placeholder="搜索商品">
    </div>
    <div class="content">
      <div class="left">
      <ul>
        <li @click="click" :class="{red:this.isUse}">所有分类</li>
        <li v-for="(item,index) in type" :key="index" @click="search(item)" :class="{red:!item.isUse}">{{item.name}}</li>
      </ul>
      </div>
      <div class="right" v-show="isShow">
          <div class="block Block">
            <el-carousel height="2rem">
              <el-carousel-item>
                <img src="../../assets/list1.jpg" alt="" class="small">
              </el-carousel-item>
              <el-carousel-item>
                <img src="../../assets/list2.jpg" alt="" class="small">
              </el-carousel-item>
              <el-carousel-item>
                <img src="../../assets/list3.jpg" alt="" class="small">
              </el-carousel-item>
            </el-carousel>
          </div>
          <ul>
            <router-link tag="li" v-for="(item,index) in list" :key="index" :to="`/SortTwo/`">
              <img :src="item.icon" alt="">
              <p>{{item.name}}</p>
            </router-link>
          </ul>
      </div>
      <div class="right" v-show="!isShow">
          <div class="block Block">
            <el-carousel height="2rem">
              <el-carousel-item>
                <img src="../../assets/list1.jpg" alt="" class="small">
              </el-carousel-item>
              <el-carousel-item>
                <img src="../../assets/list2.jpg" alt="" class="small">
              </el-carousel-item>
              <el-carousel-item>
                <img src="../../assets/list3.jpg" alt="" class="small">
              </el-carousel-item>
            </el-carousel>
          </div>
          <ul>
            <router-link tag="li" v-for="(item,index) in classify" :key="index" :to="`/SortTwo/`">
              <img :src="item.icon" alt="">
              <p>{{item.name}}</p>
            </router-link>
          </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Product from "../../services/product-service"
const _product= new Product()
  export default {
    data() {
      return {
        list:[],//分类页的数据
        isShow:true,
        type:[],
        classify:[],
        isUse:true,
      }
    },
    created() {
      _product.classify().then((res)=>{
        this.list=res.data.data
        let arr=[]
        arr=this.list.filter((i)=>{
          return !i.type.includes(2)
        })
        this.type=arr
      })
    },
    methods: {
      //模糊搜索
      search(v){
        this.isShow=false
        this.type.forEach((i)=>{
          i.isUse=true
        })
        v.isUse=false
        this.isUse=false
        this.classify=this.list.filter((i)=>{
          return i.type.includes(v.type)
        })
      },
      click(){
        this.isShow=true
        this.isUse=true
        this.type.forEach((i)=>{
          i.isUse=true
        })
      },
    },
  }
</script>

<style lang="scss" scoped>

</style>