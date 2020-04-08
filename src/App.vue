<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import loginvue from '@/views/login/loginVue'




export default {
  name: 'App',
  data() {
    return {
      isloginParent: ''
    }
  },
  mounted(){




    //监听刷新事件，若刷新则调用如下方法，把数据保存到sessionStorage中
    window.addEventListener("unload",this.saveState)

  },
  methods: {
    saveState(){
   //   console.log("你好"+JSON.stringify(this.$store.state.User))
   // console.log(JSON.stringify(this.$store.state))

      console.log("你说啥")

      sessionStorage.setItem('userState', JSON.stringify(this.$store.state.User));


      //页面刷新前把数据保存到父组件的的isloginParent上
      //想办法在子组件中获取到这个值
      this.isloginParent=sessionStorage.getItem('isLogin');

    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
