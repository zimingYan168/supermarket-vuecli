<template>
  <el-table
    :data="tableData"
    style="width: 100%">
    <el-table-column type="expand">
      <template slot-scope="props">
        <el-form label-position="left" inline class="demo-table-expand">
          <el-form-item label="订单创建时间">
            <span>{{ props.row.data }}</span>
          </el-form-item>
          <el-form-item label="订单编号">
            <span>{{ props.row.number }}</span>
          </el-form-item>
          <el-form-item label="姓名">
            <span>{{ props.row.name }}</span>
          </el-form-item>
          <el-form-item label="状态">
            <span>{{ props.row.state }}</span>
          </el-form-item>
          <el-form-item label="电话">
            <span>{{ props.row.phone }}</span>
          </el-form-item>
          <el-form-item label="收货地址">
            <span>{{ props.row.address}}</span>
          </el-form-item>
          <el-form-item label="查看详情">
            <router-link to="/myorder" target="_blank">点击这里</router-link>
          </el-form-item>

          <!---->


          <!--<el-form-item label="商品 ID">-->
            <!--<span>{{ props.row.id }}</span>-->
          <!--</el-form-item>-->
          <!--<el-form-item label="店铺 ID">-->
            <!--<span>{{ props.row.shopId }}</span>-->
          <!--</el-form-item>-->
          <!--<el-form-item label="商品分类">-->
            <!--<span>{{ props.row.category }}</span>-->
          <!--</el-form-item>-->
          <!--<el-form-item label="店铺地址">-->
            <!--<span>{{ props.row.address }}</span>-->
          <!--</el-form-item>-->
          <!--<el-form-item label="商品描述">-->
            <!--<span>{{ props.row.desc }}</span>-->
          <!--</el-form-item>-->
        </el-form>
      </template>
    </el-table-column>
    <el-table-column
      label="订单编号"
      prop="number">
    </el-table-column>
    <el-table-column
      label="状态"
      prop="state">
    </el-table-column>
    <el-table-column
      label="地址"
      prop="address">
    </el-table-column>
  </el-table>
</template>

<script>
    export default {
        name: "orderlist",
      data() {
        return {
          tableData: [{
            id: '12987122',
            name: '张三',
            category: '江浙小吃、小吃零食',
            desc: '荷兰优质淡奶，奶香浓而不腻',
            address: '上海市普陀区真北路',
            shop: '王小虎夫妻店',
            shopId: '10333',
            data: '2020-4-6 15:40',
            number: '571700AE86',
            state: '已发货',
            phone: '1887619957',
            address: '深圳市'
          }, {
            id: '12987123',
            name: '李四',
            category: '江浙小吃、小吃零食',
            desc: '荷兰优质淡奶，奶香浓而不腻',
            address: '上海市普陀区真北路',
            shop: '王小虎夫妻店',
            shopId: '10333',
            data: '2020-4-6 15:40',
            number: '571700AE86',
            state: '未发货',
            phone: '1887619957',
            address: '深圳市'
          }, {
            id: '12987125',
            name: '王五',
            category: '江浙小吃、小吃零食',
            desc: '荷兰优质淡奶，奶香浓而不腻',
            address: '上海市普陀区真北路',
            shop: '王小虎夫妻店',
            shopId: '10333',
            data: '2020-4-6 15:40',
            number: '571700AE86',
            state: '已派送',
            phone: '1887619957',
            address: '深圳市'
          }, {
            id: '12987126',
            name: '赵六',
            category: '江浙小吃、小吃零食',
            desc: '荷兰优质淡奶，奶香浓而不腻',
            address: '上海市普陀区真北路',
            shop: '王小虎夫妻店',
            shopId: '10333',
            data: '2020-4-6 15:40',
            number: '571700AE86',
            state: '已签收' ,
            phone: '1887619957',
            address: '深圳市'
          }]
        }
      }
    }
</script>

<style scoped>
  .demo-table-expand {
    font-size: 0;
  }
  .demo-table-expand label {
    width: 90px;
    color: #99a9bf;
  }
  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
  }
</style>
