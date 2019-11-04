<template>
    <!-- 全民砍价 -->
    <div class="app">
        <div class="Bargain">
        <p class="p">
            <router-link to="/cut" tag="li">
                <span>全民砍价</span>
                <img src="/static/img2/bg1.png" />
            </router-link> 
        </p>
        <div class="Bargain_bed" v-for="(item,key) in list" :key="key">
            <div class="Bargain_bed_box">
                <router-link :to="'/bargainlist/'+item.id">
                    <div class="Bargain_bed_box_img">
                        <img :src="item.pic" />
                    </div>
                </router-link>
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
        </div>
    </div>
</template>

<script>
export default {
  name: 'Bargain-item',
  props:['list'],
  data(){
      return{
          
      }
  }
}
</script>

<style lang="scss" scoped>

</style>
