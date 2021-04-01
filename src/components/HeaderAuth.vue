<template>
  <div id="headerAuth">
    <div class="headerAuth_block">
      <h1>To Do It</h1>
      <ul>
        <li class="pointer" @click="$router.push('./signup')">Sing Up</li>
        <li class="pointer" 
        @click="$router.push
        ('/')"
        >Log In </li>
      </ul>
      <div class="hamburger" @click="change">
        <span :class="span1">
        </span>
        <span :class="span2">
        </span>
        <span :class="span3">
        </span>
      </div>
    </div>
    <div :class="hamburgerMenu">
      <p @click="$router.push('/signup')" class="menu-title">Sign Up</p>
      <p @click="$router.push('/')">Log In</p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      span1:'line1',
      span2:'line2',
      span3:'line3',
      hamburgerMenu:'hidden'
    }
  },
  methods:{
    change(){
      if(this.span1 === 'line1'){
      this.span1 = 'cross1',
      this.span2 = 'cross2',
      this.span3 = 'cross3'
      this.hamburgerMenu = 'open'
      } else{
        this.span1 ='line1',
        this.span2 = 'line2',
        this.span3 = 'line3',
        this.hamburgerMenu = 'hidden'
      }
    }
  }
}
</script>
<style scoped>
#headerAuth{
  width: 100%;
  height: 70px;
  font-size: 20px;
  line-height: 70px;
  
  background-color: white;
}
.headerAuth_block{
  margin: 0 60px;
  display: flex;
  justify-content: space-between;
}
ul{
  display: flex;
}
li{
   margin-right: 20px;
}
.hamburger{
  display: none;
}
@media screen and (max-width:768px){
  .headerAuth_block{
    margin: 0 30px;
  }
  ul{
    display: none;
  }
  .hamburger{
    width: 70px;
    height: 70px;
    display: block;
    position: relative;
    cursor: pointer;
    text-align: center;
    z-index: 200;
  }
  .hidden{
    height: 100%;
    width: 50%;
    background-color:gray ;
    position: absolute;
    top: 0%;
    left: 100%;
    transition: 0.5s;
    z-index: 100;
  }
  .open{
    height: 100%;
    width: 30%;
    background-color: white;
    border-radius: 3px;
    position: absolute;
    top: 0%;
    left: 70%;
    transition: 0.5s;
    z-index: 100;
  }
  .menu-title{
    margin-top: 70px;
  }
  p{
    margin-left: 10px;
    margin-bottom: 20px;
    cursor: pointer;
  }
  .hamburger span{
    height: 5px;
    width: 50px;
    position: absolute;
    display: block;
    background-color: black;
    border-radius: 3px;
  }
  .line1{
    top: 20px;
    transition: 0.5s;
  }
  .line2{
    top: 35px;
    transition:0.5s ;
  }
  .line3{
    top: 50px;
    transition: 0.5s;
  }
  .cross1{
    top:35px;
    transform: rotate(-135deg);
    transition: 0.5s;
  }
  .cross2{
    top: 35px;
    transition: 0.5s;
    opacity: 0;
  }
  .cross3{
    top: 35px;
    transform: rotate(135deg);
    transition: 0.5s;
  }
}
</style>