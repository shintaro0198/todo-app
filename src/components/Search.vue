<template>
  <div id="search">
    <h2 class="title">
      検索
    </h2>
    <input type="text" v-model="text">
    <button @click="hit">検索</button>
  </div>
</template>

<script> 
export default {
  data(){
    return{
      text:""
    }
  },
  methods:{
    hit(){
      this.$emit('search',this.text)
    }
  },
}
</script>
<style scoped>
#search{
  width: 90%;
  border: solid 1px black;
  height: 110px;
  padding: 20px 0;
  text-align: center;
}
#search *{
  margin:5px ;
}
input{
  width: 80%;
  font-size: 15px;
  line-height: 25px;
}
</style>