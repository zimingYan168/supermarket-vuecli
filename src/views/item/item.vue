<template>
    <div>


        <div class="itemImg">
            <img src="">
        </div>

        <div class="iteminfo">
            <span class="itemtitle">ZARA新款 TRF 女装 直筒高腰牛仔裤</span>
            <div class="itemPrice">
              <div class="price">
                <span style="font-size: 14px;color: #999">价格</span>
                <span style="color: #FF0036;font-size: 24px;height: 30px;margin-left: 20px" ><strong style="font-size: 16px">¥</strong> 199.00</span>
               </div>
              <div class="youhui">
                <span style="font-size: 14px;color: #999">本店活动</span>
                <span style="color: #b5621b;font-size: 14px;height: 30px" >满199元,包邮</span>
              </div>
            </div>
          <div class="number">
            <span style="font-size: 14px;color: #999">数量</span>
            <el-input-number v-model="num" @change="handleChange" :min="1" :max="10" label="数量"></el-input-number>
          </div>
          <div class="total">
            <span style="font-size: 14px;color: #999">总计:</span>
            <div class="itemTotalDiv" >
                <span v-text="total" style="color:#FF0036 ">199.00</span><br>
                <span style="color: #999">（含手续费）</span>
            </div>
            <div class="itembutton">
              <el-button type="danger"><router-link to="/address" target="_blank"> 立即购买</router-link></el-button>
              <el-button type="primary" icon="el-icon-shopping-cart-2"  @click="add()">加入购物车</el-button>

            </div>
          </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "item",


      beforeRouteEnter: (to, from, next) => {
        let isLogin=sessionStorage.getItem('isLogin');
        // 注意，一定要在 next 中请求，因为该方法调用时 Vue 实例还没有创建，此时无法获取到 this 对象，在这里使用官方提供的回调函数拿到当前实例
        next(vm => {
          //页面进入前设置价格
          vm.total="￥199";

          //页面进入前 通过isLogin 判断是否登录
          vm.itemisLogin=isLogin;


        });


      },



      data(){
          return{
            num: 1,
            total: "",
            activeIndex1: '1',
            itemisLogin:""
          }
      },methods:{
        handleChange(value) {
          this.total="￥"+this.num*199

          console.log(value);
        },

        add(){

          if(this.itemisLogin!="true"){

          //  说明没登录 跳转到登录页
            this.$router.push("/user/login");

          }else{
            this.$message({
              message: '成功加入购物车',
              type: 'success'
            });
          }
        }
      }
    }
</script>

<style scoped>
  .itemImg{
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12);
    width: 418px;
    height: 418px;
    margin-left: 165px;
    float: left;
  }

  .iteminfo{
    box-shadow: 0 2px 4px rgba(15, 15, 15, .30);
    width: 600px;
    height: 398px;
    margin-left: 593px;
    padding-top: 20px;
  }

  .itemtitle{
    margin-left: -282px;
    height: 30px;
    font-weight:700;

  }

  .itemPrice{
    height: 73px;

    width: 586px;
    margin-left: 7px;
    margin-top: 8px;
    padding-left: -282px;
    background-color: #EEF1F6;

  }

  .price{
    text-align: left;

  }

  .youhui{
    text-align: left;
  }


  .number{
    text-align: left;
    padding-left: 5px;
    margin-top: 20px;
  }

  .total{
    text-align: left;
    padding-left: 5px;
    margin-top: 20px;

  }

  .itemTotalDiv{
    width: 150px;
    height: 60px;
    border:1px solid #999;
    margin-left: 35px;
    text-align: center;

  }

  .itembutton{
    padding-top: 35px;
    padding-left: 31px;
  }


  /*取消<a>标签的默认样式*/
  .aclass{
    text-decoration:none;
    color:#333;
  }

  .el-menu{
    height: 100px;margin-top: 10px
  }

</style>
