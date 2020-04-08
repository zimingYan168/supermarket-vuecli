<template>
    <div>

      <el-dialog
        title="修改收货地址"
        :visible.sync="dialogVisible"
        width="33%"
      >
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm1" label-width="100px" class="demo-ruleForm">
          <el-form-item label="姓名" prop="name">
            <el-input v-model="ruleForm.name"></el-input>
          </el-form-item>
          <el-form-item label="电话" prop="phone">
            <el-input v-model="ruleForm.phone"></el-input>
          </el-form-item>



          <el-form-item label="收货地址" prop="desc" >
            <el-input type="textarea" v-model="ruleForm.desc"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm1')">修改</el-button>
            <el-button >设为默认</el-button>
          </el-form-item>
        </el-form>

      </el-dialog>


      <div class="addtitle">
        <span style="margin-right: 20px">收货地址</span>
        <el-divider></el-divider>

        <template>
          <el-table
            :data="tableData"
            style="width: 100%">
            <el-table-column
              prop="name"
              label="姓名"
              width="180">
            </el-table-column>
            <el-table-column
              prop="phone"
              label="电话"
              width="180">
            </el-table-column>
            <el-table-column
              prop="address"
              label="地址"
              width="320">
            </el-table-column>
            <el-table-column
              prop="caozuo"
              label="操作"
             >
              <el-link icon="el-icon-edit" @click="open()">编辑</el-link>
            </el-table-column>

            <el-table-column
              prop="mydefault"
              label=""
              width="420">

            </el-table-column>

          </el-table>
        </template>

      </div>
    </div>
</template>

<script>
    export default {
        name: "takeover",
      data() {
        return {

          dialogVisible: false,
          tableData: [{

            name: '王小虎',
            phone: '1008611',
            address: '上海市普陀区金沙江路 1518 弄',
            mydefault: '默认'
          }, {

            name: '王小虎',
            phone: '1008611',
            address: '上海市普陀区金沙江路 1517 弄',

            mydefault: ''
          }, {

            name: '王小虎',
            phone: '1008611',
            address: '上海市普陀区金沙江路 1519 弄',
            mydefault: ''
          }, {

            name: '王小虎',
            phone: '1008611',
            address: '上海市普陀区金沙江路 1516 弄',
            mydefault: ''
          }],


          //下面是弹出框
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

        }
      },
      methods: {

          open(){
            this.dialogVisible=true;
          },
        submitForm(formName) {
          this.$refs[formName].validate((valid) => {
            if (valid) {

              //点击修改地址后执行
              this.$message({
                showClose: true,
                message: '修改成功',
                type: 'success'
              });
              this.dialogVisible=false;
              window.location.reload();
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
  .addtitle{
    padding: 0px 0px 0px 20px;
  }
</style>
