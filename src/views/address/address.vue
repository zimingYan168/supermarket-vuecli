<template>
    <div class="addreDiv">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="姓名" prop="name">
          <el-input v-model="ruleForm.name" :disabled="true"></el-input>
        </el-form-item>
        <el-form-item label="电话" prop="phone">
          <el-input v-model="ruleForm.phone" :disabled="true"></el-input>
        </el-form-item>



        <el-form-item label="收货地址" prop="desc" >
          <el-input type="textarea" v-model="ruleForm.desc" :disabled="true"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">提交订单</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
</template>

<script>
    export default {
        name: "address",
      data() {
        return {
          ruleForm: {
            name: '',
            region: '',
            phone: '',
            delivery: false,


            desc: ''
          },
          rules: {
            name: [
              { required: true, message: '请输入姓名', trigger: 'blur' },
              { min: 3, max: 10, message: '长度在 3 到 10个字符', trigger: 'blur' }
            ],
            phone:[
              { required: true, message: '请输入电话号码', trigger: 'blur' },
              { min: 11, max: 11, message: '清输入正确的电话号码', trigger: 'blur' }
            ],

            desc: [
              { required: true, message: '请填写收货地址', trigger: 'blur' }
            ]
          }
        };
      },
      methods: {
        submitForm(formName) {
          this.$refs[formName].validate((valid) => {
            if (valid) {
              alert('submit!');
            } else {
              console.log('error submit!!');
              return false;
            }
          });
        },
        resetForm(formName) {
          this.$refs[formName].resetFields();
        }
      }

    }
</script>

<style scoped>
    .addreDiv{
      margin: 10px auto;
      width: 550px;
      height: 600px;
    }
</style>
