<template>
  <div id="signUp">
    <HeaderAuth></HeaderAuth>
    <div class="signUp_block">
      <h1>
        サインアップ
      </h1>
      <p>
        メールアドレス
      </p>
      <input type="email" v-model="email">
      <p>
        パスワード
      </p>
      <input type="text"
      v-model="password">
      <br>
      <button class="signUp-button" @click="signUp">サインアップ</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data(){
    return {
      email : "",
      password : "",
    }
  },

  methods:{
    signUp(){
      axios.post('https://damp-fjord-50020.herokuapp.com/api/register',{
        'email': this.email,
        'password' : this.password,
      })
      .then(response=>{
        console.log(response);
        this.$router.push('/home');
      })
    }
  }
}
</script>
<style scoped>
#signUp{
  background: url(../assets/finance-2-730x495.jpg);
  background-size: cover;
  height: 100%;
  
}
p{
  font-size: 16px;
}
input{
  font-size: 15px;
  line-height: 20px;
}
.signUp_block{
  width: 300px;
  padding: 20px 0;
  background-color:white;
  text-align: center;
  border-radius: 5px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
}
p{
  margin-top: 20px;
  margin-bottom: 10px;
}
.signUp-button{
  background-color: white;
  color: crimson;
  margin-top: 20px;
}
</style>