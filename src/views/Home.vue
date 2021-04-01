<template>
  <div id="home">
    <Header></Header>
    <div class="home-flex flex">
      <div class="home-left">
        <CreateTask :style="{'margin-bottom' :'50px'}"></CreateTask>
        <Search @search="getSearch"></Search>
      </div>
      <div class="home-right">
        <Task :searchedText="searchContent"></Task>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return{
      searchContent:""
    }
  },
  methods:{
    getSearch(text){
      this.searchContent = text
      console.log(this.searchContent)
    },
    detroit(){
      console.log(this.$store.state.user.id)
      console.log(this.$store.state.auth)
    }
  },
  async created(){
    console.log(this.searchContent)
  },
  mounted(){
    console.log(this.$store.state.auth)
  }
}
</script>
<style scoped>
#home{
  height: 100%;
  background: url(../assets/TaskTiming_Welcome.jpg);
  background-color: red;
  background-size: cover;
}
.home-flex{
  margin: 0 2.5%;
}
.home-flex *{
  margin: 0 2.5%;
}
.home-left{
  width: 50%;
}
.home-right{
  width: 50%;
}
@media screen and (max-width:768px){
.home-flex{
  display: block;
}
.home-flex *{
  margin: auto;
}
.home-left{
  width: 80%;
  margin-bottom: 50px;
}
.home-right{
  width: 80%;
}

}
</style>