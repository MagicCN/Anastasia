<template>
  <div id="app">
    <div class="header">
      {{title}}
    </div>
    <router-view class="routerBox"></router-view>

    <div class="footer">
      <router-link to="/book">图书</router-link>
      <router-link to="/music">音乐</router-link>
      <router-link to="/film">影视</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      title:"主页"
    }
  },
}
</script>

<style>
.routerBox{
  padding-bottom: 2rem;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
body{
  margin:0
}
*{
  margin:0;
  padding:0
}
.header{
  width:100%;
  height:3rem;
  background:black;
  color:white;
  text-align: center;
  line-height: 3rem;
}
.footer{
  width:100%;
  position:fixed;
  bottom:0;
  display:flex;
}
.footer a{
  width:33.33%;
  height:2rem;
  text-align:center;
  line-height:2rem;
  margin:0;
  background:lightblue;
  color:#000;
  text-decoration:none;
  
}
.footer div:hover{
  background:yellow;
}
</style>
