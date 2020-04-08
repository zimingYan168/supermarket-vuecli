<template>
  <el-form ref="registForm" :model="form" :rules="rules" label-width="80px" class="login-box" method="post">
    <h3 class="login-title">注册</h3>
    <el-form-item label="注册邮箱" prop="useremail">
      <el-input type="text" placeholder="请输入邮箱" v-model="form.useremail" name="useremail"/>
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input type="password" placeholder="请输入密码" v-model="form.password" name="password"/>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" v-on:click="onSubmit('registForm')"  style="margin-left: -197px">注册</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
  import qs from 'qs'
    export default {
        name: "registVue",
        data(){

          return{
          form:{
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
              {required: true, message: '密码不可为空', trigger: 'blur'},
                { min: 6, max: 16, message: '长度在 6~16个字符', trigger: 'blur' }
            ]
          },
          // 对话框显示和隐藏
          //dialogVisible: true
        }
        },methods: {
        onSubmit(formName) {



          // 为表单绑定验证功能
          this.$refs[formName].validate((valid) => {
            if (valid) {
              // 使用 vue-router 路由到指定页面，该方式称之为编程式导航
              //this.$router.push("/main");

              //  alert("格式正确可以注册")

              //把 Request Payload 转为Form Data格式
              //后端才能接受到数据
              let dataForm  = new URLSearchParams();
              dataForm.append('useremail',this.form.useremail);
              dataForm.append('password',this.form.password);

              this.axios.post('http://localhost:8081/regist',dataForm)
                .then((response) => {
                   //成功

                  if(response.status == 200){
                    //状态码200 请求成功
                    if("注册成功,请前往邮箱激活" === response.data){

                      //清空表单数据
                      this.$refs.registForm.resetFields();

                      //创建一个组件 展示这个信息
                      this.$message({
                        message: response.data,
                        type: 'success'
                      });

                    }else if("该用户已被注册" ===  response.data){

                      //清空表单数据
                      this.$refs.registForm.resetFields();

                      //若不是注册成功 则返回 “该用户已被注册”
                      //弹出一个错误框显示该信息
                      this.$message({
                        message: response.data,
                        type: 'warning'
                      });


                    }else {
                      //清空表单数据
                      this.$refs.registForm.resetFields();

                      //返回一个邮箱格式无效
                      this.$message({
                        message: response.data,
                        type: 'warning'
                      });

                    }
                  }


                  //重定向
                 // this.$router.push({name:'address'})
                }).catch(() => {


                  this.$message({
                    message: "邮箱号无效",
                    type: 'warning'
                  });

                }



                )


            } else {

              this.$message({
                showClose: true,
                offset: 130,
                center: true,
                message: '请输入注册邮箱和密码',
                type: 'error'
              });
              //  this.dialogVisible = true;
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
