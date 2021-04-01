<template>
  <div id="login">
    <HeaderAuth></HeaderAuth>
    <div class="login_block">
      <h1>
        ログイン
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
      <button class="login-button" @click="login">ログイン</button>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return{
      email: "",
      password: ""
    }
  },
  computed:{
    doublenum(){
      return this.$store.state.number*2
    }
  },
  methods:{
    login(){
      this.$store.dispatch('login',{
        email : this.email,
        password : this.password
      });
    }
  }
}
</script>
<style scoped>
#login{
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
.login_block{
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
.login-button{
  background-color: white;
  color: crimson;
  margin-top: 20px;
}
</style>