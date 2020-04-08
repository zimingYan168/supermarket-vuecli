<template>
    <div>
      <div class="regist-img">
      <el-carousel height="586px" :interval="2800" arrow="always">
        <el-carousel-item v-for="item in 4" :key="item">
          <h3>{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
      </div>


      <div class="registfloat" >

        <el-menu  active-text-color="#409EFF" text-color="#000" :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" >
          <el-menu-item index="1" ><router-link to="/main/itemList/remen" class="aclass">首页</router-link></el-menu-item>
          <el-menu-item index="2"  ><router-link to="/user/regist" class="aclass">注册中心</router-link></el-menu-item>
          <el-menu-item index="3" v-if="isloginstr === null"><router-link to="/user/login" class="aclass">登录</router-link></el-menu-item>
        </el-menu>
        <div class="line"></div>


        <router-view></router-view>


      </div>
    </div>
</template>

<script>
    export default {
        name: "register",
      mounted(){
        this.isloginstr=sessionStorage.getItem('isLogin');
      },
        data(){
          return {
            isloginstr: 'false',
            activeIndex2: '2'

          }
        },methods: {

      }
    }
</script>

<style scoped>
  .registfloat{

    float: right;
    width: 843px;
    height: 586px;
  }

  .regist-img{
    width: 480px;
    float: left;

  }

  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 573px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }

  .login-box {
    border: 1px solid #DCDFE6;
    width: 350px;
    margin: 100px auto;
    padding: 35px 35px 15px 35px;
    border-radius: 5px;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    box-shadow: 0 0 25px #909399;
    test-align: 'left';
  }
  .login-title {
    text-align: center;
    margin: 0 auto 40px auto;
    color: #303133;
  }

  /*取消<a>标签的默认样式*/
  .aclass{
    text-decoration:none;
    color:#333;
  }
</style>
