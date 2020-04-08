<template>
    <div class="myorder">

      <!-- 标题sta-->
      <div class="orderShow" style="min-height: 60px">
        <div class="orderItem" style="height: 60px">

          <ul class="orderUl">
            <li><!-- `checked` 为 true 或 false -->
            <li>
              <div class="itemImgandInfo" style="height: 60px">
                <div class="imgAndInfo" style="height: 60px">
                  <div class="infoclass" style="height: 60px">
                    <span style=""> 商品信息</span>
                  </div>

                </div>
              </div>
            </li>
            <li>
              <div class="otherInfo" style="height: 60px">
                <span>&nbsp;&nbsp;单价</span>
              </div>

            </li>
            <li>
              <div>
                <span>&nbsp;&nbsp;数量</span>
              </div>

            </li>
            <li>
              <div class="otherInfo" style="height: 60px">
                <!--单个商品的总价格-->
                <span ref="index1">总价</span>
              </div>
            </li>

            <li>
              <div class="operate" style="height: 60px">
                <span>操作</span>
              </div>
            </li>
          </ul>


        </div>
      </div>
      <!-- 标题END-->

      <!--订单条目sta-->
      <div class="orderShow">
          <div class="orderItem">

            <ul class="orderUl">
              <li><!-- `checked` 为 true 或 false -->
                <el-checkbox @change="exe(index1)"></el-checkbox></li>
              <li>
                <div class="itemImgandInfo">
                    <div class="imgAndInfo" >
                        <img width="82px;" height="82px" style="float: left" />
                        <div class="infoclass">
                          <span style="float: right"> WD西部数据2tb Elements新元素USB3.0移动硬盘2t WDBUZG0020BBK</span>
                        </div>

                    </div>
                </div>
              </li>
              <li>
                 <div class="otherInfo">
                      <span>￥199.00</span>
                 </div>

              </li>
              <li>
                <div>
                  <span>1个</span>
                </div>

              </li>
              <li>
                  <div class="otherInfo">
                    <!--单个商品的总价格-->
                    <span ref="index1">￥188.00</span>
                  </div>
              </li>

              <li>
                  <div class="operate">
                      <a href="#">删除</a>
                  </div>
              </li>
            </ul>


          </div>
      </div>
      <!--订单条目end-->



      <!--下一个订单条目start-->
      <div class="orderShow">
        <div class="orderItem">

          <ul class="orderUl">
            <li><!-- `checked` 为 true 或 false -->

              <el-checkbox  @change="exe(index2)"></el-checkbox></li>
            <li>
              <div class="itemImgandInfo">
                <div class="imgAndInfo" >
                  <img width="82px;" height="82px" style="float: left" />
                  <div class="infoclass">
                    <span style="float: right"> WD西部数据2tb Elements新元素USB3.0移动硬盘2t WDBUZG0020BBK</span>
                  </div>

                </div>
              </div>
            </li>
            <li>
              <div class="otherInfo">
                <span>￥199.00</span>
              </div>

            </li>
            <li>
              <div>
                <span>1个</span>
              </div>

            </li>
            <li>
              <div class="otherInfo">
                <strong>￥</strong><span ref="index2">288.00</span>
              </div>
            </li>
            <li>
              <div class="operate">
                <a href="#">删除</a>
              </div>
            </li>
          </ul>


        </div>
      </div>
      <!--下一个订单条目end-->

      <!--下一个订单条目start-->
      <div class="orderShow">
        <div class="orderItem">

          <ul class="orderUl">
            <li><!-- `checked` 为 true 或 false -->

              <el-checkbox  @change="exe(index2)"></el-checkbox></li>
            <li>
              <div class="itemImgandInfo">
                <div class="imgAndInfo" >
                  <img width="82px;" height="82px" style="float: left" />
                  <div class="infoclass">
                    <span style="float: right"> WD西部数据2tb Elements新元素USB3.0移动硬盘2t WDBUZG0020BBK</span>
                  </div>

                </div>
              </div>
            </li>
            <li>
              <div class="otherInfo">
                <span>￥199.00</span>
              </div>

            </li>
            <li>
              <div>
                <span>1个</span>
              </div>

            </li>
            <li>
              <div class="otherInfo">
                <strong>￥</strong><span ref="index2">288.00</span>
              </div>
            </li>
            <li>
              <div class="operate">
                <a href="#">删除</a>
              </div>
            </li>
          </ul>


        </div>
      </div>
      <!--下一个订单条目end-->

      <!--底部结算-->
      <div class="orderbotton">
        <div>
          <el-button class="bottoninfo" style="font-size: 16px" type="danger" size="medium"><router-link to="/address">立即结算</router-link></el-button>
          <div class="jiesuandiv" >
            <span>合计（含运费）：<strong style="color: #f40">￥{{total}}</strong></span>
          </div>

        </div>
      </div>
    </div>
</template>

<script>
    export default {
      name: "order",
      data() {
        return {
          activeIndex2: '1',
          checked: false,
          total:""
        };
      },
      methods: {
        // handleSelect(key, keyPath) {
        //   console.log(key, keyPath);
        // },

      //  求总价
        exe(){
          this.checked=true;
         if(this.checked){

            // 若打钩则在这里获取到单个商品的总价
          var price= 188+288;
         this.total=price;

         }

        }
      }

    }
</script>

<style scoped>

  .jiesuandiv{
    width: 300px;height: 30px;
    float: right;
    margin-top: 18px;
    margin-right: -37px;
  }

  .myorder{

    min-height: 500px;
    width: 100%;

  }

  .orderShow{
    text-align: center;
    min-height: 135px
  ;
  }

  .orderItem{
    width: 1010px;
    height: 130px;
    border: 1px solid #d7dae2;
    margin: 8px auto;
    border-radius: 2px

  }

  .orderbotton{
    width: 988px;
    height: 60px;
    border: 1px solid #d7dae2;
    margin: 8px auto;
    background-color: #F1F3F4;
  }

  .orderUl{

    list-style: none;
  }

  .orderUl li{
    float: left;
  }

  .itemImgandInfo{
    width: 302px;
    height: 111px;
    float: left;

  }

  .imgAndInfo{
    height: 100px;
    margin-top: 2px;
    margin-left: 10px;



  }

  .infoclass{
    margin-left: 87px;

    width: 198px;
    height: 97px;
  }

  .otherInfo{
    width: 240px;
    height: 111px;
  }

  .operate{
    width: 140px;
    height: 111px;
  }

  .bottoninfo{
    margin-top: 10px;
    /*margin-right: -880px;*/
    float: right;
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
