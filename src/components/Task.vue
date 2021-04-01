<template>
  <div id="task">
    <h2 class="title">
      Task
    </h2>
    <div v-for="(task,index) in list" :key="task" class="task-content">
      <input type="checkbox" :id="index" >
      <label :for="index" class="pointer">{{task}}</label>
      <input type="text" class="hiddenText" v-model="editedText">
      <button class="hiddenButton" @click="edit(id)">edit</button>
      <button @click="drop(id)">done</button>
    </div>
  </div>
</template>

<script>
import axios from "axios"
export default {
  data(){
    return {
      tasks :[],
      check : "",
      id:"",
      editedText:""
    }
  },
  props:["searchedText"],
  methods:{
    edit(id){
      console.log(id)
      axios.put('https://damp-fjord-50020.herokuapp.com/api/task',{
        content : this.editedText,
        id : id,
      })
      .then(response=>{
        console.log(response)
        this.$router.go({
          path: this.$router.currentRoute.path,
              force: true,
        })
      })
    },
    drop(deleteId){
      console.log(deleteId)
      axios.delete('https://damp-fjord-50020.herokuapp.com/api/task/'+deleteId)
      .then(response=>{
        console.log(response)
        this.$router.go({
          path: this.$router.currentRoute.path,
              force: true,
        })
      })
    },
     async getTask(){
      const value = await axios.get('https://damp-fjord-50020.herokuapp.com/api/task/' + this.$store.state.user.id);
      for (let i=0;i<value.data.data.length;i+=1){
        let task = value.data.data[i].content
        this. id =value.data.data[i].id
        this.check = i
        console.log(this.id)
        this.tasks.push(task)
        console.log(value)
      }
    },
  },
  async created(){
    console.log(this.searchedText)
    await this.getTask()
  },
  computed:{
    list(){
      const toDoList =[]
      for(let i =0;i<this.tasks.length;i++){
      const detail = this.tasks[i]
      if(detail.indexOf(this.searchedText)!== -1){
      toDoList.push(detail)}}
      return toDoList
    }
  },
  
}
</script>

<style scoped>
#task{
  width: 90%;
  height: 300px;
  border: solid 1px black;
  padding: 20px 0;

}
.title{
  text-align: center;
}
.task-content{
  margin: 20px;
}
.task-content *{
  margin: 0 5px;
}
.hiddenText{
  display: none;
}
.hiddenButton{
  display: none;
}
#index{
  display: none;
}
input{
  display: none;
}
input:checked +label{
  opacity: 0.6;
}
input:checked ~ .hiddenText{
  display: inline-block;
}
input:checked ~ .hiddenButton{
  display: inline-block;
}
</style>
