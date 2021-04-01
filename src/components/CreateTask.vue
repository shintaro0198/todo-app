<template>
  <div id="createTask">
    <h2 class="title">Task作成</h2>
    <input type="text"  v-model="text">
    <button @click="post">ADD</button>
  </div>
</template>

<script>
import axios from "axios"
export default {
  data() {
    return {
      text:""
    }
  },
  methods:{
    post(){
      axios.post('https://damp-fjord-50020.herokuapp.com/api/task',{
        content : this.text,
        user_id : this.$store.state.user.id
      })
      .then(response=>{
        console.log(response)
        this.$router.go({
          path: this.$router.currentRoute.path,
              force: true,
        })
      })
    }
  }
}
</script>
<style scoped>
#createTask{
  width: 90%;
  border: solid 1px black;
  text-align: center;
  padding: 20px 0;
  height: 100px;
}
#createTask *{
  margin: 5px;
}

input{
  width: 80%;
  font-size: 15px;
  line-height: 25px;
}
</style>