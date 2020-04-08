<template>
    <div class="orderinfo">
        <div class="orderimg">
          <div class="info" title="时间">
            <span>订单创建时间：2020-4-6</span>
          </div>
          <div class="info" title="订单编号">
            <span>订单编号：571700</span>
          </div>

          <div class="info" title="状态">
            <span>状态：已发货</span>
          </div>

            <div class="info" title="姓名">
              <span>姓名：张三</span>
            </div>
            <div class="info"  title="电话" >
              <span>电话：10086</span>
            </div>

            <div class="info" title="地址" style="height: 148px;box-shadow: 0 2px 12px 0 rgba(1, 1, 1,0.2)" >
              <span>地址：</span> <span>阿里云月薪过万，深圳、阿里云月薪过万，深圳、阿里云月薪过万，深圳、阿里云月薪过万，深圳</span>
            </div>
        </div>
        <div class="userinfo" >

        </div>

        <div class="userorderiteminfo">
          <template>
            <el-table
              :data="tableData"
              style="width: 100%">
              <el-table-column
                prop="name"
                label="商品"
                width="180">
              </el-table-column>

              <el-table-column
                prop="number"
                label="数量"
                width="180">

              </el-table-column>

              <el-table-column
                prop="address"
                label="地址">
              </el-table-column>
            </el-table>
          </template>
          <div class="ordertotal">
              <span>总计:￥588</span>
          </div>

        </div>
    </div>
</template>

<script>
    export default {
        name: "myorder",
      data() {
        return {
          tableData: [{

            name: 'ZARA新款 TRF 女装 直筒高腰牛仔裤',
            number: "x1",
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            name: '男士春装上衣2020新款连帽外套男韩版潮',
            number: "x3",
            address: '上海市普陀区金沙江路 1517 弄'
          }, {
            name: '男士春装上衣2020新款连帽外套男韩版潮',
            number: "x5",
            address: '上海市普陀区金沙江路 1519 弄'
          }, {
            name: '男士春装上衣2020新款连帽外套男韩版潮',
            number: "x10",
            address: '上海市普陀区金沙江路 1516 弄'
          }]
        }
      }
    }
</script>

<style scoped>
    .orderinfo{
      box-shadow: 0 2px 4px rgba(20, 35, 20, .35);
        width: 820px;
        min-height: 540px;
        margin: 20px auto;


    }

  .orderimg{
    width: 350px;
    height: 350px;

    margin: 2px 0px 0px 2px;
    float: left;
  }

  .userinfo{
    width: 459px;
    height: 350px;
    margin: 2px 0px 0px 355px;

  }

  .userorderiteminfo{
    width: 812px;
    min-height: 190px;
    margin: 2px 0px 2px 2px;
  }

  .ordertotal{
    text-align: right;
    padding-right: 100px;
  }

  .info{

    width: 400px;
    height: 35px;
    margin: 2px 0px 0px 368px;
    border-radius: 0;
    text-align: left;
    font-size: 14px;

  }
</style>
