import HTTP from '../utils/http'
const _http = new HTTP()
class Product {
  //轮播图
    banner () {
      return _http.request({
        url: 'https://api.it120.cc/small4/banner/list'
      })
    }
    //全民砍价
    Bargain(){
      return _http.request({
        url: 'https://api.it120.cc/small4/shop/goods/kanjia/list'
      })
    }
    //精选专题
    Selected(){
      return _http.request({
        url: 'https://api.it120.cc/small4/cms/news/list'
      })
    }
    //人气推荐
    recommend(){
      return _http.request({
        url: 'https://api.it120.cc/small4/shop/goods/list'
      })
    }
    //砍价
    Cut(){
      return _http.request({
        url: 'https://api.it120.cc/small4/shop/goods/kanjia/list'
      })
    }
    //分类
    classify(){
      return _http.request({
        url: 'https://api.it120.cc/small4/shop/goods/category/all'
      })
    }
    //登录
    login (obj) {
      return _http.request({
        type: 'post',
        url: "https://api.it120.cc/small4/user/m/login?deviceId=007&deviceName=monkey",
        data: {
          mobile: obj.mobile,
          pwd: obj.pwd
        }
      })
    }
    // 图片验证码
    identifyCodeSrc () {
      return _http.request({
      type: 'post',
      url: `https://api.it120.cc/small4/verification/pic/get`,
      })
    } 

  //注册
  enroll (ty) {
      return _http.request({
        type: 'post',
        url: 'https://api.it120.cc/small4/user/m/register',
        data: {
        mobile: ty.number,
        pwd: ty.user,
        code:ty.codeUser
      }
    })
  }

  code (ty) {
    return _http.request({
      type: 'post',
      url: 'https://api.it120.cc/small4/verification/sms/get',
      data: {
      mobile: ty.number,
      key: ty.data,
      picCode:ty.code
      }
    })
  }



  cool(){
    return _http.request({
      type: 'post',
      url: 'https://api.it120.cc/small4/shop/goods/detail',
    })
  }
  // list方法
  // list () {
  //   return _http.request({
  //     url: 'shop/goods/list'
  //   })
  // }
  // detail方法
  // detail (productId) {
  //   return _http.request({
  //     type: 'post',
  //     url: 'shop/goods/detail',
  //     data: {
  //       id: productId
  //     }
  //   })
  // }
  
}

export default Product
