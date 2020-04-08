<template>

    <div  >
        <div class="item"  href="#" v-for="item in goodsList" :key="item.id" style="float: left;width: 225px;height: 395px">
            <router-link to="/item" target="_blank">
              <div class="imgContainer">
                <!--图片放220x220的-->
                  <span>
                      <img :src="item.src" width="220px" height="220px">
                  </span>
              </div>
              <div class="info">
                  <p class="price">
                    <span class="pricedetail">
                      ¥<strong> {{item.price}}</strong>
                    </span>
                    <span style="margin-right: 116px;color: white;background-color:red;">包邮</span>
                  </p>
                  <span class="title" title="男士春装上衣2020新款连帽外套男韩版潮">
                      {{item.title}}
                  </span>

                  <p>
                    <span style="font-size: 12px;margin-right: -132px" >{{item.people}}人付款</span>
                  </p>
              </div>
            </router-link>
        </div>

    </div>
</template>

<script>
  export default {
    props: ['id'],
    name: "comlist",
    beforeRouteEnter: (to, from, next) => {
      console.log("准备进入个人信息页");
      // 注意，一定要在 next 中请求，因为该方法调用时 Vue 实例还没有创建，此时无法获取到 this 对象，在这里使用官方提供的回调函数拿到当前实例
      next(vm => {
        vm.getData();
      });

      console.log(this.goodsList)
    },
    beforeRouteLeave: (to, from, next) => {
      console.log("准备离开个人信息页");
      next();
    },
    methods: {
      getData: function () {

        if(this.id =="remen"){
          this.url="http://localhost:8080/static/data.json";
          console.log(this.id);
        }else if(this.id =="jingpin"){
          this.url="http://localhost:8080/static/data2.json"
          console.log(this.id);
        }

        this.axios({
          method: 'get',
          url: this.url
        }).then(response =>{
          this.goodsList.splice(0,this.goodsList.length)
          console.log("先删除后添加")
          this.goodsList=response.data.goodsList
          console.log("信息"+this.goodsList[3].price);

          }
        )
          .catch(function (error) {
          console.log(error);
        });
      }
    },data(){
      return{
        url:"",
        goodsList: [

        ]
      }
    }
  }
</script>

<style scoped>
  .item{
    width: 225px;
    height:368px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12);
    margin: 0 40px 22px 0;
    float: left;
    cursor:pointer;


  }

  .imgContainer{
    width: 227px;
    height: 250px;

  }

  .pricedetail{
    float: left;
    margin-top: 3px;
  }

  .price{
    margin-left: 20px;

  }

  a{

    text-decoration:none;
    color:#333;

  }
</style>
