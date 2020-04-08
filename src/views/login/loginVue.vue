<template>
    <div>


        <el-form ref="loginForm" :model="form" :rules="rules"   method="post" label-width="80px" class="login-box" style="padding-left: -120px">
          <h3 class="login-title">登录</h3>
          <el-form-item label="登录邮箱" prop="useremail">
            <el-input type="text" placeholder="请输入邮箱" v-model="form.useremail" name="useremail"/>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input type="password" placeholder="请输入密码" v-model="form.password" name="password"/>
          </el-form-item>
          <el-form-item>


            <el-button type="primary" v-on:click="onSubmit('loginForm')" style="margin-left: -197px">登录啊</el-button>
          </el-form-item>
        </el-form>

      <!--<span slot="footer" class="dialog-footer">-->
      <!--<el-button type="primary" @click="dialogVisible = false">确 定</el-button>-->
      <!--</span>-->
    </div>
</template>

<script>
    export default {
        name: "loginvue",
      mounted(){


      },
      data() {
          return {
            form: {
              useremail: '',
              password: ''
            },
            // 表单验证，需要在 el-form-item 元素中增加 prop 属性
            rules: {
              useremail: [
                {required: true, message: '请输入邮箱地址', trigger: 'blur'},
                { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
              ],
              password: [
                {required: true, message: '密码不可为空', trigger: 'blur'}
              ]
            },
            dialogVisible:true
          }
      },methods:{

        onSubmit(formName) {
          // 为表单绑定验证功能
          this.$refs[formName].validate((valid) => {
            if (valid) {
              // 使用 vue-router 路由到指定页面，该方式称之为编程式导航
              // this.$router.push("/main");

              //如果登录成功 往Session Storage存放字符串【只能存放字符串】用这个判断是否登录
              sessionStorage.setItem('isLogin', 'true');
            //  localStorage.setItem('getSessionStorage', Date.now());

              //通过这个来显示登录还是显示用户名
              this.islogin=false;

              //把用户信息存放到Vuex
              this.$store.dispatch('asyncUpdateUser',this.form);

              //若登录成功则关闭模态框
              this.dialogVisible = false;

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
        }

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
</style>
