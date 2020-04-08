<template>
<div>
  <el-dialog
    title="登录"
    :visible.sync="dialogVisible"
    width="30%"
   >

    <el-form ref="loginForm" :model="form" :rules="rules" label-width="80px" class="login-box" style="padding-left: -120px">
      <el-form-item label="邮箱" prop="useremail">
        <el-input type="text" placeholder="请输入邮箱" v-model="form.useremail"/>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" placeholder="请输入密码" v-model="form.password"/>
      </el-form-item>
      <el-form-item>


        <el-button type="primary" v-on:click="onSubmit('loginForm')" style="margin-left: -207px">登录</el-button>
      </el-form-item>
    </el-form>
  </el-dialog>

  <el-container style="height: 500px; border: 1px solid #eee">
    <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
      <el-menu :default-openeds="['1']">
        <el-submenu index="1">
          <template slot="title"><i class="el-icon-shopping-cart-1"></i>商品</template>
          <el-menu-item-group>
            <el-menu-item index="1-1" @click="refresh()"><router-link to="/main/itemList/remen">热门</router-link></el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group>
            <el-menu-item index="1-2" @click="refresh()"><router-link to="/main/itemList/jingpin">精品</router-link></el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group>
            <el-menu-item index="1-3">选项3</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group>
            <el-menu-item index="1-4">选项4</el-menu-item>
          </el-menu-item-group>


        </el-submenu>
        <el-submenu index="2">
          <template slot="title"><i class="el-icon-menu"></i>订单管理</template>
          <el-menu-item-group>

            <el-menu-item index="2-1">选项1</el-menu-item>

          </el-menu-item-group>

          <el-menu-item-group >
            <el-menu-item index="2-2">选项2</el-menu-item>
          </el-menu-item-group>

          <el-menu-item-group >
            <el-menu-item index="2-3">选项3</el-menu-item>
          </el-menu-item-group>

        </el-submenu>

      </el-menu>
    </el-aside>


    <el-container>
      <el-header style="text-align: right; font-size: 12px">
        <el-dropdown>
          <i class="el-icon-setting" style="margin-right: 15px"></i>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item><router-link to="/order" target="_blank">我的购物车</router-link></el-dropdown-item>
            <el-dropdown-item><router-link to="/takeover" target="_blank">管理收货地址</router-link></el-dropdown-item>
            <el-dropdown-item><router-link to="/orderlist" target="_blank">我的订单</router-link></el-dropdown-item>
            <span  v-if="isloginstr === 'true'">
           <span  @click="outlogin()"> <el-dropdown-item >退出</el-dropdown-item> </span>
            </span>
          </el-dropdown-menu>
        </el-dropdown>



        <el-button type="text"  v-if="isloginstr === 'true'"  style="color: #F56C6C">{{this.$store.getters.getUser.useremail}}</el-button>
        <el-button  v-else="isloginstr === 'false'" type="text"  @click="open" class="aclass">登录</el-button>
        <el-button type="text"><router-link to="/user/regist" class="aclass">注册</router-link></el-button>
      </el-header>

      <!--放list组件的地方-->
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</div>
</template>

<script>



  export default {
    name: 'main',
    props: ['isloginSub'],
    mounted(){
      this.isloginstr=sessionStorage.getItem('isLogin');
    },

    data() {
      const item = {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      };
      return {
        tableData: Array(20).fill(item),
        dialogVisible: false,

        //用于判断该显示登录、退出、还是用户名
        isloginstr: '',

        form: {
          useremail: '',
          password: ''
        },
        // 表单验证，需要在 el-form-item 元素中增加 prop 属性
        rules: {
          useremail: [
            {required: true, message: '邮箱不可为空', trigger: 'blur'}
          ],
          password: [
            {required: true, message: '密码不可为空', trigger: 'blur'}
          ]
        }

      }





    },methods: {

      //刷新页面
      refresh(){
        window.location.reload();
      },


      //登录按钮弹出模态框
      open() {

     this.dialogVisible=true

        // this.$alert('这是一段内容', '标题名称', {
        //   confirmButtonText: '确定',
        //   callback: action => {
        //     this.$message({
        //       type: 'info',
        //       message: `action: ${ action }`
        //     });
        //   }
        // });
      },
      onSubmit(formName) {
        // 为表单绑定验证功能
        this.$refs[formName].validate((valid) => {
          if (valid) {
            // 使用 vue-router 路由到指定页面，该方式称之为编程式导航
            // this.$router.push("/main");

            //如果登录成功 往Session Storage存放字符串【只能存放字符串】用这个判断是否登录
            sessionStorage.setItem('isLogin', 'true');



            //把用户信息存放到Vuex
          this.$store.dispatch('asyncUpdateUser',this.form);

            //若登录成功则关闭模态框
            this.dialogVisible = false;

            //登录成功把这个值设置一下 让他能显示登录的用户名
            this.isloginstr='true';

            //重定向到/main
            this.$router.push("/main/itemList/remen");


          } else {

            this.$message({
              showClose: true,
              offset: 50,
              center: true,
              message: '请输入登录邮箱和密码',
              type: 'error'
            });
            return false;
          }
        });
      },outlogin() {

        this.$confirm('是否确认退出?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {

          this.$message({
            type: 'success',
            message: '退出成功!'
          });
          sessionStorage.clear();
          window.location.reload();
        }).catch(() => {

          this.$message({
            type: 'info',
            message: '已取消操作'
          });
          this.$router.push("/main/itemList/remen");
        });

         //window.location.replace(window.location.href);
        // sessionStorage.clear();
        // window.location.reload();


      }
    }
  };
</script>

<style scoped>
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }

  .el-aside {
    color: #333;
  }

 /*取消<a>标签的默认样式*/
  .aclass{
    text-decoration:none;
    color:#333;
  }

</style>
